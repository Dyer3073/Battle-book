import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SafeAreaTopScrim } from "@hatch/space-sdk/client";
import { api, type ApiResponse } from "./api";
import battleBookIcon from "./assets/battle-book-icon.webp";
import battleBookLogo from "./assets/battle-book-logo.webp";
import { ALL_MOS_ENTRIES, BRANCHES, BRANCH_TESTS, GUIDES, PACK_ITEMS, type MosEntry } from "./data";
import { DOD_INSIGNIA_LABEL, DOD_INSIGNIA_URL, FIVE_STAR_NOTE, RANK_CHARTS, type RankRow } from "./ranks";
import { INSIGNIA_GUIDE_LABEL, UNIFORM_NOTES, WARRANT_EXTRA_NOTES, insigniaFor, type RankCategory } from "./insignia";
import { InsigniaArt } from "./InsigniaArt";
import { DECK_TOPICS, type DeckTopic } from "./deckTopics";
import { PATHS, anchorSlug, type PathDef } from "./paths";
import { computeDeadlineCards } from "./deadlines";
import {
  BENEFITS_STANDING_NOTE,
  BRANCH_BENEFITS,
  BRANCH_STANDING_NOTE,
  STATE_BENEFIT,
  UNIVERSAL_BENEFITS,
  type BenefitItem,
} from "./benefits";
import {
  DEAL_PLATFORMS,
  FINDER_CATEGORIES,
  FINDER_FRAMING,
  FINDER_SOURCES,
  ONBASE_GROUPS,
  STANDING_PROGRAMS,
  eventbritePlaceUrl,
  type FinderCategory,
  type FinderSource,
  type OnBaseEntry,
} from "./deals";
import {
  EAS_PANEL_TITLE,
  EAS_STEPS,
  TRANSITION_GROUPS,
  TRANSITION_STANDING_NOTE,
  type TransitionEntry,
} from "./transition";
import { EDUCATION_SECTIONS, EDUCATION_STANDING_NOTE, type EducationEntry } from "./education";
import {
  MONEY_GROUPS,
  MONEY_STANDING_NOTE,
  type LesBlock,
  type MoneyEntry,
  type MoneyGroup,
} from "./money";
import {
  PCS_FLAG_NOTE,
  PCS_GROUPS,
  PCS_STANDING_NOTE,
  type PcsEntry,
} from "./pcs";
import {
  FAMILY_GROUPS,
  FAMILY_STANDING_NOTE,
  type FamilyEntry,
  type FamilyLink,
} from "./family";
import {
  CLAIMS_FLAGS_NOTE,
  CLAIMS_GROUPS,
  CLAIMS_STANDING_NOTE,
  type ClaimsEntry,
  type ClaimsLink,
} from "./claims";
import {
  READINESS_GROUPS,
  READINESS_STANDING_NOTE,
  type ReadinessEntry,
  type ReadinessLink,
} from "./readiness";
import {
  RETIREMENT_GROUPS,
  RETIREMENT_STANDING_NOTE,
  type RetirementEntry,
  type RetirementLink,
} from "./retirement";
import {
  RECORDS_GROUPS,
  RECORDS_STANDING_NOTE,
  type RecordsEntry,
  type RecordsLink,
} from "./records";
import {
  CARE_GROUPS,
  CARE_STANDING_NOTE,
  type CareEntry,
  type CareLink,
} from "./care";
import {
  NASDVA,
  STATE_ENTRIES,
  STATES_STANDING_NOTE,
  type StateEntry,
} from "./states";
import {
  FIND_GROUPS,
  FIND_STANDING_NOTE,
  FIND_TOTAL,
  type FindEntry,
  type FindLink,
} from "./find";
import {
  CHANGE_JOB_GROUPS,
  CHANGE_JOB_STANDING_NOTE,
  type ChangeJobEntry,
  type ChangeJobLink,
} from "./changejob";
import {
  SWITCH_GROUPS,
  SWITCH_STANDING_NOTE,
  type SwitchEntry,
  type SwitchLink,
} from "./switchbranches";
import {
  COMBAT_SOURCES,
  MACP,
  MCMAP_BELTS,
  MCMAP_COUNTS,
  MCMAP_FRAMING,
  OTHER_BRANCH_PROGRAMS,
  SAFETY_FRAMING,
  type CombatBelt,
} from "./combatives";
import { TechniqueDiagram } from "./CombatDiagrams";
import {
  DECORATED_CAVEAT,
  DECORATED_PROFILES,
  DISPLAY_CHOICES,
  DOCUMENTED_STORIES,
  MOH_CAVEAT,
  MOH_PROFILES,
  MOH_ROUTES,
  MOH_WOMAN_NOTE,
  STORY_ACK,
  STORY_BRANCHES,
  STORY_CATEGORIES,
  STORY_ERAS,
  STORY_RULES,
  VHP_LABEL,
  type DecoratedProfile,
  type DocumentedStory,
  type MohProfile,
  type MohRoute,
  type StoryLink,
} from "./warstories";
import {
  HONOR_BRANCHES,
  HONOR_ERAS,
  TRIBUTE_ACK,
  TRIBUTE_RULES,
  fallsOnToday,
  formatTributeDate,
  tributeYear,
} from "./wallofhonor";
import {
  BRANCH_ROUTES,
  BRANCH_ROUTES_NOTE,
  MONTH_NAMES,
  THIS_DAY_ENTRIES,
  THIS_DAY_GAPS_NOTE,
  entriesByMonth,
  entriesForDate,
  formatMonthDay,
  isMemorialDay,
  nearestEntry,
  occurrenceInYear,
  relativeDays,
  type BranchRoute,
  type ThisDayAppLink,
  type ThisDayEntry,
} from "./thisday";
import {
  MENTOR_ACK,
  MENTOR_CARE_NOTE,
  MENTOR_DISPLAY_CHOICES,
  MENTOR_RULES,
  MENTOR_TOPICS,
  type MentorTopic,
} from "./mentors";
import {
  TRADITION_GROUPS,
  TRADITIONS_LABELS_NOTE,
  TRADITIONS_STANDING_RULE,
  type TraditionItem,
  type TraditionLabel,
} from "./traditions";
import {
  ADDRESSING_RULE,
  EXAMPLE_ADDRESSES,
  HOLIDAY_ROWS,
  HOLIDAY_TABLE_NOTE,
  MAIL_GROUPS,
  MAIL_STANDING_NOTE,
  type MailEntry,
} from "./mailcall";
import {
  TIMELINE_FORM_OPSEC,
  TIMELINE_PRIVACY_LINES,
  TIMELINE_STARTERS,
  TIMELINE_TYPES,
  formatTimelineDate,
  precisionOf,
  sortTimeline,
  timelineSummary,
  timelineTypeLabel,
  type TimelineEntry,
  type TimelineEntryType,
  type TimelinePrecision,
} from "./timeline";
import { UsMapPicker, profileHomeState } from "./usMap";
import { GlobalSearch } from "./GlobalSearch";
import type { SearchHit } from "./searchIndex";
import { daysUntilEas, easWithinYear, relevancePriority } from "./personalize";
import {
  BINDER_SECTIONS,
  BinderProvider,
  CardTools,
  binderSectionLabel,
  sourceFromLinks,
  trustLine,
  useBinder,
  type BinderItem,
} from "./binder";

type Profile = NonNullable<ApiResponse<typeof api, "getProfile">["profile"]>;
type Story = ApiResponse<typeof api, "getNews">["stories"][number];
type Contribution = ApiResponse<typeof api, "listContributions">["contributions"][number];
type PlanResult = ApiResponse<typeof api, "generatePlan">;
type View = "home" | "mos" | "ranks" | "benefits" | "deals" | "transition" | "pay" | "pcs" | "family" | "claims" | "readiness" | "retirement" | "records" | "states" | "care" | "find" | "changejob" | "switchbranches" | "education" | "combat" | "fieldcraft" | "warstories" | "wallofhonor" | "thisday" | "mentors" | "traditions" | "mailcall" | "timeline" | "fitness" | "news" | "checkin" | "review" | "paths" | "deadlines" | "binder" | "more";
type MemberStory = ApiResponse<typeof api, "listWarStories">["stories"][number];
type MemberTribute = ApiResponse<typeof api, "listTributes">["tributes"][number];
type MemberMentor = ApiResponse<typeof api, "listMentors">["mentors"][number];
type MemberMentorRequest = ApiResponse<typeof api, "listMentorRequests">["requests"][number];

/** What the print sheet is currently rendering, if anything. */
type PrintJob =
  | { kind: "binder"; items: BinderItem[] }
  | { kind: "path"; path: PathDef; completed: string[] }
  | { kind: "timeline"; entries: TimelineEntry[]; memberName: string };

const STATUS_LABEL: Record<string, string> = {
  good: "Good",
  rough: "Rough day",
  talk: "Need to talk",
  dark: "Going Dark",
};

function todayKey(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function Badge({ children, tone }: { children: ReactNode; tone?: "official" | "amber" | "red" | "plain" }) {
  const cls =
    tone === "official"
      ? "bg-[var(--accent)] text-[var(--accent-text)]"
      : tone === "amber"
        ? "bg-[var(--amber-bg)] text-[var(--amber)]"
        : tone === "red"
          ? "bg-[var(--red-bg)] text-[var(--red)]"
          : "bg-[var(--surface2)] text-[var(--dim)]";
  return <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold tracking-wide ${cls}`}>{children}</span>;
}

function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-3">
      <h2 className="font-display text-2xl font-bold text-[var(--text)]">{title}</h2>
      {sub ? <p className="mt-1 text-sm text-[var(--dim)]">{sub}</p> : null}
    </div>
  );
}

const inputCls =
  "w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]";
const labelCls = "mb-1 block text-sm font-semibold text-[var(--text)]";
const btnPrimary =
  "rounded-[var(--radius)] bg-[var(--accent)] px-4 py-3 text-base font-bold text-[var(--accent-text)] disabled:opacity-50";
const btnGhost =
  "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-semibold text-[var(--text)] disabled:opacity-50";

export function App() {
  const queryClient = useQueryClient();
  const profileQ = useQuery({ queryKey: ["profile"], queryFn: () => api.getProfile({}) });
  const [view, setView] = useState<View>("home");
  const [gatePassed, setGatePassed] = useState(false);
  // Simulated sign-in extras: "switch profile" returns to the gate's
  // profile picker, and the gate can route into onboarding in
  // create-a-new-profile mode instead of editing the existing one.
  const [signedOut, setSignedOut] = useState(false);
  const [creatingNewProfile, setCreatingNewProfile] = useState(false);
  // Squad invite deep link: a join link carries the code in the URL
  // hash (#join/CODE). Opening one lands on Check-In's Join a Squad
  // with the code prefilled.
  const [joinSeed, setJoinSeed] = useState<{ code: string; n: number } | null>(null);
  useEffect(() => {
    const m = window.location.hash.match(/join[/=]([A-Za-z0-9-]{4,24})/i);
    if (m && m[1]) {
      setJoinSeed({ code: m[1].toUpperCase(), n: Date.now() });
      setView("checkin");
    }
  }, []);
  // Deep-link support for Guided Paths / Deadlines steps: navigate to a
  // view, then scroll to the group whose aria-label slug matches.
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);
  const goTo = (v: View, anchor?: string) => {
    setView(v);
    setPendingAnchor(anchor ?? null);
  };
  // Library deep link: Global Search results and the Home "Your Job" card
  // open the Library straight onto one entry. The nonce re-fires the
  // hand-off when the same entry is picked twice in a row.
  const [mosFocus, setMosFocus] = useState<{ id: string; n: number } | null>(null);
  const openMosEntry = (id: string) => {
    setMosFocus({ id, n: Date.now() });
    setView("mos");
  };
  // State Benefits Finder deep link: the Home "Your state" card opens the
  // finder straight onto the member's home-state card. Same nonce pattern
  // as the Library hand-off above.
  const [stateFocus, setStateFocus] = useState<{ name: string; n: number } | null>(null);
  const openStateEntry = (name: string) => {
    setStateFocus({ name, n: Date.now() });
    setView("states");
  };
  const handleSearchHit = (hit: SearchHit) => {
    if (hit.mosId) {
      openMosEntry(hit.mosId);
      return;
    }
    goTo(hit.view as View, hit.anchor);
  };
  // My Binder deep link: navigate to the card's section, then scroll to
  // the card itself (its CardTools footer carries data-card-anchor).
  const [pendingCard, setPendingCard] = useState<string | null>(null);
  const openBinderItem = (item: BinderItem) => {
    if (item.section === "mos") {
      openMosEntry(item.itemKey);
      return;
    }
    setView(item.section as View);
    setPendingCard(item.title);
  };
  // This Day in Military History deep links: follow the pack's "App
  // link" column into existing content — a specific card (scrolled to
  // via its CardTools anchor), a section anchor, or a whole view.
  const openThisDayLink = (link: ThisDayAppLink) => {
    if (link.cardTitle) {
      setView(link.view as View);
      setPendingCard(link.cardTitle);
      return;
    }
    if (link.anchor) {
      goTo(link.view as View, link.anchor);
      return;
    }
    setView(link.view as View);
  };
  useEffect(() => {
    if (!pendingCard) return;
    const slug = anchorSlug(pendingCard);
    const t = window.setTimeout(() => {
      const el = document.querySelector(`[data-card-anchor="${slug}"]`);
      if (el) {
        (el.closest("article") ?? el.closest("section") ?? el).scrollIntoView({ block: "start" });
      }
      setPendingCard(null);
    }, 140);
    return () => window.clearTimeout(t);
  }, [view, pendingCard]);
  // Print sheet (My Binder / one Guided Path) replaces the app shell
  // while open; the browser's own print flow prints just the sheet.
  const [printJob, setPrintJob] = useState<PrintJob | null>(null);
  useEffect(() => {
    if (!pendingAnchor) return;
    const slug = anchorSlug(pendingAnchor);
    const t = window.setTimeout(() => {
      const els = Array.from(document.querySelectorAll("[aria-label]"));
      for (const el of els) {
        if (anchorSlug(el.getAttribute("aria-label") ?? "") === slug) {
          el.scrollIntoView({ block: "start" });
          break;
        }
      }
      setPendingAnchor(null);
    }, 90);
    return () => window.clearTimeout(t);
  }, [view, pendingAnchor]);

  if (profileQ.isPending) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-4 py-16 text-center">
        <p className="text-base text-[var(--dim)]">Loading your service book…</p>
      </div>
    );
  }
  if (profileQ.error) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-4 py-16 text-center">
        <p className="text-base text-[var(--red)]">Could not load the app. Pull to retry, or reopen it.</p>
      </div>
    );
  }

  const profile = profileQ.data.profile;
  const onboarded = profile?.onboarded === true;

  if (creatingNewProfile) {
    return (
      <Onboarding
        createNew
        onDone={() => {
          setCreatingNewProfile(false);
          setSignedOut(false);
          setGatePassed(true);
          setView("home");
        }}
      />
    );
  }
  if (signedOut || (!onboarded && !gatePassed)) {
    return (
      <LoginGate
        onContinueAs={(id) => {
          void (async () => {
            await api.signInAsProfile({ id });
            await queryClient.invalidateQueries();
            setSignedOut(false);
            setGatePassed(true);
          })();
        }}
        onNewProfile={() => setCreatingNewProfile(true)}
      />
    );
  }
  if (!onboarded) {
    return <Onboarding onDone={() => setView("home")} />;
  }

  // Bottom bar: exactly six destinations. Everything else lives in the
  // More hub so labels always render at full size and never crowd.
  const barNav: { key: View; label: string; icon: NavIconName }[] = [
    { key: "home", label: "Home", icon: "home" },
    { key: "mos", label: "Library", icon: "book" },
    { key: "news", label: "News", icon: "news" },
    { key: "fitness", label: "Fitness", icon: "pulse" },
    { key: "checkin", label: "Check-In", icon: "check" },
    { key: "more", label: "More", icon: "grid" },
  ];
  const moreActive = view === "more" || MORE_SECTIONS.some((s) => s.key === view);

  if (printJob) {
    return (
      <BinderProvider>
        <PrintSheet job={printJob} onClose={() => setPrintJob(null)} />
      </BinderProvider>
    );
  }

  return (
    <BinderProvider>
    <div className="min-h-screen bg-[var(--bg)] pb-28">
      <SafeAreaTopScrim backgroundColor="var(--bg)" />
      <main className="mx-auto w-full max-w-3xl px-4 pt-4">
        {view === "home" && <HomeView profile={profile} go={setView} goTo={goTo} onSearchHit={handleSearchHit} openMos={openMosEntry} openState={openStateEntry} openThisDayLink={openThisDayLink} onSwitchProfile={() => setSignedOut(true)} />}
        {view === "paths" && <PathsView goTo={goTo} onPrintPath={(path, completed) => setPrintJob({ kind: "path", path, completed })} />}
        {view === "binder" && (
          <BinderView
            openItem={openBinderItem}
            onPrint={(items) => setPrintJob({ kind: "binder", items })}
          />
        )}
        {view === "deadlines" && <DeadlinesView profile={profile} goTo={goTo} />}
        {view === "mos" && (
          <MosView
            profile={profile}
            goReview={() => setView("review")}
            focusId={mosFocus?.id ?? null}
            focusNonce={mosFocus?.n ?? 0}
            onFocusHandled={() => setMosFocus(null)}
          />
        )}
        {view === "ranks" && <RankChartsView />}
        {view === "benefits" && <BenefitsView profile={profile} />}
        {view === "deals" && <DealsView />}
        {view === "transition" && <TransitionView go={setView} />}
        {view === "pay" && <MoneyView go={setView} />}
        {view === "pcs" && <PcsView go={setView} />}
        {view === "family" && <FamilyView go={setView} />}
        {view === "claims" && <ClaimsView go={setView} />}
        {view === "readiness" && <ReadinessView go={setView} />}
        {view === "retirement" && <RetirementView go={setView} />}
        {view === "records" && <RecordsView go={setView} />}
        {view === "states" && (
          <StatesView
            profile={profile}
            focusName={stateFocus?.name ?? null}
            focusNonce={stateFocus?.n ?? 0}
            onFocusHandled={() => setStateFocus(null)}
          />
        )}
        {view === "care" && <CareView go={setView} />}
        {view === "find" && <FindView />}
        {view === "changejob" && <ChangeJobView go={setView} />}
        {view === "switchbranches" && <SwitchBranchesView />}
        {view === "education" && <EducationView go={setView} />}
        {view === "combat" && <CombatView />}
        {view === "fieldcraft" && <FieldcraftView />}
        {view === "warstories" && <WarStoriesView profile={profile} goReview={() => setView("review")} />}
        {view === "wallofhonor" && <WallOfHonorView profile={profile} goReview={() => setView("review")} />}
        {view === "thisday" && <ThisDayView openAppLink={openThisDayLink} />}
        {view === "mentors" && <MentorsView profile={profile} go={setView} goReview={() => setView("review")} />}
        {view === "traditions" && <TraditionsView />}
        {view === "mailcall" && <MailCallView />}
        {view === "timeline" && (
          <TimelineView
            onPrint={(entries) =>
              setPrintJob({
                kind: "timeline",
                entries,
                memberName: [profile.rank, profile.displayName].filter(Boolean).join(" ") || "Service Member",
              })
            }
          />
        )}
        {view === "fitness" && <FitnessView profile={profile} />}
        {view === "news" && <NewsView profile={profile} />}
        {view === "checkin" && <CheckinView profile={profile} joinSeed={joinSeed} />}
        {view === "review" && <ReviewView goBack={() => setView("mos")} />}
        {view === "more" && <MoreView profile={profile} go={setView} onSearchHit={handleSearchHit} />}
      </main>
      <nav aria-label="Main sections" className="fixed inset-x-0 bottom-0 border-t border-[var(--border)] bg-[var(--surface)] pb-safe">
        <div className="mx-auto grid max-w-3xl grid-cols-6">
          {barNav.map((n) => {
            const active = n.key === "more" ? moreActive : view === n.key;
            return (
              <button
                key={n.key}
                type="button"
                aria-label={n.label}
                aria-current={active ? "page" : undefined}
                onClick={() => setView(n.key)}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 ${active ? "text-[var(--accent)]" : "text-[var(--dim)]"}`}
              >
                <NavIcon name={n.icon} />
                <span className={`text-xs leading-none ${active ? "font-bold" : "font-semibold"}`}>{n.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
    </BinderProvider>
  );
}

/* --------------------------- Bottom-bar icons ---------------------------- */

type NavIconName =
  | "home"
  | "book"
  | "news"
  | "pulse"
  | "check"
  | "grid"
  | "chevrons"
  | "shield"
  | "tag"
  | "briefcase"
  | "wallet"
  | "truck"
  | "heart"
  | "clipboard"
  | "compass"
  | "sunset"
  | "folder"
  | "pin"
  | "cross"
  | "search"
  | "cap"
  | "swords"
  | "swap"
  | "branches"
  | "route"
  | "calendar"
  | "binder"
  | "flag"
  | "flame"
  | "users"
  | "mail"
  | "tent"
  | "clock";

const NAV_ICON_PATHS: Record<NavIconName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.8V21h14V9.8" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </>
  ),
  news: (
    <>
      <path d="M4 22h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0V9" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8z" />
    </>
  ),
  pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4c4-2 7 2 14 0v9c-7 2-10-2-14 0" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1.2 2.6-.6 4.2-1.9 5.6C9 9.8 8.2 11 8.2 12.6a3.8 3.8 0 0 0 7.6 0c0-1-.4-1.9-1-2.7" />
      <path d="M12 21.5a7.5 7.5 0 0 1-7.5-7.5c0-2.9 1.6-5.1 3.2-6.9.4 1 1 1.8 1.9 2.4C9.8 8 10.6 5.2 12 3c3.4 2.3 7.5 5.9 7.5 11A7.5 7.5 0 0 1 12 21.5z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5.2" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  chevrons: (
    <>
      <path d="m5 13 7-7 7 7" />
      <path d="m5 19 7-7 7 7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-3.6 8-10V5.2L12 2 4 5.2V12c0 6.4 8 10 8 10z" />
      <path d="m9 11.5 2.2 2.2L15.5 9.4" />
    </>
  ),
  tag: (
    <>
      <path d="M12.6 2.6 21.4 11.4a2 2 0 0 1 0 2.8l-7.2 7.2a2 2 0 0 1-2.8 0L2.6 12.6A2 2 0 0 1 2 11.2V4a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  wallet: (
    <>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2z" />
      <path d="M13 10h4l3.2 3.2V16H13" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1z" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  sunset: (
    <>
      <path d="M12 9V3" />
      <path d="m5.6 11.4-1.5-1.5" />
      <path d="m18.4 11.4 1.5-1.5" />
      <path d="M16.5 17a4.5 4.5 0 0 0-9 0" />
      <path d="M2 17h20" />
      <path d="M5 21h14" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M3 10h18" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  cross: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  cap: (
    <>
      <path d="M22 9 12 4 2 9l10 5 10-5z" />
      <path d="M6 11.4V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.6" />
      <path d="M22 9v5" />
    </>
  ),
  swords: (
    <>
      <path d="M4.5 3.5 15 14" />
      <path d="m12.5 16.5 3-3" />
      <path d="m15 19-1.8 1.8a2.1 2.1 0 0 1-3-3L12 16" />
      <path d="M19.5 3.5 9 14" />
      <path d="m11.5 16.5-3-3" />
      <path d="m9 19 1.8 1.8a2.1 2.1 0 0 0 3-3L12 16" />
    </>
  ),
  tent: (
    <>
      <path d="M12 3 2 21h20L12 3z" />
      <path d="m12 12-4.5 9h9L12 12z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H15a3 3 0 0 0 0-6h-6a3 3 0 0 1 0-6h1" />
    </>
  ),
  binder: (
    <path d="M12 3.2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.5l-5.6 2.9 1.1-6.2L3 9.8l6.2-.9L12 3.2z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </>
  ),
  swap: (
    <>
      <path d="M4 7h13" />
      <path d="m13.5 3.5 3.5 3.5-3.5 3.5" />
      <path d="M20 17H7" />
      <path d="m10.5 13.5-3.5 3.5 3.5 3.5" />
    </>
  ),
  branches: (
    <>
      <path d="M4 8a8 8 0 0 1 13.6-3" />
      <path d="M18 2v4h-4" />
      <path d="M20 16a8 8 0 0 1-13.6 3" />
      <path d="M6 22v-4h4" />
    </>
  ),
};

function NavIcon({ name, size = 24 }: { name: NavIconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {NAV_ICON_PATHS[name]}
    </svg>
  );
}

/* ------------------------------- More hub -------------------------------- */

const MORE_SECTIONS: { key: View; name: string; blurb: string; icon: NavIconName }[] = [
  { key: "binder", name: "My Binder", blurb: "Every card you've starred across the app, grouped by section, all in one place", icon: "binder" },
  { key: "paths", name: "Guided Paths", blurb: "Named journeys — Getting Out, PCS Orders, Deploying, New Baby, Retiring, Filing a Claim, Going to School — as step-by-step checklists chained from the sections", icon: "route" },
  { key: "deadlines", name: "Deadlines & Countdowns", blurb: "Your countdowns from your own dates: TAP, SkillBridge, the BDD window, intent-to-file expiry, ID card, and the January FPCA", icon: "calendar" },
  { key: "ranks", name: "Ranks", blurb: "Rank charts and insignia for all six branches", icon: "chevrons" },
  { key: "benefits", name: "Benefits", blurb: "VA & DoD benefits, branch programs, and state help", icon: "shield" },
  { key: "deals", name: "Deals & Discounts", blurb: "Military deal platforms and on-base life", icon: "tag" },
  { key: "transition", name: "Transition & Jobs", blurb: "Translate your MOS and get placed before you get out", icon: "briefcase" },
  { key: "education", name: "Education Planner", blurb: "Transcripts, free exams, and degree planning", icon: "cap" },
  { key: "pay", name: "Pay & Money", blurb: "Pay tables, allowances, LES decoder, and money help", icon: "wallet" },
  { key: "pcs", name: "PCS Move Center", blurb: "Move timeline, forgotten entitlements, household goods, housing, and claims", icon: "truck" },
  { key: "family", name: "Family & Life Events", blurb: "Life-event checklists, spouse careers, childcare, EFMP, and family support", icon: "heart" },
  { key: "claims", name: "VA Claims & VSO Guide", blurb: "How a claim moves, BDD, evidence, review lanes, and free accredited VSO help", icon: "clipboard" },
  { key: "readiness", name: "Readiness & Life Skills", blurb: "Pre-deployment readiness, special duties, uniform references, first home station, money traps, and voting", icon: "compass" },
  { key: "retirement", name: "Retirement Hub", blurb: "BRS vs. legacy High-3, the official calculators, SBP, CRDP vs. CRSC, and the retirement timeline", icon: "sunset" },
  { key: "records", name: "Records & DD214 Center", blurb: "Get, replace, and correct your service records — eVetRecs, milConnect, the 62-year rule, DD 149/293 boards, and medals", icon: "folder" },
  { key: "states", name: "State Benefits Finder", blurb: "Every state + DC: the official veterans agency and its headline benefits — property tax, tuition, veterans homes", icon: "pin" },
  { key: "care", name: "Care & Crisis", blurb: "Veterans Crisis Line pinned on top, Vet Centers, VA health care enrollment, housing help, and burial honors", icon: "cross" },
  { key: "find", name: "Find Anything", blurb: "27 official locators in 8 categories — installations, VA, ID & DEERS, commissary, Space-A, TRICARE, and the route notes where no national locator exists", icon: "search" },
  { key: "changejob", name: "Change Your Job", blurb: "Switch MOS, rating, or AFSC inside your own branch — LatMove, reclassification, conversion, retraining, and change in rating, each under its real program name", icon: "swap" },
  { key: "switchbranches", name: "Switch Branches", blurb: "Move to a different branch — the DD Form 368 transfer path vs. separating and rejoining as prior service, the reality checks, and each gaining branch's official door", icon: "branches" },
  { key: "warstories", name: "War Stories", blurb: "Documented stories from official sources, Medal of Honor profiles, the most decorated — unranked — and member stories, reviewed before they publish", icon: "flag" },
  { key: "wallofhonor", name: "Wall of Honor", blurb: "A quiet wall of member tributes to the fallen — add a name, light a candle, and remember them on their day", icon: "flame" },
  { key: "thisday", name: "This Day in Military History", blurb: "A 90-entry sourced calendar — battles, firsts, Medal of Honor actions, milestones, and branch birthdays — matched to today's date, with the branch history commands' entry points for days with no entry", icon: "calendar" },
  { key: "mentors", name: "Find a Mentor", blurb: "Members who've been where you are, by branch, job, and topic — listings reviewed before they publish, requests and connections kept inside the app", icon: "users" },
  { key: "traditions", name: "Traditions & Lore", blurb: "The culture layer — flag folds, Taps, the Tomb, branch birthdays and songs, coins, call signs, and the cries — every card labeled DOCUMENTED, TRADITION, LEGEND, or DISPUTED, with the corrections printed, not smoothed", icon: "flag" },
  { key: "mailcall", name: "Mail Call", blurb: "Care packages and military mail, from USPS/MPSA, Military OneSource, the USO, and the Red Cross only — how APO/FPO/DPO addressing works (never write the foreign city or country), the free USPS Military Care Kit, the 2026 holiday send-by dates under their ANNUAL banner, what's prohibited, what to send, and the verified letter routes", icon: "mail" },
  { key: "timeline", name: "My Service Timeline", blurb: "Your private career keepsake — the day you joined, boot camp, units, deployments, promotions, and the day it ended — oldest first, printable, and never shown to anyone else", icon: "clock" },
  { key: "combat", name: "Close Combat", blurb: "MCMAP, MACP, and service combatives catalogs", icon: "swords" },
  { key: "fieldcraft", name: "Fieldcraft", blurb: "Packing lists, rucking, and field skills", icon: "tent" },
];

function MoreView({
  profile,
  go,
  onSearchHit,
}: {
  profile: Profile;
  go: (v: View) => void;
  onSearchHit: (hit: SearchHit) => void;
}) {
  // The grid itself never reorders — it stays predictable. Only the
  // member's top-3 most relevant sections (of the ones that live here)
  // carry a FOR YOU badge.
  const forYou = relevancePriority(profile)
    .filter((k) => MORE_SECTIONS.some((s) => s.key === k))
    .slice(0, 3);
  return (
    <div>
      <SectionHead
        title="More"
        sub="Every other section of the app — tap one to open it. The bottom bar keeps Home, Library, News, Fitness, and Check-In one tap away."
      />
      <div className="mb-4">
        <GlobalSearch id="global-search-more" onNavigate={onSearchHit} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {MORE_SECTIONS.map((s) => (
          <button
            key={s.key}
            type="button"
            aria-label={s.name}
            onClick={() => go(s.key)}
            className="flex min-h-32 flex-col items-start gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-left"
          >
            <span className="flex w-full items-start justify-between gap-2">
              <span className="text-[var(--accent)]">
                <NavIcon name={s.icon} size={28} />
              </span>
              {forYou.includes(s.key) ? <Badge tone="official">FOR YOU</Badge> : null}
            </span>
            <span className="font-display text-base font-bold leading-tight text-[var(--text)]">{s.name}</span>
            <span className="text-sm leading-snug text-[var(--dim)]">{s.blurb}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Login gate ------------------------------ */

function LoginGate({
  onContinueAs,
  onNewProfile,
}: {
  onContinueAs: (id: number) => void;
  onNewProfile: () => void;
}) {
  const profilesQ = useQuery({ queryKey: ["profiles"], queryFn: () => api.listProfiles({}) });
  const profiles = profilesQ.data?.profiles ?? [];
  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-10">
      <SafeAreaTopScrim backgroundColor="var(--bg)" />
      <div className="mx-auto max-w-md">
        <div className="rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
          <p className="font-display text-base font-bold text-[var(--amber)]">DEMO — SIMULATED LOGIN</p>
          <p className="mt-1 text-sm text-[var(--text)]">
            This is a simulated ID.me screen for the prototype. There is no real ID.me connection.{" "}
            <strong>Do not enter real credentials.</strong>
          </p>
        </div>
        <div className="mt-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
          <img
            src={battleBookLogo}
            alt="Battle Book — Military Life"
            className="mx-auto mb-5 block h-auto w-full max-w-[340px]"
          />
          <p className="font-display text-sm font-bold tracking-widest text-[var(--dim)]">ID.ME — SIMULATION</p>
          <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text)]">Sign in to Battle Book</h1>
          <p className="mt-3 text-base text-[var(--dim)]">
            In a production launch, ID.me would verify your identity and military affiliation here. This prototype
            simulates that step — no account, no password, nothing leaves this app. Pick your own profile to
            continue; each profile is its own person, with its own squad seats.
          </p>
          {profilesQ.isPending ? (
            <p className="mt-6 text-base text-[var(--dim)]">Loading profiles…</p>
          ) : profiles.length > 0 ? (
            <div className="mt-6 space-y-2">
              <p className={labelCls}>Continue as</p>
              {profiles.map((p) => {
                const label = [p.rank, p.displayName].filter(Boolean).join(" ") || "Service Member";
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-label={`Continue as ${label}`}
                    onClick={() => onContinueAs(p.id)}
                    className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-4 py-3 text-left"
                  >
                    <span className="font-display block text-base font-bold text-[var(--text)]">{label}</span>
                    <span className="block text-sm text-[var(--dim)]">
                      {p.branch}
                      {p.mosCode ? ` · ${p.mosCode}` : ""}
                    </span>
                  </button>
                );
              })}
              <button type="button" aria-label="Set up a new profile" onClick={onNewProfile} className={`${btnGhost} mt-2 w-full`}>
                New here? Set up a new profile
              </button>
            </div>
          ) : (
            <button type="button" aria-label="Continue with simulated ID.me" onClick={onNewProfile} className={`${btnPrimary} mt-6 w-full`}>
              Continue with simulated ID.me
            </button>
          )}
          <p className="mt-4 text-sm text-[var(--dim)]">
            Honest labels, always: identity here is <strong>simulated</strong>, and the MOS you enter next is{" "}
            <strong>self-reported</strong> — ID.me verifies identity and affiliation, not your MOS.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Onboarding ------------------------------ */

function ProfileForm({
  initial,
  submitLabel,
  onDone,
  createNew,
}: {
  initial: Partial<Profile>;
  submitLabel: string;
  onDone: () => void;
  createNew?: boolean;
}) {
  const queryClient = useQueryClient();
  const [displayName, setDisplayName] = useState(initial.displayName ?? "");
  const [branch, setBranch] = useState(initial.branch ?? "Marine Corps");
  const [component, setComponent] = useState(initial.component ?? "Active");
  const [status, setStatus] = useState(initial.status ?? "Active duty");
  const [mosCode, setMosCode] = useState(initial.mosCode ?? "");
  const [rank, setRank] = useState(initial.rank ?? "");
  const [goals, setGoals] = useState(initial.goals ?? "");
  const [homeState, setHomeState] = useState(initial.homeState ?? "");
  const save = useMutation({
    mutationFn: () =>
      api.saveProfile({ displayName, branch, component, status, mosCode, rank, goals, homeState, createNew: createNew ?? false }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["profile"] });
      onDone();
    },
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    save.mutate();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="pf-name" className={labelCls}>Name or callsign (optional)</label>
        <input id="pf-name" aria-label="Name or callsign" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className={inputCls} placeholder="e.g., Christian" />
      </div>
      <div>
        <label htmlFor="pf-branch" className={labelCls}>Branch</label>
        <select id="pf-branch" aria-label="Branch" value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls}>
          {BRANCHES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
          <option value="Other / Not yet serving">Other / Not yet serving</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="pf-component" className={labelCls}>Component</label>
          <select id="pf-component" aria-label="Component" value={component} onChange={(e) => setComponent(e.target.value)} className={inputCls}>
            {["Active", "Reserve", "National Guard", "Veteran", "Future service member"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pf-status" className={labelCls}>Status</label>
          <select id="pf-status" aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)} className={inputCls}>
            {["Future service member", "Active duty", "Reserve / Guard", "Veteran"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="pf-mos" className={labelCls}>Your MOS / rating / AFSC</label>
          <input id="pf-mos" aria-label="Your MOS rating or AFSC code" value={mosCode} onChange={(e) => setMosCode(e.target.value)} className={inputCls} placeholder="e.g., 1371, 11B, HM" />
        </div>
        <div>
          <label htmlFor="pf-rank" className={labelCls}>Rank (optional)</label>
          <input id="pf-rank" aria-label="Rank" value={rank} onChange={(e) => setRank(e.target.value)} className={inputCls} placeholder="e.g., Cpl, E-5" />
        </div>
      </div>
      <div>
        <label htmlFor="pf-goals" className={labelCls}>Goals (optional)</label>
        <input id="pf-goals" aria-label="Goals" value={goals} onChange={(e) => setGoals(e.target.value)} className={inputCls} placeholder="Promotion, school, fitness test, transition…" />
      </div>
      <div>
        <label htmlFor="pf-home-state" className={labelCls}>Home state (optional)</label>
        <select id="pf-home-state" aria-label="Home state" value={homeState} onChange={(e) => setHomeState(e.target.value)} className={inputCls}>
          <option value="">Not set — skip for now</option>
          {STATE_ENTRIES.map((s) => (
            <option key={s.state} value={s.state}>{s.state}</option>
          ))}
        </select>
        <p className="mt-1 text-sm text-[var(--dim)]">
          The state you call home. It marks your state on the State Benefits Finder map and adds a shortcut to
          your state's benefits — nothing else uses it, and you can change or clear it any time.
        </p>
      </div>
      <p className="rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--dim)]">
        Labels on your profile: <strong>Identity — Simulated (demo)</strong> · <strong>MOS — Self-reported, not verified</strong>.
        A production version would verify MOS separately; nothing here pretends otherwise.
      </p>
      {save.isError ? <p className="text-sm text-[var(--red)]">Could not save your profile. Try again.</p> : null}
      <button type="submit" aria-label={submitLabel} disabled={save.isPending} className={`${btnPrimary} w-full`}>
        {save.isPending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}

function Onboarding({ onDone, createNew }: { onDone: () => void; createNew?: boolean }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-8">
      <SafeAreaTopScrim backgroundColor="var(--bg)" />
      <div className="mx-auto max-w-md">
        <p className="font-display text-sm font-bold tracking-widest text-[var(--accent)]">BATTLE BOOK — MILITARY LIFE</p>
        <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text)]">First login — set up your profile</h1>
        <p className="mt-2 text-base text-[var(--dim)]">
          Six quick questions. Your home screen, news feed, and fitness coach all key off this.
        </p>
        <div className="mt-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
          <ProfileForm initial={{}} submitLabel="Save profile and enter" onDone={onDone} createNew={createNew} />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Guided Paths ----------------------------- */

function PathsView({
  goTo,
  onPrintPath,
}: {
  goTo: (v: View, anchor?: string) => void;
  onPrintPath: (path: PathDef, completed: string[]) => void;
}) {
  const queryClient = useQueryClient();
  const progressQ = useQuery({ queryKey: ["pathProgress"], queryFn: () => api.getPathProgress({}) });
  const [openId, setOpenId] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const progressMap = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const p of progressQ.data?.progress ?? []) m.set(p.pathId, p.completed);
    return m;
  }, [progressQ.data]);

  // Default-open the member's in-progress path (started, not finished).
  useEffect(() => {
    if (touched || openId !== null || !progressQ.data) return;
    for (const p of PATHS) {
      const done = p.steps.filter((s) => (progressMap.get(p.id) ?? []).includes(s.key)).length;
      if (done > 0 && done < p.steps.length) {
        setOpenId(p.id);
        return;
      }
    }
  }, [progressQ.data, progressMap, openId, touched]);

  const setStep = useMutation({
    mutationFn: (args: { pathId: string; stepKey: string; done: boolean }) => api.setPathStep(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["pathProgress"] }),
  });

  return (
    <div>
      <SectionHead
        title="Guided Paths"
        sub="Pick the journey you're on. Every step is short, in order, and jumps straight to the section — and the exact group inside it — that handles the task. Check steps off as you go; progress saves to your profile."
      />
      <div className="mb-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--text)]">
          Paths add no new rules. They chain together cards and checklists that already live in this app, in the
          order the app's own sections say to do them.
        </p>
      </div>

      <div className="space-y-3">
        {PATHS.map((path) => {
          const completed = progressMap.get(path.id) ?? [];
          const doneCount = path.steps.filter((s) => completed.includes(s.key)).length;
          const pct = Math.round((doneCount / path.steps.length) * 100);
          const open = openId === path.id;
          return (
            <article key={path.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
              <button
                type="button"
                aria-label={`${path.name} path`}
                aria-expanded={open}
                onClick={() => {
                  setTouched(true);
                  setOpenId(open ? null : path.id);
                }}
                className="block w-full p-4 text-left"
              >
                <span className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-display text-lg font-bold text-[var(--text)]">{path.name}</span>
                  <span className="text-sm font-semibold text-[var(--dim)]">
                    {doneCount} of {path.steps.length} steps · {pct}%
                  </span>
                </span>
                <span className="mt-1 block text-sm text-[var(--dim)]">{path.blurb}</span>
                <span className="mt-2 block h-2 overflow-hidden rounded bg-[var(--surface2)]" aria-hidden="true">
                  <span className="block h-full bg-[var(--accent)]" style={{ width: `${pct}%` }} />
                </span>
              </button>
              {open ? (
                <div className="border-t border-[var(--border)] p-4">
                  <button
                    type="button"
                    aria-label="Print this checklist"
                    onClick={() => onPrintPath(path, completed)}
                    className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)]"
                  >
                    Print this checklist
                  </button>
                <ol className="space-y-3">
                  {path.steps.map((step, i) => {
                    const done = completed.includes(step.key);
                    return (
                      <li key={step.key} className="flex gap-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={done}
                          aria-label={`Mark step done: ${step.title}`}
                          disabled={setStep.isPending}
                          onClick={() => setStep.mutate({ pathId: path.id, stepKey: step.key, done: !done })}
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded border-2 text-base font-bold ${
                            done
                              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-text)]"
                              : "border-[var(--border)] bg-[var(--surface)] text-transparent"
                          }`}
                        >
                          ✓
                        </button>
                        <div className="min-w-0 flex-1">
                          <p className={`font-display text-base font-bold ${done ? "text-[var(--dim)] line-through" : "text-[var(--text)]"}`}>
                            {i + 1}. {step.title}
                          </p>
                          <p className="mt-0.5 text-sm text-[var(--dim)]">{step.why}</p>
                          <button
                            type="button"
                            aria-label={`${step.cta} — step: ${step.title}`}
                            onClick={() => goTo(step.view as View, step.anchor)}
                            className="mt-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)]"
                          >
                            {step.cta} →
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      {setStep.isError ? <p className="mt-3 text-sm text-[var(--red)]">Could not save that step. Try again.</p> : null}
    </div>
  );
}

/* ------------------------------- My Binder ------------------------------ */

const VIEW_LABELS: Record<string, string> = {
  home: "Home",
  mos: "MOS Library",
  news: "News",
  fitness: "Fitness",
  checkin: "Check-In",
  ranks: "Rank Charts",
  benefits: "Benefits",
  deals: "Deals & Discounts",
  transition: "Transition & Jobs",
  education: "Education Planner",
  pay: "Pay & Money",
  pcs: "PCS Move Center",
  family: "Family & Life Events",
  claims: "VA Claims & VSO Guide",
  readiness: "Readiness & Life Skills",
  retirement: "Retirement Hub",
  records: "Records & DD214 Center",
  states: "State Benefits Finder",
  care: "Care & Crisis",
  find: "Find Anything",
  changejob: "Change Your Job",
  switchbranches: "Switch Branches",
  combat: "Close Combat",
  fieldcraft: "Fieldcraft",
  warstories: "War Stories",
  mentors: "Find a Mentor",
  traditions: "Traditions & Lore",
  mailcall: "Mail Call",
  paths: "Guided Paths",
  deadlines: "Deadlines & Countdowns",
  binder: "My Binder",
};

function BinderView({
  openItem,
  onPrint,
}: {
  openItem: (item: BinderItem) => void;
  onPrint: (items: BinderItem[]) => void;
}) {
  const binder = useBinder();
  const items = binder.items;
  const groups = BINDER_SECTIONS.map((s) => ({
    ...s,
    entries: items.filter((i) => i.section === s.key),
  })).filter((g) => g.entries.length > 0);
  const ungrouped = items.filter((i) => !BINDER_SECTIONS.some((s) => s.key === i.section));

  return (
    <div>
      <SectionHead
        title="My Binder"
        sub="The cards you've starred across the app, kept together — tap one to jump back to the original card in its section."
      />
      {items.length === 0 ? (
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
          <p className="text-base text-[var(--text)]">
            Nothing saved yet. Every reference card in the app carries a star — star the BDD card in Claims and
            it&apos;ll live here, grouped by section and ready to print.
          </p>
        </div>
      ) : (
        <>
          <button
            type="button"
            aria-label="Print binder"
            onClick={() => onPrint(items)}
            className={`${btnPrimary} mb-5 w-full`}
          >
            Print binder ({items.length} card{items.length === 1 ? "" : "s"})
          </button>
          {[...groups, ...(ungrouped.length > 0 ? [{ key: "other", label: "Saved cards", entries: ungrouped }] : [])].map(
            (group) => (
              <section key={group.key} aria-label={`Binder — ${group.label}`} className="mb-6">
                <h3 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">
                  {group.label.toUpperCase()}
                </h3>
                <div className="space-y-3">
                  {group.entries.map((item) => (
                    <article
                      key={`${item.section}-${item.itemKey}`}
                      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-lg font-bold leading-snug text-[var(--text)]">{item.title}</h4>
                        <button
                          type="button"
                          aria-label={`Remove “${item.title}” from My Binder`}
                          disabled={binder.busy}
                          onClick={() => binder.remove(item.section, item.itemKey)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-base font-bold text-[var(--dim)] disabled:opacity-50"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      {item.summary ? <p className="mt-1 text-sm text-[var(--text)]">{item.summary}</p> : null}
                      <p className="mt-2 text-xs text-[var(--dim)]">{trustLine(item.source)}</p>
                      <button
                        type="button"
                        aria-label={`Open “${item.title}” in ${binderSectionLabel(item.section)}`}
                        onClick={() => openItem(item)}
                        className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)]"
                      >
                        Open in {binderSectionLabel(item.section)} →
                      </button>
                    </article>
                  ))}
                </div>
              </section>
            ),
          )}
        </>
      )}
    </div>
  );
}

/* ------------------------------ Print sheet ----------------------------- */

function PrintSheet({ job, onClose }: { job: PrintJob; onClose: () => void }) {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const sheetTitle =
    job.kind === "binder"
      ? "My Binder — Battle Book"
      : job.kind === "timeline"
        ? "My Service Timeline — Battle Book"
        : `${job.path.name} — Battle Book`;

  /** Invoke the browser's print flow for this clean sheet. */
  const handlePrintPage = () => {
    window.print();
  };

  /**
   * Open the same clean sheet as a standalone page in a new tab, for
   * shells whose sandboxed frame swallows window.print(). The standalone
   * page carries its own Print this page button that calls window.print()
   * at top level, where the print flow works.
   */
  const handleOpenStandalone = () => {
    const content = sheetRef.current?.innerHTML ?? "";
    const doc =
      `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width, initial-scale=1">` +
      `<title>${sheetTitle}</title>` +
      `<style>body{font-family:system-ui,-apple-system,sans-serif;color:#1c1c1c;background:#fff;margin:0;padding:24px}` +
      `.wrap{max-width:768px;margin:0 auto}h1{font-size:30px;line-height:1.2;margin:0}h2{font-size:18px;border-bottom:2px solid #1c1c1c;padding-bottom:4px}` +
      `h3{font-size:16px;margin:0}p{line-height:1.5}ol{padding:0;list-style:none}li{margin-bottom:16px}` +
      `.no-print{margin-bottom:24px}@media print{.no-print{display:none}}</style></head>` +
      `<body><div class="no-print"><button type="button" onclick="window.print()" ` +
      `style="padding:12px 20px;font-size:16px;font-weight:700;border-radius:10px;border:1px solid #1c1c1c;background:#4b5320;color:#fff;cursor:pointer">Print this page</button>` +
      `<p style="font-size:14px;color:#666">If Print does nothing here, use your browser's Print command.</p></div>` +
      `<div class="wrap">${content}</div></body></html>`;
    const blob = new Blob([doc], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  };

  const printedOn = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const binderGroups =
    job.kind === "binder"
      ? BINDER_SECTIONS.map((s) => ({ ...s, entries: job.items.filter((i) => i.section === s.key) })).filter(
          (g) => g.entries.length > 0,
        )
      : [];
  const pathDone = job.kind === "path" ? job.path.steps.filter((s) => job.completed.includes(s.key)).length : 0;
  const timelinePrint = job.kind === "timeline" ? timelineSummary(job.entries) : null;

  return (
    <div className="print-sheet min-h-screen bg-white px-5 py-6 text-[#1c1c1c]">
      <div className="print-toolbar mx-auto mb-8 flex max-w-3xl flex-wrap items-center gap-3">
        <button
          type="button"
          aria-label="Back to the app"
          onClick={onClose}
          className="rounded-[10px] border border-[#c9c9c9] bg-white px-4 py-3 text-base font-semibold text-[#1c1c1c]"
        >
          ← Back to the app
        </button>
        <button
          type="button"
          aria-label="Print this page"
          onClick={handlePrintPage}
          className="rounded-[10px] bg-[#4b5320] px-5 py-3 text-base font-bold text-white"
        >
          Print this page
        </button>
        <button
          type="button"
          aria-label="Open printable page in new tab"
          onClick={handleOpenStandalone}
          className="rounded-[10px] border border-[#c9c9c9] bg-white px-4 py-3 text-base font-semibold text-[#1c1c1c]"
        >
          Open in new tab
        </button>
        <p className="w-full text-sm text-[#666]">
          If Print does nothing in this app view, tap “Open in new tab”, then “Print this page” there.
        </p>
      </div>

      <div ref={sheetRef} className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2">
          <img src={battleBookIcon} alt="" className="h-8 w-8" />
          <p className="text-sm font-bold tracking-wide text-[#555]">BATTLE BOOK — MILITARY LIFE</p>
        </div>
        {job.kind === "binder" ? (
          <>
            <h1 className="text-3xl font-bold">My Binder</h1>            <p className="mt-1 text-sm text-[#555]">
              {job.items.length} saved card{job.items.length === 1 ? "" : "s"} · Printed {printedOn}
            </p>
            {binderGroups.map((group) => (
              <section key={group.key} className="mt-7">
                <h2 className="border-b-2 border-[#1c1c1c] pb-1 text-lg font-bold tracking-wide">
                  {group.label.toUpperCase()}
                </h2>
                {group.entries.map((item) => (
                  <div key={`${item.section}-${item.itemKey}`} className="mt-4 break-inside-avoid">
                    <h3 className="text-base font-bold">{item.title}</h3>
                    {item.summary ? <p className="mt-0.5 text-sm leading-relaxed">{item.summary}</p> : null}
                    <p className="mt-1 text-xs text-[#555]">{trustLine(item.source)}</p>
                  </div>
                ))}
              </section>
            ))}
          </>
        ) : job.kind === "timeline" ? (
          <>
            <h1 className="text-3xl font-bold">My Service Timeline</h1>
            <p className="mt-1 text-base">{job.memberName}</p>
            <p className="mt-1 text-sm text-[#555]">
              {timelinePrint?.count ?? 0} entr{(timelinePrint?.count ?? 0) === 1 ? "y" : "ies"}
              {timelinePrint?.spanLabel ? ` · ${timelinePrint.spanLabel}` : ""} · Printed {printedOn}
            </p>
            <p className="mt-2 text-sm text-[#555]">
              A personal keepsake from Battle Book — private to the member's profile, and not an official service
              record.
            </p>
            <ol className="mt-5 space-y-4">
              {sortTimeline(job.entries).map((e) => (
                <li key={e.id} className="break-inside-avoid">
                  <p className="text-base font-bold">
                    {formatTimelineDate(e.entryDate)} — {e.title}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#555]">
                    {timelineTypeLabel(e.entryType)}
                    {e.unit ? ` · ${e.unit}` : ""}
                    {e.place ? ` · ${e.place}` : ""}
                  </p>
                  {e.note ? <p className="mt-0.5 text-sm leading-relaxed">{e.note}</p> : null}
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">{job.path.name} — Guided Path</h1>
            <p className="mt-1 text-base">{job.path.blurb}</p>
            <p className="mt-2 text-sm font-semibold">
              {pathDone} of {job.path.steps.length} steps done · Printed {printedOn}
            </p>
            <ol className="mt-5 space-y-4">
              {job.path.steps.map((step, i) => {
                const done = job.completed.includes(step.key);
                return (
                  <li key={step.key} className="flex gap-3 break-inside-avoid">
                    <span aria-hidden="true" className="text-2xl leading-none">
                      {done ? "☑" : "☐"}
                    </span>
                    <div>
                      <p className={`text-base font-bold ${done ? "text-[#555] line-through" : ""}`}>
                        {i + 1}. {step.title}
                        {done ? " — done" : ""}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed">{step.why}</p>
                      <p className="mt-0.5 text-xs text-[#555]">
                        Section: {VIEW_LABELS[step.view] ?? step.view}
                        {step.anchor ? ` — ${step.anchor}` : ""}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------- Deadlines & Countdowns ------------------------ */

function DateField({
  id,
  label,
  unlocks,
  value,
  onChange,
  onClear,
}: {
  id: string;
  label: string;
  unlocks: string;
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      <div className="flex gap-2">
        <input
          id={id}
          aria-label={label}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
        {value ? (
          <button type="button" aria-label={`Clear ${label}`} onClick={onClear} className={btnGhost}>
            Clear
          </button>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-[var(--dim)]">{unlocks}</p>
    </div>
  );
}

function DeadlinesView({ profile, goTo }: { profile: Profile; goTo: (v: View, anchor?: string) => void }) {
  const queryClient = useQueryClient();
  const [easDate, setEasDate] = useState(profile.easDate);
  const [itfDate, setItfDate] = useState(profile.itfDate);
  const [idCardExpiry, setIdCardExpiry] = useState(profile.idCardExpiry);
  const save = useMutation({
    mutationFn: (d: { easDate: string; itfDate: string; idCardExpiry: string }) => api.saveProfileDates(d),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["profile"] }),
  });
  const hasDates = Boolean(profile.easDate || profile.itfDate || profile.idCardExpiry);
  const cards = computeDeadlineCards({
    easDate: profile.easDate,
    itfDate: profile.itfDate,
    idCardExpiry: profile.idCardExpiry,
  });

  function clearField(field: "eas" | "itf" | "id") {
    const next = {
      easDate: field === "eas" ? "" : easDate,
      itfDate: field === "itf" ? "" : itfDate,
      idCardExpiry: field === "id" ? "" : idCardExpiry,
    };
    setEasDate(next.easDate);
    setItfDate(next.itfDate);
    setIdCardExpiry(next.idCardExpiry);
    save.mutate(next);
  }

  return (
    <div>
      <SectionHead
        title="Deadlines & Countdowns"
        sub="The windows service members actually miss, counted down from your own dates — TAP, SkillBridge, the BDD claim window, your intent to file, your ID card, and the January FPCA."
      />

      <div className="mb-5 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-sm font-semibold text-[var(--text)]">
          Planning aid only. Every countdown is computed from dates you enter here and the official windows
          documented in this app's sections. Your dates are stored only in your profile — nothing is sent
          anywhere. This board is in-app display only; no push notifications are sent.
        </p>
      </div>

      <section aria-label="Your dates" className="mb-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Your dates — all optional</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Set any of them, change them, or clear them at any time. The board below rebuilds from what you save.
        </p>
        <div className="mt-4 space-y-4">
          <DateField
            id="dl-eas"
            label="Separation / EAS date"
            unlocks="Unlocks TAP (start 365 days out), SkillBridge (final 180 days), the BDD window (180–90 days), and the Separation Health Assessment (final 90 days)."
            value={easDate}
            onChange={setEasDate}
            onClear={() => clearField("eas")}
          />
          <DateField
            id="dl-itf"
            label="Intent-to-file date"
            unlocks="The day you filed — or plan to file — an intent to file. Unlocks its 1-year expiration countdown."
            value={itfDate}
            onChange={setItfDate}
            onClear={() => clearField("itf")}
          />
          <DateField
            id="dl-id"
            label="ID card expiration"
            unlocks="The expiration printed on your ID card. Unlocks the renewal countdown and the RAPIDS locator route."
            value={idCardExpiry}
            onChange={setIdCardExpiry}
            onClear={() => clearField("id")}
          />
        </div>
        {save.isError ? <p className="mt-3 text-sm text-[var(--red)]">Could not save your dates. Try again.</p> : null}
        <button
          type="button"
          aria-label="Save dates"
          disabled={save.isPending}
          onClick={() => save.mutate({ easDate, itfDate, idCardExpiry })}
          className={`${btnPrimary} mt-4 w-full`}
        >
          {save.isPending ? "Saving…" : "Save dates"}
        </button>
      </section>

      {!hasDates ? (
        <div className="mb-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="font-display text-lg font-bold text-[var(--text)]">What each date unlocks</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
            <li><strong>Separation / EAS</strong> — four countdowns: TAP start-by, SkillBridge opening, the BDD claim window (with a live NOT YET OPEN / OPEN NOW / CLOSED state), and the Separation Health Assessment window.</li>
            <li><strong>Intent to file</strong> — the 1-year clock VA gives you to complete the claim while keeping your effective date.</li>
            <li><strong>ID card expiration</strong> — a renewal countdown so the card never lapses at the gate.</li>
          </ul>
          <p className="mt-2 text-sm text-[var(--dim)]">The FVAP voting card below runs all year — it needs no date from you.</p>
        </div>
      ) : null}

      <div className="space-y-3">
        {cards.map((c) => (
          <article key={c.key} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-[var(--text)]">{c.title}</h3>
              <Badge tone={c.stateTone}>{c.state}</Badge>
            </div>
            <p className="mt-1 text-sm font-semibold text-[var(--text)]">{c.rule}</p>
            <p className="mt-1 text-base text-[var(--text)]">{c.detail}</p>
            <button
              type="button"
              aria-label={`${c.cta} — ${c.title}`}
              onClick={() => goTo(c.view as View, c.anchor)}
              className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)]"
            >
              {c.cta} →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Home --------------------------------- */

function HomeView({
  profile,
  go,
  goTo,
  onSearchHit,
  openMos,
  openState,
  openThisDayLink,
  onSwitchProfile,
}: {
  profile: Profile;
  go: (v: View) => void;
  goTo: (v: View, anchor?: string) => void;
  onSearchHit: (hit: SearchHit) => void;
  openMos: (id: string) => void;
  openState: (name: string) => void;
  openThisDayLink: (link: ThisDayAppLink) => void;
  onSwitchProfile: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const pendingQ = useQuery({
    queryKey: ["contributions", "pending"],
    queryFn: () => api.listContributions({ status: "pending", targetId: "" }),
  });
  const checkinsQ = useQuery({ queryKey: ["checkins"], queryFn: () => api.getCheckins({}) });
  const today = checkinsQ.data?.checkins.find((c) => c.dayKey === todayKey());
  const pendingCount = pendingQ.data?.contributions.length ?? 0;
  const myMos = ALL_MOS_ENTRIES.find(
    (e) => e.branch === profile.branch && e.code.toUpperCase() === profile.mosCode.toUpperCase(),
  );
  const homeName = profileHomeState(profile);
  const pathProgressQ = useQuery({ queryKey: ["pathProgress"], queryFn: () => api.getPathProgress({}) });
  const homeProgressMap = new Map((pathProgressQ.data?.progress ?? []).map((p) => [p.pathId, p.completed]));
  let activePath: { path: PathDef; done: number; total: number; pct: number } | null = null;
  for (const p of PATHS) {
    const done = p.steps.filter((s) => (homeProgressMap.get(p.id) ?? []).includes(s.key)).length;
    const pct = Math.round((done / p.steps.length) * 100);
    if (done > 0 && pct < 100 && (!activePath || pct > activePath.pct)) {
      activePath = { path: p, done, total: p.steps.length, pct };
    }
  }
  const hasDates = Boolean(profile.easDate || profile.itfDate || profile.idCardExpiry);
  const homeDeadlineCards = computeDeadlineCards({
    easDate: profile.easDate,
    itfDate: profile.itfDate,
    idCardExpiry: profile.idCardExpiry,
  }).filter((c) => c.key !== "fvap");
  const bddCard = homeDeadlineCards.find((c) => c.key === "bdd");
  const easSoon = easWithinYear(profile.easDate);
  const easDays = daysUntilEas(profile.easDate);

  const cards: { view: View; title: string; blurb: string }[] = [
    { view: "mos", title: "MOS Library", blurb: `${ALL_MOS_ENTRIES.length} jobs across all six branches — search yours, or anyone's.` },
    { view: "ranks", title: "Rank Charts", blurb: "Enlisted, warrant, and officer grades for all six branches — titles, abbreviations, and the split-track variants." },
    { view: "benefits", title: "Benefits", blurb: "VA & DoD benefits for everyone — home loan, GI Bill, disability, health — plus what your branch adds: TA, COOL, relief, and family programs." },
    { view: "deals", title: "Deals & Discounts", blurb: "Deal apps like GovX and Vet Tix, a finder that routes you to the right source for your city and category, and on-base life: MCCS, MWR, SMP, ITT, Space-A, and the commissary." },
    { view: "transition", title: "Transition & Jobs", blurb: "Getting out, or drilling in the Reserve with a civilian job: translate your MOS, TAP and SkillBridge before EAS, veteran job boards, apprenticeships, federal jobs, USERRA rights, and starting a business." },
    { view: "pay", title: "Pay & Money", blurb: "Read your own pay: the official DFAS tables (with 2026 example cells), BAH/BAS and the overseas allowances, DoD's RMC estimator, a block-by-block LES decoder, pay dates, and free money help — MilTax, counselors, and the MLA's 36% cap." },
    { view: "pcs", title: "PCS Move Center", blurb: "The whole move, orders to arrival: the phase-by-phase timeline, the entitlements people forget (DLA, 21-day TLE, pet reimbursement), household goods and damage claims, housing decisions, special cases, and the travel claim." },
    { view: "family", title: "Family & Life Events", blurb: "Marriage, baby, divorce, and casualty checklists at the DEERS level; SpouseWorks and MSEP for spouse careers and the scholarship; MilitaryChildCare.com and MCCYN fee assistance; EFMP by branch (Coast Guard: the Special Needs Program); and the support centers and counselors — with the confidentiality differences stated plainly." },
    { view: "claims", title: "VA Claims & VSO Guide", blurb: "How a claim actually moves: file on VA.gov, lock your start date with an intent to file, BDD before you get out (180–90 days), the evidence VA decides on, ratings at concept level, the three review lanes after a decision, and free accredited VSO help — plus VA's own warning about claim predators." },
    { view: "readiness", title: "Readiness & Life Skills", blurb: "Before you deploy and at your first station: the Military OneSource pre-deployment checklist, family care plans, and the paperwork sweep; special duties from recruiting to embassy duty; your branch's uniform publication; barracks basics and the housing-office-before-you-sign rule; the MLA's 36% shield, first-car traps, per-installation off-limits lists; and FVAP absentee voting — a new FPCA every January and every time you move." },
    { view: "retirement", title: "Retirement Hub", blurb: "Which system you're in is decided by your DIEMS — BRS vs. legacy High-3 explained plainly, with the official DoD calculators to run your own numbers. Then the decisions that follow you: SBP and spouse concurrence (and full SBP + DIC together since Feb 1, 2023), CRDP vs. CRSC, Reserve points, the 20-year letter, and the gray area; the application timeline; and life after the check starts — myPay, taxes, and re-enrolling in TRICARE within 90 days. No pay predictions anywhere." },
    { view: "records", title: "Records & DD214 Center", blurb: "Your paper life, in one place: VA's records page as the front door, eVetRecs and the SF-180, milConnect/DPRIS with VA's per-branch cutoff dates, next-of-kin requests, the 62-year rule, and the 1973 fire. Replacing a lost DD214 (free — NARA's warning about fee-charging companies is on the card), DD Form 215 routing as it works now, and replacement medals. Corrections and discharge upgrades as an orientation map: DD 293 within 15 years, DD 149 for error or injustice — and the key distinction: boards change the record, VA separately decides benefits. No processing-time promises anywhere, because the official sources publish none." },
    { view: "states", title: "State Benefits Finder", blurb: "Some of the richest benefits are state-level and wildly different state to state. Pick your state — all 50 plus DC — for its official veterans affairs agency, its official site, and its headline benefits: property-tax exemptions with the thresholds exactly as the state states them, tuition waivers, state veterans homes, and signature benefits. Where a figure couldn't be verified on the state's own pages, the card says “see official site” instead of borrowing a number. Not sure which agency runs veterans affairs in your state? The finder opens with NASDVA, the national directory VA.gov points to." },
    { view: "care", title: "Care & Crisis", blurb: "Help for hard moments, plain and warm. The Veterans Crisis Line is pinned at the top — call 988 and press 1, text 838255, or chat — before anything else. Then: Vet Centers (free readjustment counseling, no VA enrollment or disability rating needed, records kept separate from VA and DoD), VA health care enrollment walked through step by step, the Military Crisis Line numbers for overseas, Military OneSource with its boundary stated plainly, housing help led by the National Call Center for Homeless Veterans (877-4AID-VET), and funeral & burial honors — national cemeteries, pre-need eligibility, and Arlington's different, stricter rules." },
    { view: "find", title: "Find Anything", blurb: "Just got to a new town and need the office? 27 official locators in 8 categories, searchable by name or purpose: MilitaryINSTALLATIONS, the VA facility locator and the pre-filtered Vet Center route, RAPIDS ID offices and milConnect (now on myAuth, not DS Logon), legal assistance and financial counselors, the commissary split (shop.commissaries.com to shop, corp.commissaries.com for store info), PCS help through Military OneSource — Move.mil is gone — Space-A terminals, American Job Centers, and TRICARE's Find a Doctor (West Region: TriWest). Where no national locator exists — MWR/ITT, education centers — the entry says so and routes you through MilitaryINSTALLATIONS instead of faking a link." },
    { view: "changejob", title: "Change Your Job", blurb: "Same branch, new job. Every branch runs it the same basic way — the service's needs decide, there's a window, a career counselor or planner is the gatekeeper, and headquarters approves — under a different name: Marine Corps Lateral Move (LatMove, through your Career Planner into a RELM in TFRS), Army Reclassification (keyed to the current In/Out Calls MILPER), Navy Conversion (C-WAY still runs SELRES conversions and reenlistment quotas while active-duty billet conversions are adjudicated in MyNavy Assignment), Air Force Retraining (FTA and NCORP, applied for in myFSS), Space Force through the same Air Force system, and Coast Guard Change in Rating through PSC-EPM. No quotas or open-field lists are printed anywhere — they change too fast to be honest — so every card routes to the branch's live official source for what's open today." },
    { view: "switchbranches", title: "Switch Branches", blurb: "A different branch, not just a different job. Two paths: transfer while serving under DoDI 1300.04 with a DD Form 368 — started by the gaining service, signed by your service's personnel-center authority, not your unit commander, both services required to agree, no appeal, and the release expires — or separate first and rejoin as a prior-service applicant under the gaining branch's business rules. The reality checks lead: grade determination can cost you rank, your job may not exist or be open over there, prior-service seats are the smallest pile, DD214 codes gate everything, and clearance transfer is likely, not promised. Then each gaining branch's official door — Army USAREC rules and grade determination, Navy NAVET/OSVET and PRISE-R (other-service veterans enter with no rating), Marine Corps PSEP framed honestly as the route for former Marines, Space Force IST in announced windows, Air Force prior service and AFPC officer IST, and the Coast Guard's dedicated prior-service page — and a checklist that starts with the recruiter conversation. No quotas, caps, or open-job lists anywhere." },
    { view: "education", title: "Education Planner", blurb: "Turn your training into college credit: pull your JST or CCAF transcript, test out of classes with free DANTES-funded CLEP/DSST first attempts, stack TA and the GI Bill in the right order, and use your branch's degree programs." },
    { view: "warstories", title: "War Stories", blurb: "The stories behind the service: 13 documented accounts from official sources (Veterans History Project stories labeled as first-person recollections), 15 Medal of Honor profiles summarized from the official citations with the authoritative databases linked, and 9 most-decorated profiles presented unranked — because there is no official ranking. Plus member stories: yours can be submitted, and every one is reviewed before it publishes." },
    { view: "traditions", title: "Traditions & Lore", blurb: "Why the flag folds 13 times (a ceremonial script — labeled TRADITION, not doctrine), the corrected Tomb guard timeline, three volleys that are NOT a 21-gun salute, the blood stripe the Corps itself calls “more fable than fact,” challenge-coin origins labeled LEGEND, and Hooah/Hooyah etymologies labeled DISPUTED. 30 cards in three groups — Flag & Honors, Branch Traditions, Culture & Custom — each with its honesty label showing and its official source linked." },
    { view: "mailcall", title: "Mail Call", blurb: "Mailing to someone deployed, from official sources only: APO/FPO/DPO addressing exactly as USPS prints it — domestic prices, a specific named person, and never the foreign city or country — plus the free USPS Military Care Kit, the 2026 holiday send-by dates (Nov 4 Ground Advantage, Dec 9 First-Class/Priority, Dec 16 express — 2026 dates, republished every fall), the prohibited list and the lithium rule, what to send and what not to send, and the verified USO and Red Cross routes for reaching troops you don't know." },
    { view: "combat", title: "Close Combat", blurb: "The MCMAP catalog belt by belt — every named technique, its category, and what it's for — plus Army Combatives levels and the other branches' programs. Curriculum structure only: train on the mat, under a certified instructor." },
    { view: "fieldcraft", title: "Fieldcraft", blurb: "Ruck packing list with live pack weight, a ruck planner, and short field guides." },
    { view: "news", title: "News", blurb: "Verified sources only — official and independent, badged, with your branch's official messages pinned." },
    { view: "fitness", title: "Fitness Coach", blurb: "Train for your branch's test — or pick Other and build your dream body." },
    { view: "checkin", title: "Check-In", blurb: "Daily status for you and your squad. 988 pinned. No strangers, no feed, no location." },
  ];

  // Personalized order: sections the member's profile promotes come
  // first, in relevance order; everything else keeps its default
  // relative order. An empty priority (no profile signals) leaves the
  // default order exactly as it was.
  const priority = relevancePriority(profile);
  const orderedCards = cards
    .map((c, i) => ({ c, i, rank: priority.indexOf(c.view) }))
    .sort((a, b) => (a.rank < 0 ? 99 : a.rank) - (b.rank < 0 ? 99 : b.rank) || a.i - b.i)
    .map((x) => x.c);

  return (
    <div>
      <header className="mb-4 flex items-center gap-3">
        <img src={battleBookIcon} alt="" className="h-11 w-11 shrink-0 rounded-[var(--radius)]" />
        <div>
          <p className="font-display text-2xl font-bold leading-tight text-[var(--text)]">Battle Book</p>
          <p className="text-sm font-semibold text-[var(--dim)]">Military Life</p>
        </div>
      </header>
      <div className="mb-4">
        <GlobalSearch id="global-search-home" onNavigate={onSearchHit} />
      </div>
      <section aria-label="Your profile" className="rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold tracking-widest text-[var(--dim)]">
              {profile.branch.toUpperCase()} · {profile.component.toUpperCase()}
            </p>
            <h1 className="font-display mt-1 text-3xl font-bold text-[var(--text)]">
              {profile.rank ? `${profile.rank} ` : ""}{profile.displayName || "Service Member"}
              {profile.mosCode ? ` — ${profile.mosCode}` : ""}
            </h1>
            <p className="mt-1 text-base text-[var(--dim)]">
              {myMos ? myMos.title : profile.mosCode ? "Your job code" : "No job code set"} · {profile.status}
              {profile.goals ? ` · Goal: ${profile.goals}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" aria-label="Edit profile" onClick={() => setEditing((v) => !v)} className={btnGhost}>
              {editing ? "Close" : "Edit profile"}
            </button>
            <button type="button" aria-label="Switch profile" onClick={onSwitchProfile} className={btnGhost}>
              Switch profile
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-[var(--dim)]">
          Sign-in is simulated in this prototype: switching profile signs you in as a different member, with that
          member's own squad seats. That's how a squad invite gets claimed — each person signs in as themselves and
          claims their own seat.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="amber">Identity: Simulated Demo</Badge>
          <Badge tone="amber">MOS: Self-Reported</Badge>
          {today ? <Badge tone="official">Checked in today: {STATUS_LABEL[today.status]}</Badge> : <Badge>Not checked in today</Badge>}
          {pendingCount > 0 ? <Badge tone="amber">{pendingCount} contribution{pendingCount === 1 ? "" : "s"} awaiting review</Badge> : null}
        </div>
        {editing ? (
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <ProfileForm initial={profile} submitLabel="Save profile changes" onDone={() => setEditing(false)} />
          </div>
        ) : null}
      </section>

      {myMos ? (
        <button
          type="button"
          aria-label={`Open your job in the Library: ${myMos.code} ${myMos.title}`}
          onClick={() => openMos(myMos.id)}
          className="mt-4 block w-full rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-left"
        >
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone="official">YOUR JOB</Badge>
            <span className="text-sm font-semibold text-[var(--dim)]">
              {myMos.branch} · {myMos.field}
            </span>
          </span>
          <span className="font-display mt-2 block text-2xl font-bold text-[var(--text)]">
            {myMos.code} — {myMos.title}
          </span>
          <span className="mt-1 block text-sm text-[var(--dim)]">
            {myMos.summary.length > 220 ? `${myMos.summary.slice(0, 220)}…` : myMos.summary}
          </span>
          <span className="mt-2 block text-sm font-bold text-[var(--accent)]">Open in the Library →</span>
        </button>
      ) : null}

      {homeName ? (
        <button
          type="button"
          aria-label={`Open your state card: ${homeName} veterans benefits`}
          onClick={() => openState(homeName)}
          className="mt-4 block w-full rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-5 text-left"
        >
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone="amber">YOUR STATE</Badge>
            <span className="text-sm font-semibold text-[var(--dim)]">State Benefits Finder</span>
          </span>
          <span className="font-display mt-2 block text-2xl font-bold text-[var(--text)]">{homeName}</span>
          <span className="mt-1 block text-sm text-[var(--dim)]">
            Your home state's veterans agency and its headline benefits — property-tax exemptions, tuition
            waivers, state veterans homes.
          </span>
          <span className="mt-2 block text-sm font-bold text-[var(--accent)]">Open your state card →</span>
        </button>
      ) : null}

      {easSoon ? (
        <section aria-label="Getting out soon" className="mt-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-5">
          <p className="font-display text-xl font-bold text-[var(--text)]">
            Getting Out — separation{" "}
            {new Date(`${profile.easDate}T00:00:00`).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            {easDays !== null && easDays > 0 ? ` (${easDays} day${easDays === 1 ? "" : "s"} out)` : ""}
          </p>
          {bddCard ? (
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[var(--text)]">
              <Badge tone={bddCard.stateTone}>BDD WINDOW: {bddCard.state}</Badge>
              <span>{bddCard.detail}</span>
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              aria-label="Open the Getting Out guided path"
              onClick={() => go("paths")}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--text)]"
            >
              Getting Out path
            </button>
            <button
              type="button"
              aria-label="Open Transition and Jobs"
              onClick={() => go("transition")}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--text)]"
            >
              Transition &amp; Jobs
            </button>
            <button
              type="button"
              aria-label="Open BDD in Claims"
              onClick={() => goTo("claims", "Before You Get Out: BDD & the Under-90-Day Path")}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--text)]"
            >
              Claims &amp; BDD
            </button>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        aria-label="Open Guided Paths"
        onClick={() => go("paths")}
        className="mt-4 block w-full rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-left"
      >
        <span className="font-display block text-xl font-bold text-[var(--text)]">Guided Paths</span>
        {activePath ? (
          <>
            <span className="mt-1 block text-base font-semibold text-[var(--text)]">
              {activePath.path.name} — {activePath.pct}% complete
            </span>
            <span className="mt-2 block h-2 overflow-hidden rounded bg-[var(--surface2)]" aria-hidden="true">
              <span className="block h-full bg-[var(--accent)]" style={{ width: `${activePath.pct}%` }} />
            </span>
            <span className="mt-2 block text-sm text-[var(--dim)]">
              {activePath.done} of {activePath.total} steps done — pick up where you left off.
            </span>
          </>
        ) : (
          <span className="mt-1 block text-sm text-[var(--dim)]">
            Seven journeys — Getting Out, PCS Orders in Hand, Deploying, New Baby on the Way, Retiring, Filing a VA
            Claim, Going to School — each a short checklist that walks you through the right sections in the right
            order, with your progress saved.
          </span>
        )}
      </button>

      <button
        type="button"
        aria-label="Open Deadlines and Countdowns"
        onClick={() => go("deadlines")}
        className="mt-3 block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
      >
        <span className="font-display block text-xl font-bold text-[var(--text)]">Deadlines &amp; Countdowns</span>
        {hasDates ? (
          <span className="mt-2 block space-y-1">
            {homeDeadlineCards.slice(0, 3).map((c) => (
              <span key={c.key} className="block text-sm text-[var(--text)]">
                <strong>{c.title}:</strong> {c.state}
              </span>
            ))}
            <span className="block text-sm text-[var(--dim)]">Tap for the full countdown board.</span>
          </span>
        ) : (
          <span className="mt-1 block text-sm text-[var(--dim)]">
            Set your separation, intent-to-file, and ID card dates and the app counts down the windows that matter —
            the BDD claim window, TAP, SkillBridge, and more.
          </span>
        )}
      </button>

      <HomeBinderButton go={go} />

      <HomeTimelineCard go={go} />

      <HomeWallCard go={go} />

      <HomeMentorCard go={go} />

      <HomeThisDayCard go={go} openAppLink={openThisDayLink} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {orderedCards.map((c) => (
          <button
            key={c.view}
            type="button"
            aria-label={`Open ${c.title}`}
            onClick={() => go(c.view)}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
          >
            <span className="font-display block text-xl font-bold text-[var(--text)]">{c.title}</span>
            <span className="mt-1 block text-sm text-[var(--dim)]">{c.blurb}</span>
          </button>
        ))}
        <button
          type="button"
          aria-label="Open Review Queue"
          onClick={() => go("review")}
          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
        >
          <span className="font-display block text-xl font-bold text-[var(--text)]">Review Queue</span>
          <span className="mt-1 block text-sm text-[var(--dim)]">
            Member contributions wait here as PENDING. Nothing goes public until it's approved.
          </span>
        </button>
      </div>

      <a
        href="tel:988"
        aria-label="Call 988 Suicide and Crisis Lifeline, Veterans press 1"
        className="mt-4 block rounded-[var(--radius)] bg-[var(--red)] p-4 text-center font-display text-lg font-bold text-white"
      >
        988 Suicide &amp; Crisis Lifeline — Veterans, press 1
      </a>
    </div>
  );
}

/** Home entry point to My Binder, with the live saved-card count. */
function HomeBinderButton({ go }: { go: (v: View) => void }) {
  const binder = useBinder();
  const count = binder.items.length;
  return (
    <button
      type="button"
      aria-label="Open My Binder"
      onClick={() => go("binder")}
      className="mt-3 block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
    >
      <span className="font-display block text-xl font-bold text-[var(--text)]">My Binder</span>
      <span className="mt-1 block text-sm text-[var(--dim)]">
        {count > 0
          ? `${count} saved card${count === 1 ? "" : "s"} — the references you've starred across the app, grouped by section, all in one place.`
          : "Star any reference card — the BDD card, your state's benefits, a pay table — and it collects here, grouped by section, all in one place."}
      </span>
    </button>
  );
}

/**
 * Home entry point to My Service Timeline. Shows the live entry count
 * and span from the member's own entries only — nothing is inferred.
 */
function HomeTimelineCard({ go }: { go: (v: View) => void }) {
  const timelineQ = useQuery({
    queryKey: ["timelineEntries"],
    queryFn: () => api.listTimelineEntries({}),
  });
  const entries = timelineQ.data?.entries ?? [];
  const summary = timelineSummary(entries);
  return (
    <button
      type="button"
      aria-label="Open My Service Timeline"
      onClick={() => go("timeline")}
      className="mt-3 block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
    >
      <span className="font-display block text-xl font-bold text-[var(--text)]">My Service Timeline</span>
      <span className="mt-1 block text-sm text-[var(--dim)]">
        {summary.count > 0
          ? `${summary.count} entr${summary.count === 1 ? "y" : "ies"}${summary.spanLabel ? ` · ${summary.spanLabel}` : ""} — your private career keepsake, oldest first and printable.`
          : "Your private career keepsake — the day you joined, boot camp, units, deployments, promotions. Private to your profile, never public, and printable for your records."}
      </span>
    </button>
  );
}

/**
 * Home entry point to the Wall of Honor. Quiet by design; when a
 * published tribute's birthday or date of loss falls on today, the card
 * names them under "Today we remember" — computed from the stored
 * tribute dates only.
 */
function HomeWallCard({ go }: { go: (v: View) => void }) {
  const honorQ = useQuery({
    queryKey: ["tributes", "published"],
    queryFn: () => api.listTributes({ scope: "published" }),
  });
  const now = new Date();
  const today = (honorQ.data?.tributes ?? []).filter(
    (t) => fallsOnToday(t.lossDate, now) || fallsOnToday(t.birthDate, now),
  );
  return (
    <button
      type="button"
      aria-label="Open the Wall of Honor"
      onClick={() => go("wallofhonor")}
      className="mt-3 block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
    >
      <span className="font-display block text-xl font-bold text-[var(--text)]">Wall of Honor</span>
      {today.length > 0 ? (
        <span className="mt-1 block text-sm text-[var(--text)]">
          <span className="font-bold">Today we remember:</span>{" "}
          {today
            .map((t) => `${t.rank ? `${t.rank} ` : ""}${t.name}`)
            .join(" · ")}
        </span>
      ) : (
        <span className="mt-1 block text-sm text-[var(--dim)]">
          A quiet wall of member tributes to the fallen — the people members knew, served with, and carry with them.
          Add a name, or light a candle for one already here.
        </span>
      )}
    </button>
  );
}

/**
 * Home entry point to Find a Mentor. When mentorship requests are
 * waiting on the member's own listing, the card leads with that count;
 * otherwise it carries the plain invitation.
 */
function HomeMentorCard({ go }: { go: (v: View) => void }) {
  const requestsQ = useQuery({
    queryKey: ["mentorRequests"],
    queryFn: () => api.listMentorRequests({}),
  });
  const waiting = (requestsQ.data?.requests ?? []).filter((r) => r.status === "pending").length;
  const connected = (requestsQ.data?.requests ?? []).filter((r) => r.status === "accepted").length;
  return (
    <button
      type="button"
      aria-label="Open Find a Mentor"
      onClick={() => go("mentors")}
      className="mt-3 block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-left"
    >
      <span className="font-display block text-xl font-bold text-[var(--text)]">Find a Mentor</span>
      {waiting > 0 ? (
        <span className="mt-1 block text-sm text-[var(--text)]">
          <span className="font-bold">
            {waiting} mentorship request{waiting === 1 ? "" : "s"} waiting
          </span>{" "}
          — someone is asking for a mentor. Open the section to read and answer them.
        </span>
      ) : connected > 0 ? (
        <span className="mt-1 block text-sm text-[var(--dim)]">
          You have {connected} active mentorship{connected === 1 ? "" : "s"} — connected through Check-In, all
          contact inside the app.
        </span>
      ) : (
        <span className="mt-1 block text-sm text-[var(--dim)]">
          Members who&apos;ve been where you are — by branch, job, and topic. Find one, or be one: listings are
          reviewed before they publish.
        </span>
      )}
    </button>
  );
}

/* --------------------- This Day in Military History --------------------- */

/** Stable DOM id for one calendar entry card in the full view. */
function thisDayCardId(entry: ThisDayEntry): string {
  return `thisday-${entry.monthDay ?? "memorial-day"}-${anchorSlug(entry.title)}`;
}

/**
 * One calendar entry, rendered the way the pack specifies: date line,
 * title, summary, branch + category tags, the source line linking out,
 * the pack's "See also in Battle Book" deep link where one exists, and
 * the trust stamp (source + Verified Nov 2026) with a Binder star.
 * `onThisDay` marks the card as today's own entry — it is only ever
 * set for entries whose date actually matches today.
 */
function ThisDayEntryCard({
  entry,
  onThisDay,
  openAppLink,
}: {
  entry: ThisDayEntry;
  onThisDay?: boolean;
  openAppLink: (link: ThisDayAppLink) => void;
}) {
  const dateLine = entry.floating
    ? "Memorial Day — last Monday in May"
    : entry.monthDay
      ? `${onThisDay ? "On this day — " : ""}${formatMonthDay(entry.monthDay)}`
      : "";
  return (
    <article
      id={thisDayCardId(entry)}
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        onThisDay ? "border-2 border-[var(--accent)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-bold text-[var(--accent)]">{dateLine}</span>
        <span className="text-sm text-[var(--dim)]">{entry.yearLabel ?? entry.year}</span>
        {onThisDay ? <Badge tone="official">TODAY</Badge> : null}
      </div>
      <h4 className="font-display mt-1 text-lg font-bold text-[var(--text)]">{entry.title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        <Badge>{entry.branch}</Badge>
        <Badge>{entry.category}</Badge>
      </div>
      <p className="mt-2 text-base text-[var(--text)]">{entry.summary}</p>
      <p className="mt-3 text-sm">
        <a
          href={entry.sourceUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Source for ${entry.title}: ${entry.source}`}
          className="font-semibold text-[var(--accent)] underline"
        >
          Source: {entry.source}
        </a>
        {entry.sourceUrl2 ? (
          <>
            {" · "}
            <a
              href={entry.sourceUrl2.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Second source for ${entry.title}: ${entry.sourceUrl2.label}`}
              className="font-semibold text-[var(--accent)] underline"
            >
              {entry.sourceUrl2.label}
            </a>
          </>
        ) : null}
      </p>
      {entry.sourceNote ? <p className="mt-1 text-sm text-[var(--dim)]">{entry.sourceNote}</p> : null}
      {entry.appLink ? (
        <button
          type="button"
          aria-label={`See also in Battle Book: ${entry.appLink.label} (from ${entry.title})`}
          onClick={() => openAppLink(entry.appLink!)}
          className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--accent)]"
        >
          See also in Battle Book: {entry.appLink.label} →
        </button>
      ) : null}
      <CardTools
        cardRef={{
          section: "thisday",
          itemKey: `${entry.monthDay ?? "floating-memorial-day"}:${entry.year}:${entry.title}`,
          title: entry.title,
          summary: entry.summary,
          source: entry.source,
        }}
      />
    </article>
  );
}

/** The pack's Section 2: verified per-branch history entry points for
 * days with no calendar entry. No daily URL is ever constructed. */
function BranchRoutesList() {
  return (
    <div>
      <p className="text-sm text-[var(--dim)]">{BRANCH_ROUTES_NOTE}</p>
      <div className="mt-3 space-y-3">
        {BRANCH_ROUTES.map((r: BranchRoute) => (
          <article key={r.name} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <h4 className="font-display text-base font-bold text-[var(--text)]">{r.name}</h4>
            <p className="mt-1 text-sm text-[var(--dim)]">{r.note}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {r.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${l.label} (official history entry point)`}
                  className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <CardTools
              cardRef={{
                section: "thisday",
                itemKey: `route:${r.name}`,
                title: r.name,
                summary: r.note,
                source: sourceFromLinks(r.links),
              }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

/**
 * Home card: today's own entries when the calendar has them. When it
 * doesn't, the card says so plainly, shows the nearest dated entry
 * labeled as the closest in the calendar (never as today's), and
 * offers the pack's verified branch-history entry points. Memorial
 * Day's floating entry appears on the last Monday in May.
 */
function HomeThisDayCard({
  go,
  openAppLink,
}: {
  go: (v: View) => void;
  openAppLink: (link: ThisDayAppLink) => void;
}) {
  const now = new Date();
  const todays = entriesForDate(now);
  const nearest = todays.length === 0 ? nearestEntry(now) : null;
  const todayLabel = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return (
    <section
      aria-label="This Day in Military History"
      className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">This Day in Military History</h3>
        <span className="text-sm font-semibold text-[var(--dim)]">{todayLabel}</span>
      </div>
      {todays.length > 0 ? (
        <div className="mt-3 space-y-3">
          {todays.map((e) => (
            <ThisDayEntryCard key={`${e.monthDay ?? "floating"}-${e.title}`} entry={e} onThisDay openAppLink={openAppLink} />
          ))}
        </div>
      ) : (
        <div className="mt-2">
          <p className="text-base text-[var(--text)]">
            No entry for today — the sourced calendar has no entry for{" "}
            {MONTH_NAMES[now.getMonth()]} {now.getDate()}.
          </p>
          {nearest ? (
            <div className="mt-3">
              <p className="text-sm font-semibold text-[var(--dim)]">
                Closest in the calendar: {formatMonthDay(nearest.monthDay)} ({relativeDays(nearest.deltaDays)})
              </p>
              <div className="mt-2">
                <ThisDayEntryCard entry={nearest.entry} openAppLink={openAppLink} />
              </div>
            </div>
          ) : null}
          <div className="mt-4">
            <p className="font-display text-base font-bold text-[var(--text)]">Browse the branch history commands</p>
            <div className="mt-2">
              <BranchRoutesList />
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        aria-label="Open the full This Day in Military History calendar"
        onClick={() => go("thisday")}
        className="mt-4 w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-bold text-[var(--accent)]"
      >
        Browse the full calendar — all {THIS_DAY_ENTRIES.length} entries →
      </button>
    </section>
  );
}

/**
 * Full view: all 90 entries grouped by month, today highlighted, with
 * a month/day jump. Days with no entry say so and point at the nearest
 * entry and the branch routes — an entry is never presented as
 * belonging to a date it doesn't.
 */
function ThisDayView({ openAppLink }: { openAppLink: (link: ThisDayAppLink) => void }) {
  const now = new Date();
  const todayKeyMd = `${`${now.getMonth() + 1}`.padStart(2, "0")}-${`${now.getDate()}`.padStart(2, "0")}`;
  const memorialToday = isMemorialDay(now);
  const groups = useMemo(() => entriesByMonth(), []);
  const [jumpMonth, setJumpMonth] = useState(now.getMonth() + 1);
  const [jumpDay, setJumpDay] = useState(now.getDate());
  const [jumpNote, setJumpNote] = useState<string | null>(null);

  const scrollToCard = (entry: ThisDayEntry) => {
    const el = document.getElementById(thisDayCardId(entry));
    if (el) el.scrollIntoView({ block: "start" });
  };

  const jump = () => {
    const key = `${`${jumpMonth}`.padStart(2, "0")}-${`${jumpDay}`.padStart(2, "0")}`;
    const label = `${MONTH_NAMES[jumpMonth - 1]} ${jumpDay}`;
    const matches = THIS_DAY_ENTRIES.filter((e) => e.monthDay === key);
    if (matches.length > 0 && matches[0]) {
      setJumpNote(`${label}: ${matches.length} ${matches.length === 1 ? "entry" : "entries"} — scrolled to ${matches[0].title}.`);
      scrollToCard(matches[0]);
      return;
    }
    const probe = new Date(now.getFullYear(), jumpMonth - 1, jumpDay);
    if (probe.getMonth() !== jumpMonth - 1 || probe.getDate() !== jumpDay) {
      setJumpNote(`${label} isn't a real calendar date.`);
      return;
    }
    const near = nearestEntry(probe);
    setJumpNote(
      near
        ? `No entry for ${label} — closest in the calendar: ${formatMonthDay(near.monthDay)} (${relativeDays(near.deltaDays)}) — ${near.entry.title}.`
        : `No entry for ${label}.`,
    );
    if (near) scrollToCard(near.entry);
  };

  const isTodayEntry = (e: ThisDayEntry) =>
    e.monthDay === todayKeyMd || (memorialToday && e.floating === "memorial-day");

  return (
    <div>
      <SectionHead
        title="This Day in Military History"
        sub="A 90-entry calendar sourced only from official and authoritative history sources — battles, firsts, Medal of Honor actions, milestones, and the births of units and branches. Today is highlighted; every other date keeps its own."
      />

      <div className="mb-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="font-display text-base font-bold text-[var(--text)]">Jump to a date</p>
        <div className="mt-2 flex flex-wrap items-end gap-2">
          <div>
            <label htmlFor="td-jump-month" className={labelCls}>Month</label>
            <select
              id="td-jump-month"
              aria-label="Jump month"
              value={jumpMonth}
              onChange={(e) => setJumpMonth(Number(e.target.value))}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]"
            >
              {MONTH_NAMES.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="td-jump-day" className={labelCls}>Day</label>
            <select
              id="td-jump-day"
              aria-label="Jump day"
              value={jumpDay}
              onChange={(e) => setJumpDay(Number(e.target.value))}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-base text-[var(--text)]"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <button type="button" aria-label="Go to the picked date" onClick={jump} className={btnPrimary}>
            Go
          </button>
          <button
            type="button"
            aria-label="Jump to today in the calendar"
            onClick={() => {
              const t = entriesForDate(now);
              if (t.length > 0 && t[0]) {
                setJumpNote(`Today — ${MONTH_NAMES[now.getMonth()]} ${now.getDate()}: ${t.length} ${t.length === 1 ? "entry" : "entries"}.`);
                scrollToCard(t[0]);
              } else {
                const near = nearestEntry(now);
                setJumpNote(
                  near
                    ? `No entry for today — closest in the calendar: ${formatMonthDay(near.monthDay)} (${relativeDays(near.deltaDays)}) — ${near.entry.title}.`
                    : "No entry for today.",
                );
                if (near) scrollToCard(near.entry);
              }
            }}
            className={btnGhost}
          >
            Today
          </button>
        </div>
        {jumpNote ? <p className="mt-2 text-sm font-semibold text-[var(--text)]" aria-live="polite">{jumpNote}</p> : null}
      </div>

      {groups.map((g) => (
        <section key={g.month} aria-label={MONTH_NAMES[g.month - 1]} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">
            {MONTH_NAMES[g.month - 1]}
            <span className="ml-2 text-sm font-semibold text-[var(--dim)]">
              {g.entries.length} {g.entries.length === 1 ? "entry" : "entries"}
            </span>
          </h3>
          <div className="space-y-3">
            {g.entries.map((e) => (
              <ThisDayEntryCard
                key={`${e.monthDay ?? "floating"}-${e.title}`}
                entry={e}
                onThisDay={isTodayEntry(e)}
                openAppLink={openAppLink}
              />
            ))}
          </div>
        </section>
      ))}

      <section aria-label="Branch history entry points" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">For days with no entry — branch history entry points</h3>
        <BranchRoutesList />
      </section>

      <section aria-label="About this calendar" className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-base font-bold text-[var(--text)]">About this calendar</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">{THIS_DAY_GAPS_NOTE}</p>
        {(() => {
          const memorial = THIS_DAY_ENTRIES.find((e) => e.floating === "memorial-day");
          if (!memorial) return null;
          return (
            <p className="mt-2 text-sm text-[var(--dim)]">
              Memorial Day is a floating observance — the last Monday in May (this year,{" "}
              {occurrenceInYear(memorial, now.getFullYear()).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              ) — and its card appears with the May entries and on the day itself.
            </p>
          );
        })()}
      </section>
    </div>
  );
}

/* --------------------------- Contributions --------------------------- */

export const UNCLASSIFIED_RULE =
  "Public, unclassified information only. Do not submit tactics, capabilities, unit movements, or anything from classified or controlled documents. If you wouldn't say it on a public recruiting page, don't submit it here.";

function ContributionForm({
  targetType,
  targetId,
  targetLabel,
}: {
  targetType: "mos" | "guide";
  targetId: string;
  targetLabel: string;
}) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [kind, setKind] = useState<"OFFICIAL" | "FIELD_NOTE">("FIELD_NOTE");
  const [sourceUrl, setSourceUrl] = useState("");
  const submit = useMutation({
    mutationFn: () => api.submitContribution({ targetType, targetId, title, body, kind, sourceUrl }),
    onSuccess: () => {
      setTitle("");
      setBody("");
      setSourceUrl("");
      void queryClient.invalidateQueries({ queryKey: ["contributions"] });
    },
  });

  if (!open) {
    return (
      <button type="button" aria-label={`Add information to ${targetLabel}`} onClick={() => setOpen(true)} className={`${btnGhost} w-full`}>
        + Add information — it goes to the review queue first
      </button>
    );
  }

  return (
    <form
      className="space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        submit.mutate();
      }}
    >
      <p className="font-display text-base font-bold text-[var(--text)]">Submit an addition or correction — {targetLabel}</p>
      <p className="rounded-[var(--radius)] bg-[var(--red-bg)] p-3 text-sm font-semibold text-[var(--red)]">{UNCLASSIFIED_RULE}</p>
      <div>
        <label htmlFor={`cf-title-${targetId}`} className={labelCls}>Title</label>
        <input id={`cf-title-${targetId}`} aria-label="Contribution title" value={title} onChange={(e) => setTitle(e.target.value)} required minLength={3} className={inputCls} placeholder="What are you adding or correcting?" />
      </div>
      <div>
        <label htmlFor={`cf-body-${targetId}`} className={labelCls}>Details</label>
        <textarea id={`cf-body-${targetId}`} aria-label="Contribution details" value={body} onChange={(e) => setBody(e.target.value)} required minLength={10} rows={4} className={inputCls} placeholder="The information, in your own words…" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`cf-kind-${targetId}`} className={labelCls}>Label</label>
          <select id={`cf-kind-${targetId}`} aria-label="Contribution label" value={kind} onChange={(e) => setKind(e.target.value as "OFFICIAL" | "FIELD_NOTE")} className={inputCls}>
            <option value="FIELD_NOTE">FIELD NOTE — my experience</option>
            <option value="OFFICIAL">OFFICIAL — from a public source</option>
          </select>
        </div>
        <div>
          <label htmlFor={`cf-src-${targetId}`} className={labelCls}>Source link (for OFFICIAL)</label>
          <input id={`cf-src-${targetId}`} aria-label="Source link" value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} className={inputCls} placeholder="https://…" />
        </div>
      </div>
      {submit.isSuccess ? (
        <p className="text-sm font-semibold text-[var(--accent)]">Submitted. It's in the Review Queue as PENDING — not public until a reviewer approves it.</p>
      ) : null}
      {submit.isError ? <p className="text-sm text-[var(--red)]">Could not submit. Check the fields and try again.</p> : null}
      <div className="flex gap-2">
        <button type="submit" aria-label="Submit contribution for review" disabled={submit.isPending} className={btnPrimary}>
          {submit.isPending ? "Submitting…" : "Submit for review"}
        </button>
        <button type="button" aria-label="Cancel contribution" onClick={() => setOpen(false)} className={btnGhost}>Cancel</button>
      </div>
    </form>
  );
}

function FieldNotes({ targetId }: { targetId: string }) {
  const notesQ = useQuery({
    queryKey: ["contributions", "approved", targetId],
    queryFn: () => api.listContributions({ status: "approved", targetId }),
  });
  const notes = notesQ.data?.contributions ?? [];
  if (notesQ.isPending) return <p className="text-sm text-[var(--dim)]">Loading field notes…</p>;
  if (notes.length === 0) {
    return <p className="text-sm text-[var(--dim)]">No approved field notes yet. Be the first to add one — it goes through review before it appears here.</p>;
  }
  return (
    <div className="space-y-2">
      {notes.map((n: Contribution) => (
        <article key={n.id} className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={n.kind === "OFFICIAL" ? "official" : "amber"}>{n.kind === "OFFICIAL" ? "OFFICIAL" : "FIELD NOTE"}</Badge>
            <p className="font-display text-base font-bold text-[var(--text)]">{n.title}</p>
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">{n.body}</p>
          {n.sourceUrl ? (
            <a href={n.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Source for ${n.title}`} className="mt-1 inline-block text-sm font-semibold text-[var(--accent)] underline">
              Source
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/* ------------------------------- MOS Library ------------------------------- */

function slideRangeLabel(t: DeckTopic): string {
  return t.slideStart === t.slideEnd ? `Slide ${t.slideStart}` : `Slides ${t.slideStart}–${t.slideEnd}`;
}

function DeckTopicSearch() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return DECK_TOPICS;
    return DECK_TOPICS.filter((t) => `${t.topic} ${t.keywords}`.toLowerCase().includes(q));
  }, [q]);

  const grouped = useMemo(() => {
    const map = new Map<string, DeckTopic[]>();
    for (const t of filtered) {
      const arr = map.get(t.deckTitle) ?? [];
      arr.push(t);
      map.set(t.deckTitle, arr);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <section aria-label="Search the source decks" className="mt-6">
      <h3 className="font-display text-lg font-bold text-[var(--text)]">Search the source decks</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        {DECK_TOPICS.length} topics across your decks — tap a topic to open it on the exact slide.
      </p>
      <div className="mt-3">
        <label htmlFor="deck-topic-search" className={labelCls}>
          Search topics
        </label>
        <input
          id="deck-topic-search"
          aria-label="Search the source decks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={inputCls}
          placeholder="Try obstacles, revetments, 9-line, breaching…"
        />
      </div>
      <p className="mt-2 text-sm text-[var(--dim)]" role="status">
        {q
          ? `${filtered.length} matching topic${filtered.length === 1 ? "" : "s"}`
          : `Showing all ${DECK_TOPICS.length} topics, grouped by deck`}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-base text-[var(--text)]">
          No topic matches “{query.trim()}”. Try a shorter word — for example “obstacle”, “breach”, or “9-line”.
        </p>
      ) : q ? (
        <ul className="mt-3 space-y-2">
          {filtered.map((t) => (
            <li key={`${t.deck}-${t.slideStart}-${t.topic}`}>
              <a
                href={t.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${t.topic} in ${t.deckTitle}, ${slideRangeLabel(t)}`}
                className="block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3"
              >
                <span className="block font-semibold text-[var(--text)]">{t.topic}</span>
                <span className="mt-0.5 block text-sm text-[var(--dim)]">
                  {t.deckTitle} — {slideRangeLabel(t)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 space-y-5">
          {grouped.map(([deckTitle, topics]) => (
            <div key={deckTitle}>
              <h4 className="font-display text-base font-bold text-[var(--text)]">{deckTitle}</h4>
              <ul className="mt-2 space-y-2">
                {topics.map((t) => (
                  <li key={`${t.deck}-${t.slideStart}-${t.topic}`}>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${t.topic} in ${t.deckTitle}, ${slideRangeLabel(t)}`}
                      className="block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3"
                    >
                      <span className="block font-semibold text-[var(--text)]">{t.topic}</span>
                      <span className="mt-0.5 block text-sm text-[var(--dim)]">
                        {t.deckTitle} — {slideRangeLabel(t)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function MosDetail({ entry, onBack, onOpen }: { entry: MosEntry; onBack: () => void; onOpen: (e: MosEntry) => void }) {
  return (
    <div>
      <button type="button" aria-label="Back to MOS search results" onClick={onBack} className={`${btnGhost} mb-3`}>
        ← Back to results
      </button>
      <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={entry.sourceOfficial ? "official" : "plain"}>{entry.sourceOfficial ? "OFFICIAL SOURCE" : "PUBLIC SOURCE"}</Badge>
          <Badge>{entry.level === "full" ? "FULL ENTRY" : "INDEX ENTRY"}</Badge>
          <Badge>{entry.branch}</Badge>
        </div>
        <h2 className="font-display mt-2 text-3xl font-bold text-[var(--text)]">{entry.code} — {entry.title}</h2>
        <p className="mt-1 text-sm font-semibold text-[var(--dim)]">{entry.field}</p>
        <p className="mt-3 text-base text-[var(--text)]">{entry.summary}</p>

        {entry.duties.length > 0 ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">What the job involves</h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
              {entry.duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        ) : null}

        <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">School / training</h3>
        <p className="mt-1 text-base text-[var(--text)]">{entry.school}</p>
        <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Requirements</h3>
        <p className="mt-1 text-base text-[var(--text)]">{entry.requirements}</p>
        {entry.dayInLife ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Day in the life</h3>
            <p className="mt-1 text-base text-[var(--text)]">{entry.dayInLife}</p>
          </>
        ) : null}
        {entry.careerPath ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Career path</h3>
            <p className="mt-1 text-base text-[var(--text)]">{entry.careerPath}</p>
          </>
        ) : null}
        {entry.extraSections?.map((s) => (
          <div key={s.heading}>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">{s.heading}</h3>
            {s.body ? <p className="mt-1 text-base text-[var(--text)]">{s.body}</p> : null}
            {s.bullets && s.bullets.length > 0 ? (
              <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Civilian transferable skills</h3>
        <p className="mt-1 text-base text-[var(--text)]">{entry.civilian}</p>

        {entry.sourceDecks && entry.sourceDecks.length > 0 ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Your source decks</h3>
            {entry.sourceDecksNote ? <p className="mt-1 text-base text-[var(--text)]">{entry.sourceDecksNote}</p> : null}
            <ul className="mt-2 space-y-2">
              {entry.sourceDecks.map((d, i) => (
                <li key={d.url} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open deck ${i + 1}: ${d.title} in Google Slides`}
                    className="font-semibold text-[var(--accent)] underline"
                  >
                    {i + 1}. {d.title}
                  </a>
                  <p className="mt-0.5 text-sm text-[var(--dim)]">
                    {d.slides} slides — {d.note}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {entry.id === "usmc-1371" ? <DeckTopicSearch /> : null}

        {entry.sourceLinks && entry.sourceLinks.length > 0 ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Sources for this entry</h3>
            <ul className="mt-2 space-y-1">
              {entry.sourceLinks.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open source: ${s.label} for ${entry.code} ${entry.title}`}
                    className="text-base font-semibold text-[var(--accent)] underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {entry.similar.length > 0 ? (
          <>
            <h3 className="font-display mt-5 text-lg font-bold text-[var(--text)]">Your job in another branch is…</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.similar.map((id) => {
                const s = ALL_MOS_ENTRIES.find((e) => e.id === id);
                if (!s) return null;
                return (
                  <button key={id} type="button" aria-label={`Open equivalent job ${s.code} ${s.title}`} onClick={() => onOpen(s)} className={btnGhost}>
                    {s.branch}: {s.code} {s.title}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        <p className="mt-5 border-t border-[var(--border)] pt-3 text-sm text-[var(--dim)]">
          Source:{" "}
          <a href={entry.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open source for ${entry.code} ${entry.title}`} className="font-semibold text-[var(--accent)] underline">
            {entry.sourceName}
          </a>
        </p>
        <CardTools
          cardRef={{
            section: "mos",
            itemKey: entry.id,
            title: `${entry.code} — ${entry.title}`,
            summary: entry.summary,
            source: entry.sourceName,
          }}
        />
      </article>

      <section aria-label="Field notes" className="mt-4">
        <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Field Notes — verified member additions</h3>
        <FieldNotes targetId={entry.id} />
        <div className="mt-3">
          <ContributionForm targetType="mos" targetId={entry.id} targetLabel={`${entry.code} ${entry.title}`} />
        </div>
      </section>
    </div>
  );
}

function MosView({
  profile,
  goReview,
  focusId,
  focusNonce,
  onFocusHandled,
}: {
  profile: Profile;
  goReview: () => void;
  focusId: string | null;
  focusNonce: number;
  onFocusHandled: () => void;
}) {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState<string>(profile.branch || "All");
  const [limit, setLimit] = useState(60);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Deep link from Global Search / the Home "Your Job" card: open the
  // requested entry directly, then clear the hand-off.
  useEffect(() => {
    if (focusId) {
      setSelectedId(focusId);
      onFocusHandled();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId, focusNonce]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_MOS_ENTRIES.filter((e) => (branch === "All" ? true : e.branch === branch)).filter((e) =>
      q ? `${e.code} ${e.title} ${e.field} ${e.branch}`.toLowerCase().includes(q) : true,
    );
  }, [query, branch]);

  const selected = selectedId ? ALL_MOS_ENTRIES.find((e) => e.id === selectedId) : undefined;
  if (selected) {
    return <MosDetail entry={selected} onBack={() => setSelectedId(null)} onOpen={(e) => setSelectedId(e.id)} />;
  }

  return (
    <div>
      <SectionHead
        title="MOS Library"
        sub={`${ALL_MOS_ENTRIES.length} jobs across all six branches, from official public sources. Deep entries are marked FULL; every other code carries its official title, field, a plain-language orientation, and a verify-on-official-source note where the source doesn't state a fact.`}
      />
      <div className="space-y-3">
        <div>
          <label htmlFor="mos-search" className={labelCls}>Search by code, title, or field</label>
          <input
            id="mos-search"
            aria-label="Search MOS library"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(60);
            }}
            className={inputCls}
            placeholder="Try 1371, medic, cyber, boatswain…"
          />
        </div>
        <div>
          <span className={labelCls} id="mos-branch-label">Branch</span>
          <div role="group" aria-labelledby="mos-branch-label" className="flex flex-wrap gap-2">
            {["All", ...BRANCHES].map((b) => (
              <button
                key={b}
                type="button"
                aria-label={`Filter by branch: ${b === "All" ? "All branches" : b}`}
                aria-pressed={branch === b}
                onClick={() => {
                  setBranch(b);
                  setLimit(60);
                }}
                className={`min-h-[44px] rounded-full border px-4 text-sm font-semibold ${
                  branch === b
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
                }`}
              >
                {b === "All" ? "All branches" : b}
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-[var(--dim)]" role="status">
        {results.length} matching job{results.length === 1 ? "" : "s"}
        {profile.mosCode ? ` · Your code: ${profile.mosCode} (${profile.branch})` : ""}
      </p>
      <div className="mt-2 space-y-2">
        {results.slice(0, limit).map((e) => (
          <button
            key={e.id}
            type="button"
            aria-label={`Open ${e.branch} ${e.code} ${e.title}`}
            onClick={() => setSelectedId(e.id)}
            className="block w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-left"
          >
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-display text-lg font-bold text-[var(--text)]">{e.code} — {e.title}</span>
              {e.level === "full" ? <Badge tone="official">FULL</Badge> : <Badge>INDEX</Badge>}
              {profile.mosCode && e.code.toUpperCase() === profile.mosCode.toUpperCase() && e.branch === profile.branch ? <Badge tone="amber">YOUR JOB</Badge> : null}
            </span>
            <span className="mt-0.5 block text-sm text-[var(--dim)]">{e.branch} · {e.field}</span>
            <span className="mt-1 block text-sm text-[var(--text)]">{e.summary.slice(0, 180)}…</span>
          </button>
        ))}
      </div>
      {results.length > limit ? (
        <button type="button" aria-label="Show more MOS results" onClick={() => setLimit((v) => v + 60)} className={`${btnGhost} mt-3 w-full`}>
          Show more ({results.length - limit} remaining)
        </button>
      ) : null}
      {results.length === 0 ? (
        <div className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="text-base text-[var(--text)]">No match in the library yet. This job may be a newer or redesignated code.</p>
          <button type="button" aria-label="Go to review queue" onClick={goReview} className={`${btnGhost} mt-3`}>
            Open the Review Queue
          </button>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------ Review Queue ------------------------------ */

function ReviewView({ goBack }: { goBack: () => void }) {
  const queryClient = useQueryClient();
  const allQ = useQuery({
    queryKey: ["contributions", "all"],
    queryFn: () => api.listContributions({ status: "all", targetId: "" }),
  });
  const review = useMutation({
    mutationFn: (args: { id: number; decision: "approved" | "rejected" }) => api.reviewContribution(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["contributions"] }),
  });
  const items = allQ.data?.contributions ?? [];
  const pending = items.filter((c) => c.status === "pending");
  const decided = items.filter((c) => c.status !== "pending");

  function targetLabel(c: Contribution): string {
    if (c.targetType === "mos") {
      const e = ALL_MOS_ENTRIES.find((x) => x.id === c.targetId);
      return e ? `${e.branch} ${e.code} — ${e.title}` : c.targetId;
    }
    const g = GUIDES.find((x) => x.id === c.targetId);
    return g ? `Guide: ${g.title}` : c.targetId;
  }

  return (
    <div>
      <button type="button" aria-label="Back to MOS Library" onClick={goBack} className={`${btnGhost} mb-3`}>← Back to MOS Library</button>
      <SectionHead
        title="Review Queue"
        sub="The verification gate. Submissions sit here as PENDING — invisible on public pages — until a reviewer approves them. Approved items appear as OFFICIAL or FIELD NOTE on the entry they belong to."
      />
      <p className="mb-4 rounded-[var(--radius)] bg-[var(--red-bg)] p-3 text-sm font-semibold text-[var(--red)]">{UNCLASSIFIED_RULE}</p>
      {allQ.isPending ? <p className="text-base text-[var(--dim)]">Loading the queue…</p> : null}
      {pending.length === 0 && !allQ.isPending ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
          The queue is empty. Submit an addition from any MOS entry or fieldcraft guide and it will land here for review.
        </p>
      ) : null}
      <div className="space-y-3">
        {pending.map((c) => (
          <article key={c.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="amber">PENDING</Badge>
              <Badge>{c.kind === "OFFICIAL" ? "OFFICIAL" : "FIELD NOTE"}</Badge>
              <span className="text-sm text-[var(--dim)]">{targetLabel(c)}</span>
            </div>
            <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">{c.title}</p>
            <p className="mt-1 text-base text-[var(--text)]">{c.body}</p>
            {c.sourceUrl ? (
              <a href={c.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open submitted source for ${c.title}`} className="mt-1 inline-block text-sm font-semibold text-[var(--accent)] underline">
                Submitted source
              </a>
            ) : null}
            <div className="mt-3 flex gap-2">
              <button type="button" aria-label={`Approve contribution ${c.title}`} disabled={review.isPending} onClick={() => review.mutate({ id: c.id, decision: "approved" })} className={btnPrimary}>
                Approve — publish
              </button>
              <button type="button" aria-label={`Reject contribution ${c.title}`} disabled={review.isPending} onClick={() => review.mutate({ id: c.id, decision: "rejected" })} className={btnGhost}>
                Reject
              </button>
            </div>
          </article>
        ))}
      </div>
      <WarStoryQueue />
      <TributeQueue />
      <MentorQueue />
      {decided.length > 0 ? (
        <>
          <h3 className="font-display mb-2 mt-6 text-xl font-bold text-[var(--text)]">Decided</h3>
          <div className="space-y-2">
            {decided.map((c) => (
              <article key={c.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={c.status === "approved" ? "official" : "red"}>{c.status.toUpperCase()}</Badge>
                  <span className="text-sm text-[var(--dim)]">{targetLabel(c)}</span>
                </div>
                <p className="mt-1 text-base font-semibold text-[var(--text)]">{c.title}</p>
              </article>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

/* --------------------- War story review queue ------------------------ */

function WarStoryQueue() {
  const queueQ = useQuery({
    queryKey: ["warStories", "queue"],
    queryFn: () => api.listWarStories({ scope: "queue" }),
  });
  const queue = queueQ.data?.stories ?? [];
  return (
    <div className="mt-8">
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">War Stories — awaiting review</h3>
      <p className="mb-3 text-sm text-[var(--dim)]">
        Member war stories sit here as PENDING — invisible in the War Stories section — until review. The checklist:
        OPSEC scan, living-person identification scan, respectful-content scan, category check (Loss &amp; Remembrance
        warning applied), and the member&apos;s display-name choice honored exactly as selected. A reported story
        comes back here for a keep / edit / remove decision.
      </p>
      {queueQ.isPending ? <p className="text-base text-[var(--dim)]">Loading war stories…</p> : null}
      {!queueQ.isPending && queue.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
          No war stories are waiting. Submissions from the War Stories section land here first.
        </p>
      ) : null}
      <div className="space-y-3">
        {queue.map((s) => (
          <WarStoryReviewCard key={s.id} story={s} />
        ))}
      </div>
    </div>
  );
}

function WarStoryReviewCard({ story }: { story: MemberStory }) {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const review = useMutation({
    mutationFn: (decision: "approved" | "returned" | "rejected") =>
      api.reviewWarStory({ id: story.id, decision, note }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["warStories"] }),
  });
  const byline =
    story.displayChoice === "anonymous"
      ? "Anonymous"
      : `${story.displayName} (${DISPLAY_CHOICES.find((d) => d.value === story.displayChoice)?.label ?? story.displayChoice})`;
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="amber">PENDING</Badge>
        {story.reported ? <Badge tone="red">REPORTED</Badge> : null}
        <Badge tone="amber">MEMBER STORY</Badge>
        <span className="text-sm text-[var(--dim)]">
          {story.branch} · {story.era}
          {story.eraDetail ? ` — ${story.eraDetail}` : ""} · {story.category}
        </span>
      </div>
      <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">{story.title}</p>
      <p className="mt-1 text-sm text-[var(--dim)]">Byline as chosen: {byline}</p>
      {story.category === "Loss & Remembrance" ? (
        <p className="mt-1 text-sm font-semibold text-[var(--amber)]">
          Loss &amp; Remembrance — publishes with the content-warning label.
        </p>
      ) : null}
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{story.body}</p>
      <div className="mt-3">
        <label htmlFor={`ws-note-${story.id}`} className={labelCls}>Return reason (used when returning to the author)</label>
        <input id={`ws-note-${story.id}`} aria-label={`Return reason for ${story.title}`} value={note} onChange={(e) => setNote(e.target.value)} maxLength={500} className={inputCls} placeholder="e.g., Names a living service member without consent — refer by role or first name only" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Approve and publish war story ${story.title}`} disabled={review.isPending} onClick={() => review.mutate("approved")} className={btnPrimary}>
          Approve — publish
        </button>
        <button type="button" aria-label={`Return war story ${story.title} to the author`} disabled={review.isPending} onClick={() => review.mutate("returned")} className={btnGhost}>
          Return to author
        </button>
        <button type="button" aria-label={`Reject war story ${story.title}`} disabled={review.isPending} onClick={() => review.mutate("rejected")} className={btnGhost}>
          Reject
        </button>
      </div>
      {review.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not save that decision. Try again.</p> : null}
    </article>
  );
}

/* --------------------- Wall of Honor review queue --------------------- */

function TributeQueue() {
  const queueQ = useQuery({
    queryKey: ["tributes", "queue"],
    queryFn: () => api.listTributes({ scope: "queue" }),
  });
  const queue = queueQ.data?.tributes ?? [];
  return (
    <div className="mt-8">
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Wall of Honor — awaiting review</h3>
      <p className="mb-3 text-sm text-[var(--dim)]">
        Member tributes sit here as PENDING — invisible on the wall — until review. The checklist: the person has
        died (in service or after service — no living persons); the member knew them, served with them, is family,
        or the person is a documented public figure of history; the facts read accurately and the words
        respectfully. A reported tribute comes back here for the same decision — and a family request to edit or
        remove a tribute is always honored.
      </p>
      {queueQ.isPending ? <p className="text-base text-[var(--dim)]">Loading tributes…</p> : null}
      {!queueQ.isPending && queue.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
          No tributes are waiting. Submissions from the Wall of Honor land here first.
        </p>
      ) : null}
      <div className="space-y-3">
        {queue.map((t) => (
          <TributeReviewCard key={t.id} tribute={t} />
        ))}
      </div>
    </div>
  );
}

function TributeReviewCard({ tribute }: { tribute: MemberTribute }) {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const review = useMutation({
    mutationFn: (decision: "approved" | "returned" | "rejected") =>
      api.reviewTribute({ id: tribute.id, decision, note }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["tributes"] }),
  });
  const born = formatTributeDate(tribute.birthDate);
  const lost = formatTributeDate(tribute.lossDate);
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="amber">PENDING</Badge>
        {tribute.reported ? <Badge tone="red">REPORTED</Badge> : null}
        <Badge tone="amber">MEMBER TRIBUTE</Badge>
        <span className="text-sm text-[var(--dim)]">
          {tribute.branch} · {tribute.era}
        </span>
      </div>
      <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">
        {tribute.rank ? `${tribute.rank} ` : ""}{tribute.name}
      </p>
      <p className="mt-1 text-sm text-[var(--dim)]">
        {tribute.unit ? `${tribute.unit} · ` : ""}
        {born ? `Born ${born}` : ""}
        {born && lost ? " · " : ""}
        {lost ? `Lost ${lost}` : ""}
      </p>
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{tribute.tributeText}</p>
      <p className="mt-2 text-sm text-[var(--dim)]">
        Added by {tribute.addedBy || "a member"}
        {tribute.relationship ? ` — ${tribute.relationship}` : ""}
        {tribute.showAdder ? " (member chose to display this on the wall)" : " (not displayed on the wall)"}
      </p>
      <div className="mt-3">
        <label htmlFor={`tribute-note-${tribute.id}`} className={labelCls}>Return reason (used when returning to the member)</label>
        <input id={`tribute-note-${tribute.id}`} aria-label={`Return reason for tribute to ${tribute.name}`} value={note} onChange={(e) => setNote(e.target.value)} maxLength={500} className={inputCls} placeholder="e.g., A date needs checking against the record before this can publish" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Approve and publish tribute to ${tribute.name}`} disabled={review.isPending} onClick={() => review.mutate("approved")} className={btnPrimary}>
          Approve — publish
        </button>
        <button type="button" aria-label={`Return tribute to ${tribute.name} to the member`} disabled={review.isPending} onClick={() => review.mutate("returned")} className={btnGhost}>
          Return to member
        </button>
        <button type="button" aria-label={`Reject tribute to ${tribute.name}`} disabled={review.isPending} onClick={() => review.mutate("rejected")} className={btnGhost}>
          Reject
        </button>
      </div>
      {review.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not save that decision. Try again.</p> : null}
    </article>
  );
}

/* --------------------- Mentor review queue --------------------- */

function MentorQueue() {
  const queueQ = useQuery({
    queryKey: ["mentors", "queue"],
    queryFn: () => api.listMentors({ scope: "queue" }),
  });
  const reportedQ = useQuery({
    queryKey: ["mentorRequests", "reported"],
    queryFn: () => api.listReportedMentorRequests({}),
  });
  const queue = queueQ.data?.mentors ?? [];
  const reported = reportedQ.data?.requests ?? [];
  return (
    <div className="mt-8">
      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Find a Mentor — awaiting review</h3>
      <p className="mb-3 text-sm text-[var(--dim)]">
        Mentor listings sit here as PENDING — invisible in Find a Mentor — until review. The checklist: the member
        is offering experience, not authority (no advisor, recruiter, or VSO claims); no personal phone, email, or
        social handles anywhere in the listing; the job matches the Library entry they picked; and the bio reads
        like a peer offering help. A reported listing comes back here for a keep / edit / remove decision, and
        reported requests land below for the same treatment.
      </p>
      {queueQ.isPending ? <p className="text-base text-[var(--dim)]">Loading mentor listings…</p> : null}
      {!queueQ.isPending && queue.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
          No mentor listings are waiting. Submissions from Find a Mentor land here first.
        </p>
      ) : null}
      <div className="space-y-3">
        {queue.map((m) => (
          <MentorReviewCard key={m.id} mentor={m} />
        ))}
      </div>
      {reported.length > 0 ? (
        <>
          <h4 className="font-display mb-2 mt-6 text-lg font-bold text-[var(--text)]">Reported requests</h4>
          <div className="space-y-3">
            {reported.map((r) => (
              <ReportedRequestCard key={r.id} request={r} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function MentorReviewCard({ mentor }: { mentor: MemberMentor }) {
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const review = useMutation({
    mutationFn: (decision: "approved" | "returned" | "rejected") =>
      api.reviewMentor({ id: mentor.id, decision, note }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["mentors"] }),
  });
  const jobLabel = [mentor.jobCode, mentor.jobTitle].filter(Boolean).join(" — ");
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="amber">PENDING</Badge>
        {mentor.reported ? <Badge tone="red">REPORTED</Badge> : null}
        <Badge tone="amber">MENTOR LISTING</Badge>
        <span className="text-sm text-[var(--dim)]">
          {mentor.branch}
          {jobLabel ? ` · ${jobLabel}` : ""}
          {mentor.yearsService !== null ? ` · ${mentor.yearsService} yrs` : ""}
        </span>
      </div>
      <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">{mentor.displayName}</p>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Display: {MENTOR_DISPLAY_CHOICES.find((d) => d.value === mentor.displayChoice)?.label ?? mentor.displayChoice}
        {" · "}Availability: {mentor.availability === "open" ? "Open" : "Paused"}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {mentor.topics.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{mentor.bio}</p>
      <div className="mt-3">
        <label htmlFor={`mentor-note-${mentor.id}`} className={labelCls}>Return reason (used when returning to the member)</label>
        <input id={`mentor-note-${mentor.id}`} aria-label={`Return reason for mentor listing by ${mentor.displayName}`} value={note} onChange={(e) => setNote(e.target.value)} maxLength={500} className={inputCls} placeholder="e.g., Listing includes a phone number — contact stays inside the app" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Approve and publish mentor listing by ${mentor.displayName}`} disabled={review.isPending} onClick={() => review.mutate("approved")} className={btnPrimary}>
          Approve — publish
        </button>
        <button type="button" aria-label={`Return mentor listing by ${mentor.displayName} to the member`} disabled={review.isPending} onClick={() => review.mutate("returned")} className={btnGhost}>
          Return to member
        </button>
        <button type="button" aria-label={`Reject mentor listing by ${mentor.displayName}`} disabled={review.isPending} onClick={() => review.mutate("rejected")} className={btnGhost}>
          Reject
        </button>
      </div>
      {review.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not save that decision. Try again.</p> : null}
    </article>
  );
}

function ReportedRequestCard({ request }: { request: MemberMentorRequest }) {
  const queryClient = useQueryClient();
  const resolve = useMutation({
    mutationFn: (decision: "cleared" | "removed") =>
      api.resolveMentorRequestReport({ id: request.id, decision }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["mentorRequests"] });
      void queryClient.invalidateQueries({ queryKey: ["checkins"] });
    },
  });
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="red">REPORTED</Badge>
        <Badge tone="amber">MENTOR REQUEST</Badge>
        <span className="text-sm text-[var(--dim)]">
          To {request.mentorDisplayName} · {request.topic} · status: {request.status}
        </span>
      </div>
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{request.message}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Clear the report on the mentorship request about ${request.topic}`} disabled={resolve.isPending} onClick={() => resolve.mutate("cleared")} className={btnPrimary}>
          Clear report — no action
        </button>
        <button type="button" aria-label={`Remove the reported mentorship request about ${request.topic}`} disabled={resolve.isPending} onClick={() => resolve.mutate("removed")} className={btnGhost}>
          Remove request
        </button>
      </div>
      {resolve.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not save that decision. Try again.</p> : null}
    </article>
  );
}

/* ------------------------------ Rank Charts ------------------------------ */

function RankTable({ rows, branch, category }: { rows: RankRow[]; branch: string; category: RankCategory }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[var(--surface2)]">
            <th scope="col" className="px-2 py-2 text-xs font-bold tracking-wide text-[var(--dim)]">GRADE</th>
            <th scope="col" className="px-2 py-2 text-xs font-bold tracking-wide text-[var(--dim)]">INSIGNIA</th>
            <th scope="col" className="px-2 py-2 text-xs font-bold tracking-wide text-[var(--dim)]">RANK</th>
            <th scope="col" className="px-2 py-2 text-xs font-bold tracking-wide text-[var(--dim)]">ABBR.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const ins = insigniaFor(branch, category, r.grade, r.abbr);
            return (
              <tr key={`${r.grade}-${r.abbr}-${i}`} className="border-t border-[var(--border)] align-top">
                <td className="px-2 py-2.5 text-sm font-bold text-[var(--accent)]">{r.grade}</td>
                <td className="w-24 px-2 py-2.5">
                  {ins ? (
                    <>
                      <InsigniaArt art={ins.art} />
                      <span className="mt-1 block text-xs leading-snug text-[var(--dim)]">{ins.display}</span>
                      {ins.flag ? <span className="mt-1 block text-xs font-semibold leading-snug text-[var(--amber)]">⚠ {ins.flag}</span> : null}
                    </>
                  ) : null}
                </td>
                <td className="px-2 py-2.5">
                  <span className="block text-base font-semibold text-[var(--text)]">{r.title}</span>
                  {r.note ? <span className="mt-0.5 block text-sm text-[var(--dim)]">{r.note}</span> : null}
                </td>
                <td className="whitespace-nowrap px-2 py-2.5 text-sm font-semibold text-[var(--text)]">{r.abbr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function RankChartsView() {
  const [branch, setBranch] = useState("Marine Corps");
  const chart = RANK_CHARTS.find((c) => c.branch === branch) ?? RANK_CHARTS[0];
  if (!chart) return null;

  return (
    <div>
      <SectionHead
        title="Rank Charts"
        sub="Pay grades are the shared DoD ladder — E = enlisted, W = warrant officer, O = commissioned officer — so the same pay grade compares across branches even when the titles differ."
      />
      <div className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--amber-bg)] p-4">
        <p className="text-sm text-[var(--text)]">
          <span className="font-bold">Five-star grades: </span>
          {FIVE_STAR_NOTE}
        </p>
      </div>
      <p className="mb-4 text-sm text-[var(--dim)]">{INSIGNIA_GUIDE_LABEL}</p>

      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Rank chart branch picker">
        {RANK_CHARTS.map((c) => (
          <button
            key={c.branch}
            type="button"
            aria-label={`${c.branch} rank chart`}
            aria-pressed={branch === c.branch}
            onClick={() => setBranch(c.branch)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${branch === c.branch ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
          >
            {c.branch}
          </button>
        ))}
      </div>

      <div className="mb-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">How to read this — {chart.branch}</h3>
        <p className="mt-1 text-base text-[var(--text)]">{chart.howToRead}</p>
      </div>

      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Enlisted</h3>
      <div className="mb-6">
        <RankTable rows={chart.enlisted} branch={chart.branch} category="enlisted" />
      </div>

      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Warrant Officers</h3>
      <div className="mb-6">
        {chart.warrant ? (
          <>
            <RankTable rows={chart.warrant} branch={chart.branch} category="warrant" />
            {chart.warrantNote ? <p className="mt-2 text-sm text-[var(--dim)]">{chart.warrantNote}</p> : null}
            {WARRANT_EXTRA_NOTES[chart.branch] ? (
              <p className="mt-2 text-sm text-[var(--dim)]">{WARRANT_EXTRA_NOTES[chart.branch]}</p>
            ) : null}
          </>
        ) : (
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="text-base font-semibold text-[var(--text)]">{chart.warrantNote ?? "No warrant officers."}</p>
          </div>
        )}
      </div>

      <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Commissioned Officers</h3>
      <div className="mb-6">
        <RankTable rows={chart.officers} branch={chart.branch} category="officers" />
      </div>

      {UNIFORM_NOTES[chart.branch] ? (
        <div className="mb-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
          <h3 className="font-display mb-1 text-lg font-bold text-[var(--text)]">Insignia by uniform — {chart.branch}</h3>
          <p className="text-base text-[var(--text)]">{UNIFORM_NOTES[chart.branch]}</p>
        </div>
      ) : null}

      <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="font-display mb-2 text-lg font-bold text-[var(--text)]">Sources</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--dim)]">
          <li>
            {chart.branch} source:{" "}
            {chart.sourceUrl ? (
              <a href={chart.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-[var(--accent)] underline">
                {chart.sourceLabel}
              </a>
            ) : (
              <span className="font-semibold text-[var(--text)]">{chart.sourceLabel}</span>
            )}
          </li>
          <li>
            Cross-service reference:{" "}
            <a href={DOD_INSIGNIA_URL} target="_blank" rel="noreferrer" className="font-semibold text-[var(--accent)] underline">
              {DOD_INSIGNIA_LABEL}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------- Benefits ------------------------------- */

function BenefitCard({ item }: { item: BenefitItem }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h4 className="font-display text-lg font-bold text-[var(--text)]">{item.name}</h4>
      <p className="mt-1 text-base text-[var(--text)]">{item.summary}</p>
      <p className="mt-2 text-sm text-[var(--dim)]">
        <span className="font-bold text-[var(--text)]">Who qualifies: </span>
        {item.eligibility}
      </p>
      {item.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {item.flag}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        {item.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${item.name} — ${l.label} (official page, opens in new tab)`}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            {l.label} ↗
          </a>
        ))}
      </div>
      <CardTools
        cardRef={{
          section: "benefits",
          itemKey: item.name,
          title: item.name,
          summary: item.summary,
          source: sourceFromLinks(item.links),
        }}
      />
    </article>
  );
}

function BenefitsView({ profile }: { profile: Profile }) {
  const [branch, setBranch] = useState(
    () => BRANCH_BENEFITS.find((b) => b.branch === profile.branch)?.branch ?? BRANCH_BENEFITS[0]!.branch,
  );
  const branchData = BRANCH_BENEFITS.find((b) => b.branch === branch) ?? BRANCH_BENEFITS[0];
  if (!branchData) return null;

  return (
    <div>
      <SectionHead
        title="Benefits"
        sub="What VA and DoD offer everyone, plus the programs your own branch runs — each with the official page to apply or confirm details."
      />
      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{BENEFITS_STANDING_NOTE}</p>
      </div>

      <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">For everyone (VA &amp; DoD)</h3>
      {UNIVERSAL_BENEFITS.map((cat) => (
        <section key={cat.title} aria-label={cat.title} className="mb-6">
          <h4 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">{cat.title.toUpperCase()}</h4>
          <div className="space-y-3">
            {cat.items.map((item) => (
              <BenefitCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}

      <h3 className="font-display mb-3 mt-8 text-xl font-bold text-[var(--text)]">By branch</h3>
      <div className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--text)]">{BRANCH_STANDING_NOTE}</p>
      </div>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Benefits branch picker">
        {BRANCH_BENEFITS.map((b) => (
          <button
            key={b.branch}
            type="button"
            aria-label={`${b.branch} benefits`}
            aria-pressed={branch === b.branch}
            onClick={() => setBranch(b.branch)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${branch === b.branch ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
          >
            {b.branch}
          </button>
        ))}
      </div>
      {branchData.note ? (
        <div className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--amber-bg)] p-4">
          <p className="text-sm text-[var(--text)]">{branchData.note}</p>
        </div>
      ) : null}
      <div className="space-y-3">
        {branchData.items.map((item) => (
          <BenefitCard key={item.name} item={item} />
        ))}
      </div>

      <h3 className="font-display mb-3 mt-8 text-xl font-bold text-[var(--text)]">State benefits</h3>
      <BenefitCard item={STATE_BENEFIT} />
    </div>
  );
}

/* --------------------------- Deals & Discounts --------------------------- */

function DealsView() {
  return (
    <div>
      <SectionHead
        title="Deals & Discounts"
        sub="The apps and programs that actually save military and veteran households money — who each one is for, how it verifies you, and the official link. Then a finder that points you at the right source for your place, and the on-base programs (MCCS, MWR, SMP, ITT) most people never use."
      />

      <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Deal apps &amp; platforms</h3>
      <div className="space-y-3">
        {DEAL_PLATFORMS.map((p) => (
          <article key={p.name} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-display text-lg font-bold text-[var(--text)]">{p.name}</h4>
              <Badge>{p.kind}</Badge>
            </div>
            <p className="mt-1 text-base text-[var(--text)]">{p.what}</p>
            <p className="mt-2 text-sm text-[var(--dim)]">
              <span className="font-bold text-[var(--text)]">Who qualifies: </span>
              {p.eligible}
            </p>
            <p className="mt-1 text-sm text-[var(--dim)]">
              <span className="font-bold text-[var(--text)]">Verification: </span>
              {p.verification}
            </p>
            <div className="mt-3">
              <a
                href={p.link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} — official site (opens in new tab)`}
                className="inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
              >
                {p.link.label} ↗
              </a>
            </div>
            <CardTools
              cardRef={{
                section: "deals",
                itemKey: p.name,
                title: p.name,
                summary: p.what,
                source: p.link.label,
              }}
            />
          </article>
        ))}
      </div>

      <h4 className="font-display mb-2 mt-6 text-base font-bold tracking-wide text-[var(--dim)]">STANDING PROGRAMS — RETAIL, CARRIERS, PARKS &amp; PASSES</h4>
      <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
        {STANDING_PROGRAMS.map((s, i) => (
          <div key={s.name} className={`px-4 py-3 ${i > 0 ? "border-t border-[var(--border)]" : ""}`}>
            <p className="text-base text-[var(--text)]">
              <span className="font-bold">{s.name}</span>
              {s.url ? (
                <>
                  {" — "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.name} — program page (opens in new tab)`}
                    className="font-semibold text-[var(--accent)] underline"
                  >
                    program page ↗
                  </a>
                </>
              ) : null}
            </p>
            <p className="mt-0.5 text-sm text-[var(--dim)]">{s.note}</p>
            <CardTools
              cardRef={{
                section: "deals",
                itemKey: `program-${s.name}`,
                title: s.name,
                summary: s.note,
                source: s.url ? s.name : null,
              }}
            />
          </div>
        ))}
      </div>

      <DealsFinder />

      <h3 className="font-display mb-3 mt-8 text-xl font-bold text-[var(--text)]">On-base life &amp; travel help</h3>
      {ONBASE_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-6">
          <h4 className="font-display mb-2 text-base font-bold tracking-wide text-[var(--dim)]">{group.title.toUpperCase()}</h4>
          {group.intro ? (
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{group.intro}</p>
            </div>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <OnBaseCard key={entry.name} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function OnBaseCard({ entry }: { entry: OnBaseEntry }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h5 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h5>
      <p className="mt-1 text-base text-[var(--text)]">{entry.body}</p>
      {entry.list ? (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
          {entry.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      ) : null}
      {entry.note ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {entry.note}</p>
      ) : null}
      {entry.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "deals",
          itemKey: `onbase-${entry.name}`,
          title: entry.name,
          summary: entry.body,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

function DealsFinder() {
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState<FinderCategory | "All">("All");
  const results = FINDER_SOURCES.filter((s) => category === "All" || s.categories.includes(category));
  const ebUrl = eventbritePlaceUrl(place);

  return (
    <section aria-label="Find deals and events near you" className="mt-8">
      <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Find deals &amp; events near you</h3>
      <div className="mb-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{FINDER_FRAMING}</p>
      </div>

      <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
        <label htmlFor="deals-place" className={labelCls}>
          Your city &amp; state
        </label>
        <input
          id="deals-place"
          aria-label="City and state to find deals and events near"
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="e.g. Columbus, OH"
          className={inputCls}
        />
        <p className="mt-2 text-sm text-[var(--dim)]">
          Your place builds the Eventbrite link below. Every other source searches by city, state, or ZIP on its own
          site — open the ones for your category and search there.
        </p>
        <p className="mt-3 text-sm font-semibold text-[var(--text)]">What are you looking for?</p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Deal finder category picker">
          {(["All", ...FINDER_CATEGORIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-label={c === "All" ? "Show all deal finder sources" : `Show sources for ${c}`}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-sm font-bold ${category === c ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--dim)]" role="status">
        {results.length} source{results.length === 1 ? "" : "s"}
        {category !== "All" ? ` for ${category}` : ""}
        {place.trim() ? ` — search each one for ${place.trim()}` : ""}
      </p>
      <div className="mt-2 space-y-3">
        {results.map((s) => (
          <FinderCard key={s.name} source={s} place={place.trim()} eventbriteUrl={ebUrl} />
        ))}
      </div>
    </section>
  );
}

function FinderCard({
  source,
  place,
  eventbriteUrl,
}: {
  source: FinderSource;
  place: string;
  eventbriteUrl: string | null;
}) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{source.name}</h4>
        <Badge>{source.kind}</Badge>
      </div>
      <div className="mt-1 flex flex-wrap gap-1">
        {source.categories.map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>
      <p className="mt-2 text-base text-[var(--text)]">{source.lists}</p>
      {source.note ? <p className="mt-1 text-sm text-[var(--dim)]">{source.note}</p> : null}
      <div className="mt-3">
        {source.eventbrite ? (
          eventbriteUrl ? (
            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Eventbrite events near ${place} (opens in new tab)`}
              className="inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
            >
              Eventbrite near {place} ↗
            </a>
          ) : (
            <p className="text-sm font-semibold text-[var(--dim)]">
              Enter a city and state above (e.g. Columbus, OH) and this card links straight to Eventbrite events for
              that place.
            </p>
          )
        ) : source.url ? (
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${source.name} — open and search (opens in new tab)`}
            className="inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            {source.urlLabel ?? source.name} ↗
          </a>
        ) : (
          <p className="text-sm font-semibold text-[var(--dim)]">No single website to link — see the note above for where to go.</p>
        )}
      </div>
      <CardTools
        cardRef={{
          section: "deals",
          itemKey: `finder-${source.name}`,
          title: source.name,
          summary: source.lists,
          source: source.eventbrite ? "Eventbrite" : (source.urlLabel ?? (source.url ? source.name : null)),
        }}
      />
    </article>
  );
}

/* --------------------------- Transition & Jobs --------------------------- */

function TransitionView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Transition & Jobs"
        sub="For members getting out, already out, or serving in the Reserve/Guard alongside a civilian job — translate your MOS, get placed before EAS, and know your rights at work."
      />

      <section
        aria-label="Six months from EAS — start here"
        className="mb-6 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4"
      >
        <h3 className="font-display text-xl font-bold text-[var(--text)]">{EAS_PANEL_TITLE}</h3>
        <div className="mt-3 space-y-3">
          {EAS_STEPS.map((s) => (
            <div key={s.title}>
              <p className="font-display text-base font-bold text-[var(--text)]">{s.title}</p>
              <p className="mt-0.5 text-sm text-[var(--dim)]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{TRANSITION_STANDING_NOTE}</p>
      </div>

      {TRANSITION_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.framing ? (
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{group.framing}</p>
            </div>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <TransitionCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function TransitionCard({ entry, go }: { entry: TransitionEntry; go: (v: View) => void }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      <p className="mt-2 text-sm text-[var(--dim)]">
        <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
        {entry.who}
      </p>
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {entry.flag}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">
        {entry.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            {l.label} ↗
          </a>
        ))}
        {entry.crossRef ? (
          <button
            type="button"
            aria-label="Open the VR&E entry in Benefits"
            onClick={() => go("benefits")}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            Open the VR&amp;E entry in Benefits
          </button>
        ) : null}
      </div>
      <CardTools
        cardRef={{
          section: "transition",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------------- Education ------------------------------- */

function EducationView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Education Planner"
        sub="Build a degree out of what you already did: transcript credit first, free exams second, then Tuition Assistance and the GI Bill — in that order."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{EDUCATION_STANDING_NOTE}</p>
      </div>

      {EDUCATION_SECTIONS.map((section) => (
        <section key={section.title} aria-label={section.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{section.title}</h3>
          {section.intro ? (
            <div className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <p className="text-sm text-[var(--text)]">{section.intro}</p>
              {section.introLink ? (
                <a
                  href={section.introLink.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`DANTES homepage — ${section.introLink.label} (opens in new tab)`}
                  className="mt-2 inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
                >
                  {section.introLink.label} ↗
                </a>
              ) : null}
            </div>
          ) : null}
          <div className="space-y-3">
            {section.entries.map((entry) => (
              <EducationCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function EducationCard({ entry, go }: { entry: EducationEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  return (
    <article
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        entry.historical ? "border-2 border-[var(--red)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.historical ? <Badge tone="red">HISTORICAL — ENDED MARCH 29, 2019</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.paras?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-2 text-sm text-[var(--text)]">
          {p}
        </p>
      ))}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {entry.flag}</p>
      ) : null}
      {entry.links.length > 0 || entry.benefitsRef || entry.transitionRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className={linkCls}
            >
              {l.label} ↗
            </a>
          ))}
          {entry.benefitsRef ? (
            <button
              type="button"
              aria-label={`Open Benefits for the funding details referenced by ${entry.name}`}
              onClick={() => go("benefits")}
              className={linkCls}
            >
              Funding details live in Benefits
            </button>
          ) : null}
          {entry.transitionRef ? (
            <button
              type="button"
              aria-label="Open Transition & Jobs for DoD COOL as a pre-EAS priority"
              onClick={() => go("transition")}
              className={linkCls}
            >
              DoD COOL as a pre-EAS priority — Transition
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "education",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------------- Pay & Money ------------------------------- */

function MoneyView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Pay & Money"
        sub="Understand your own paycheck: the official tables and allowance lookups, DoD's pay estimator, a decoder for every block on your LES, the pay-date rules, and free help when money gets tight."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{MONEY_STANDING_NOTE}</p>
      </div>

      {MONEY_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <MoneyCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
          {group.lesBlocks ? (
            <LesDecoder group={group} go={go} />
          ) : null}
        </section>
      ))}
    </div>
  );
}

function MoneyCard({ entry, go }: { entry: MoneyEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  return (
    <article
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        entry.nonOfficial ? "border-2 border-[var(--amber)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.nonOfficial ? <Badge tone="amber">NON-OFFICIAL — BANK FEATURE</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.examples ? (
        <div className="mt-3">
          <p className="text-sm font-bold text-[var(--text)]">2026 examples — not the full table</p>
          <ul className="mt-1 space-y-1">
            {entry.examples.map((ex) => (
              <li
                key={ex.grade}
                className="flex flex-wrap items-baseline justify-between gap-2 rounded bg-[var(--surface2)] px-3 py-2"
              >
                <span className="text-sm text-[var(--text)]">{ex.grade}</span>
                <span className="font-display text-base font-bold text-[var(--text)]">{ex.amount}</span>
              </li>
            ))}
          </ul>
          {entry.examplesNote ? <p className="mt-2 text-sm text-[var(--dim)]">{entry.examplesNote}</p> : null}
        </div>
      ) : null}
      {entry.figures ? (
        <ul className="mt-3 space-y-1">
          {entry.figures.map((f) => (
            <li key={f} className="rounded bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--text)]">
              {f}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {entry.flag}</p>
      ) : null}
      {entry.links.length > 0 || entry.benefitsRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className={linkCls}
            >
              {l.label} ↗
            </a>
          ))}
          {entry.benefitsRef ? (
            <button
              type="button"
              aria-label={`Open Benefits for the full detail referenced by ${entry.name}`}
              onClick={() => go("benefits")}
              className={linkCls}
            >
              Full detail lives in Benefits
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "pay",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

function LesDecoder({ group, go }: { group: MoneyGroup; go: (v: View) => void }) {
  const [open, setOpen] = useState(false);
  const blocks: LesBlock[] = group.lesBlocks ?? [];
  const gotchas = group.lesGotchas ?? [];
  return (
    <div className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Hide the LES block-by-block decoder" : "Show the LES block-by-block decoder"}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span>
          <span className="font-display block text-lg font-bold text-[var(--text)]">
            The LES, block by block
          </span>
          <span className="mt-0.5 block text-sm text-[var(--dim)]">
            The standard active-duty LES (~78 numbered fields), explained block by block — tap to{" "}
            {open ? "hide" : "expand"}.
          </span>
        </span>
        <span aria-hidden="true" className="font-display text-2xl font-bold text-[var(--accent)]">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <div className="mt-4 space-y-3">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
              <p className="font-display text-base font-bold text-[var(--text)]">{b.title}</p>
              <p className="mt-1 text-sm text-[var(--text)]">{b.text}</p>
            </div>
          ))}
          <div className="rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3">
            <p className="font-display text-base font-bold text-[var(--text)]">Gotchas, collected</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[var(--text)]">
              {gotchas.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ol>
          </div>
          <button
            type="button"
            aria-label="Open Benefits for TSP and BRS details referenced by the LES decoder"
            onClick={() => go("benefits")}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            TSP &amp; BRS details live in Benefits
          </button>
        </div>
      ) : null}
    </div>
  );
}

/* ---------------------------- PCS Move Center ---------------------------- */

function PcsView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="PCS Move Center"
        sub="The whole move, orders to arrival: the phase timeline, the entitlements people forget, household goods, housing decisions, special cases, and the travel claim — with the official link for each step."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{PCS_STANDING_NOTE}</p>
        <p className="mt-2 text-sm text-[var(--text)]">{PCS_FLAG_NOTE}</p>
      </div>

      {PCS_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          {group.timeline ? (
            <ol className="space-y-3">
              {group.entries.map((entry, i) => (
                <li key={entry.name} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="font-display mt-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-base font-bold text-[var(--accent-text)]"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <PcsCard entry={entry} phase={i + 1} go={go} />
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <div className="space-y-3">
              {group.entries.map((entry) => (
                <PcsCard key={entry.name} entry={entry} go={go} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

function PcsCard({ entry, phase, go }: { entry: PcsEntry; phase?: number; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {phase ? <Badge tone="official">PHASE {phase}</Badge> : null}
        {entry.alertBadge ? <Badge tone="red">{entry.alertBadge}</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.refNote ? <p className="mt-2 text-sm italic text-[var(--dim)]">{entry.refNote}</p> : null}
      {entry.links.length > 0 || entry.payRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className={linkCls}
            >
              {l.label} ↗
            </a>
          ))}
          {entry.payRef ? (
            <button
              type="button"
              aria-label={`Open Pay & Money for the allowance detail referenced by ${entry.name}`}
              onClick={() => go("pay")}
              className={linkCls}
            >
              Allowance detail also lives in Pay &amp; Money
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "pcs",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* --------------------------- Family & Life Events --------------------------- */

function FamilyView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Family & Life Events"
        sub="The life events that change your family's paperwork, benefits, and support: marriage, a baby, divorce, and casualty basics as step checklists — plus spouse careers and education, childcare and school, EFMP by branch, and the support centers and counselors, with each program's official link."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{FAMILY_STANDING_NOTE}</p>
      </div>

      {FAMILY_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <FamilyCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function FamilyCard({ entry, go }: { entry: FamilyEntry; go: (v: View) => void }) {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: FamilyLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.alertBadge ? <Badge tone="red">{entry.alertBadge}</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.steps ? (
        <ol className="mt-3 space-y-2">
          {entry.steps.map((step, i) => (
            <li key={i}>
              <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
                <input
                  type="checkbox"
                  checked={!!done[i]}
                  onChange={(e) => setDone((d) => ({ ...d, [i]: e.target.checked }))}
                  aria-label={`Step ${i + 1} of the ${entry.name} checklist`}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--accent)]"
                />
                <span className={`text-sm ${done[i] ? "text-[var(--dim)] line-through" : "text-[var(--text)]"}`}>
                  <span className="font-bold">Step {i + 1}. </span>
                  {step}
                </span>
              </label>
            </li>
          ))}
        </ol>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.bullets ? (
        <ul className="mt-2 space-y-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
              {b.links && b.links.length > 0 ? (
                <span className="mt-1 flex flex-wrap gap-2">{renderLinks(b.links)}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.refNote ? <p className="mt-2 text-sm italic text-[var(--dim)]">{entry.refNote}</p> : null}
      {entry.links.length > 0 || entry.benefitsRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.benefitsRef ? (
            <button
              type="button"
              aria-label={`Open Benefits for the survivor-benefit detail referenced by ${entry.name}`}
              onClick={() => go("benefits")}
              className={linkCls}
            >
              Survivor-benefit detail lives in Benefits
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "family",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* --------------------------- VA Claims & VSO ---------------------------- */

function ClaimsView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="VA Claims & VSO Guide"
        sub="How a VA disability claim actually moves — filing, the intent to file, BDD before you get out, the evidence VA decides on, ratings at concept level, the three review lanes after a decision, and where the free accredited help is — with VA's own warning about claim predators."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{CLAIMS_STANDING_NOTE}</p>
        <p className="mt-2 text-sm text-[var(--text)]">{CLAIMS_FLAGS_NOTE}</p>
      </div>

      {CLAIMS_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <ClaimsCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ClaimsCard({ entry, go }: { entry: ClaimsEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: ClaimsLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        entry.alertBadge ? "border-2 border-[var(--red)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.alertBadge ? <Badge tone="red">{entry.alertBadge}</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.steps ? (
        <ol className="mt-3 space-y-1.5">
          {entry.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 text-sm text-[var(--text)]">
              <span
                aria-hidden="true"
                className="font-display flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-[var(--accent-text)]"
              >
                {i + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.bullets ? (
        <ul className="mt-2 space-y-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
              {b.links && b.links.length > 0 ? (
                <span className="mt-1 flex flex-wrap gap-2">{renderLinks(b.links)}</span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 || entry.benefitsRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.benefitsRef ? (
            <button
              type="button"
              aria-label={`Open Benefits for the benefit detail cross-referenced by ${entry.name}`}
              onClick={() => go("benefits")}
              className={linkCls}
            >
              This benefit lives in Benefits
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "claims",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------- Readiness & Life Skills ------------------------ */

function ReadinessView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Readiness & Life Skills"
        sub="Pre-deployment readiness, special duties and assignments, your branch's uniform publication, first-home-station life skills, money traps, and FVAP absentee voting — each card in plain language with its official link."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{READINESS_STANDING_NOTE}</p>
      </div>

      {READINESS_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <ReadinessCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ReadinessCard({ entry, go }: { entry: ReadinessEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: ReadinessLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={l.url}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        entry.alertBadge ? "border-2 border-[var(--red)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.alertBadge ? <Badge tone="red">{entry.alertBadge}</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 || entry.libraryRef ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.libraryRef ? (
            <button
              type="button"
              aria-label="Open the MOS Library for the EOD career entries"
              onClick={() => go("mos")}
              className={linkCls}
            >
              EOD careers live in the MOS Library
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "readiness",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------------- Fieldcraft ------------------------------- */

/* ----------------------------- Retirement Hub ---------------------------- */

function RetirementView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Retirement Hub"
        sub="The two retirement systems, the official calculators, the decisions you make once, the application timeline, and life after the check starts — each card in plain language with its official link."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{RETIREMENT_STANDING_NOTE}</p>
      </div>

      {RETIREMENT_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <RetirementCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function RetirementCard({ entry, go }: { entry: RetirementEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: RetirementLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.callout ? (
        <p className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-base font-bold text-[var(--text)]">
          {entry.callout}
        </p>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 || entry.xref ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.xref ? (
            <button
              type="button"
              aria-label={entry.xref.label}
              onClick={() => go(entry.xref!.target)}
              className={linkCls}
            >
              {entry.xref.label}
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "retirement",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------- Records & DD214 Center ----------------------- */

function RecordsView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Records & DD214 Center"
        sub="How to get your service records, replace what's lost, and ask for corrections — each card in plain language with its official link, VA.gov and the National Archives first."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{RECORDS_STANDING_NOTE}</p>
      </div>

      {RECORDS_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <RecordsCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function RecordsCard({ entry, go }: { entry: RecordsEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: RecordsLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.callout ? (
        <p className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-base font-bold text-[var(--text)]">
          {entry.callout}
        </p>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 || entry.xref ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.xref ? (
            <button
              type="button"
              aria-label={entry.xref.label}
              onClick={() => go(entry.xref!.target)}
              className={linkCls}
            >
              {entry.xref.label}
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "records",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ----------------------------- Change Your Job ---------------------------- */

function ChangeJobView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      <SectionHead
        title="Change Your Job"
        sub="Switching your MOS, rating, or AFSC inside your own branch — each program under its real name, with who runs it, the steps, your first stop, and the live official source for what's open today."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{CHANGE_JOB_STANDING_NOTE}</p>
      </div>

      {CHANGE_JOB_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <ChangeJobCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ChangeJobCard({ entry, go }: { entry: ChangeJobEntry; go: (v: View) => void }) {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: ChangeJobLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  const factRow = (label: string, value?: string) =>
    value ? (
      <p className="mt-2 text-sm text-[var(--text)]">
        <span className="font-bold">{label}: </span>
        {value}
      </p>
    ) : null;
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
      </div>
      {factRow("Official program", entry.program)}
      {factRow("Who runs it", entry.runBy)}
      {factRow("First stop", entry.firstStop)}
      <p className="mt-2 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.steps ? (
        <ol className="mt-3 space-y-2">
          {entry.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
              <span className="font-display flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--accent-text)]">
                {i + 1}
              </span>
              <span className="text-sm text-[var(--text)]">
                {step.title ? <span className="font-bold">{step.title}. </span> : null}
                {step.text}
              </span>
            </li>
          ))}
        </ol>
      ) : null}
      {entry.checklist ? (
        <ol className="mt-3 space-y-2">
          {entry.checklist.map((item, i) => (
            <li key={i}>
              <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
                <input
                  type="checkbox"
                  checked={!!done[i]}
                  onChange={(e) => setDone((d) => ({ ...d, [i]: e.target.checked }))}
                  aria-label={`Before You Apply item ${i + 1}`}
                  className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--accent)]"
                />
                <span className={`text-sm ${done[i] ? "text-[var(--dim)] line-through" : "text-[var(--text)]"}`}>{item}</span>
              </label>
            </li>
          ))}
        </ol>
      ) : null}
      {entry.callout ? (
        <p className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-base font-bold text-[var(--text)]">
          {entry.callout}
        </p>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 || entry.xref ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {renderLinks(entry.links)}
          {entry.xref ? (
            <button
              type="button"
              aria-label={entry.xref.label}
              onClick={() => go(entry.xref!.target)}
              className={linkCls}
            >
              {entry.xref.label}
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "changejob",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ---------------------------- Switch Branches ---------------------------- */

function SwitchBranchesView() {
  return (
    <div>
      <SectionHead
        title="Switch Branches"
        sub="Moving to a different branch: the two paths, the reality checks, each gaining branch's official door, and the checklist — in that order."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{SWITCH_STANDING_NOTE}</p>
      </div>

      {SWITCH_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <SwitchCard key={entry.name} entry={entry} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function SwitchCard({ entry }: { entry: SwitchEntry }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: SwitchLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article
      className={`rounded-[var(--radius)] bg-[var(--surface)] p-4 ${
        entry.prominent
          ? "border-2 border-[var(--amber)]"
          : "border border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        {entry.prominent ? <Badge tone="amber">READ FIRST</Badge> : <Badge>{entry.kind}</Badge>}
      </div>
      <p className="mt-2 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-3 space-y-2">
          {entry.bullets.map((b, i) => (
            <li key={i} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}. </span> : null}
              {b.text}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.checklistSections?.map((section, si) => (
        <div key={section.heading} className="mt-4">
          <h5 className="font-display mb-2 text-base font-bold text-[var(--text)]">{section.heading}</h5>
          <ol className="space-y-2">
            {section.items.map((item, ii) => {
              const key = `${si}-${ii}`;
              return (
                <li key={key}>
                  <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3">
                    <input
                      type="checkbox"
                      checked={!!done[key]}
                      onChange={(e) => setDone((d) => ({ ...d, [key]: e.target.checked }))}
                      aria-label={`${section.heading} item ${ii + 1}`}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--accent)]"
                    />
                    <span className={`text-sm ${done[key] ? "text-[var(--dim)] line-through" : "text-[var(--text)]"}`}>{item}</span>
                  </label>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flags?.map((flag) => (
        <p key={flag.slice(0, 40)} className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {flag.startsWith("⚠") ? flag : `⚠ ${flag}`}
        </p>
      ))}
      {entry.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">{renderLinks(entry.links)}</div>
      ) : null}
      <CardTools
        cardRef={{
          section: "switchbranches",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------------ Care & Crisis ---------------------------- */

function CareView({ go }: { go: (v: View) => void }) {
  return (
    <div>
      {/* Pinned crisis strip — the pack's design requirement: unmissable,
          visible before any scrolling, with tappable call / text / chat. */}
      <section
        aria-label="Veterans Crisis Line — help right now"
        className="mb-5 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-4"
      >
        <p className="font-display text-xl font-bold text-[var(--text)]">Veterans Crisis Line</p>
        <p className="mt-1 text-base text-[var(--text)]">
          Free, confidential, 24/7 — for Veterans and service members in crisis, and for the people who support them.
          You do not need to be enrolled in VA benefits or VA health care to use it.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <a
            href="tel:988"
            aria-label="Call the Veterans Crisis Line — dial 988, then press 1"
            className="rounded-[var(--radius)] bg-[var(--red)] px-3 py-3 text-center font-display text-base font-bold text-white"
          >
            Call 988 — then Press 1
          </a>
          <a
            href="sms:838255"
            aria-label="Text the Veterans Crisis Line at 838255"
            className="rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--surface)] px-3 py-3 text-center font-display text-base font-bold text-[var(--text)]"
          >
            Text 838255
          </a>
          <a
            href="https://www.veteranscrisisline.net/get-help-now/chat/"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with the Veterans Crisis Line online (opens in new tab)"
            className="rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--surface)] px-3 py-3 text-center font-display text-base font-bold text-[var(--text)]"
          >
            Chat online ↗
          </a>
        </div>
        <p className="mt-2 text-sm text-[var(--text)]">
          TTY:{" "}
          <a href="tel:+18007994889" aria-label="Call the Veterans Crisis Line TTY line at 1-800-799-4889" className="font-bold underline">
            1-800-799-4889
          </a>
        </p>
      </section>

      <SectionHead
        title="Care & Crisis"
        sub="Free counseling at Vet Centers, enrolling in VA health care, crisis lines, housing help, and funeral & burial honors — each card in plain language with its official link."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{CARE_STANDING_NOTE}</p>
      </div>

      {CARE_GROUPS.map((group) => (
        <section key={group.title} aria-label={group.title} className="mb-8">
          <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
          {group.note ? (
            <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
              {group.note}
            </p>
          ) : null}
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <CareCard key={entry.name} entry={entry} go={go} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CareCard({ entry, go }: { entry: CareEntry; go: (v: View) => void }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: CareLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {l.label} ↗
        </a>
      ))}
    </>
  );
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-[var(--text)]">
              {b.title ? <span className="font-bold">{b.title}: </span> : null}
              {b.text}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.callout ? (
        <p className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-base font-bold text-[var(--text)]">
          {entry.callout}
        </p>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for / when: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.call || entry.links.length > 0 || entry.xref ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.call ? (
            <a
              href={entry.call.tel}
              aria-label={`${entry.name} — ${entry.call.label}`}
              className="rounded-[var(--radius)] bg-[var(--accent)] px-3 py-2 text-sm font-bold text-[var(--accent-text)]"
            >
              {entry.call.label}
            </a>
          ) : null}
          {renderLinks(entry.links)}
          {entry.xref ? (
            <button
              type="button"
              aria-label={entry.xref.label}
              onClick={() => go(entry.xref!.target)}
              className={linkCls}
            >
              {entry.xref.label}
            </button>
          ) : null}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "care",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ----------------------------- Find Anything ----------------------------- */

function FindView() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? FIND_GROUPS.map((group) => ({
        ...group,
        entries: group.entries.filter(
          (e) =>
            group.title.toLowerCase().includes(q) ||
            e.name.toLowerCase().includes(q) ||
            e.kind.toLowerCase().includes(q) ||
            e.summary.toLowerCase().includes(q) ||
            (e.who ?? "").toLowerCase().includes(q),
        ),
      })).filter((group) => group.entries.length > 0)
    : FIND_GROUPS;
  const matchCount = filtered.reduce((n, g) => n + g.entries.length, 0);

  return (
    <div>
      <SectionHead
        title="Find Anything"
        sub="The official locator directory: 27 finder tools in 8 categories — what each one finds, who it's for, and its official link. Dead, merged, and missing locators are flagged on their cards, not hidden."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{FIND_STANDING_NOTE}</p>
      </div>

      <div className="mb-6">
        <label htmlFor="find-search" className={labelCls}>Search the directory</label>
        <input
          id="find-search"
          aria-label="Search locators by name or purpose"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={inputCls}
          placeholder="Try “ID card”, “commissary”, “child care”, “doctor”…"
        />
        <p className="mt-1 text-sm text-[var(--dim)]" role="status">
          {q
            ? matchCount === 0
              ? `No locators match “${query}”.`
              : `${matchCount} of ${FIND_TOTAL} locators match “${query}”.`
            : `Showing all ${FIND_TOTAL} locators.`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-base text-[var(--dim)]">
          Nothing in the directory matches that search. Try a broader word — an office (“legal”, “finance”), a place
          type (“installation”, “clinic”), or a task (“move”, “passport”).
        </p>
      ) : (
        filtered.map((group) => (
          <section key={group.title} aria-label={group.title} className="mb-8">
            <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
            {group.note ? (
              <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
                {group.note}
              </p>
            ) : null}
            <div className="space-y-3">
              {group.entries.map((entry) => (
                <FindCard key={entry.name} entry={entry} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

function FindCard({ entry }: { entry: FindEntry }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const renderLinks = (links: FindLink[]) => (
    <>
      {links.map((l) => (
        <a
          key={`${l.label}-${l.url}`}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
          className={linkCls}
        >
          {entry.routeNote ? `Route: ${l.label} ↗` : `${l.label} ↗`}
        </a>
      ))}
    </>
  );
  return (
    <article
      className={`rounded-[var(--radius)] border bg-[var(--surface)] p-4 ${
        entry.routeNote ? "border-2 border-[var(--amber)]" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        <Badge>{entry.kind}</Badge>
        {entry.badge ? <Badge tone={entry.routeNote ? "amber" : "red"}>{entry.badge}</Badge> : null}
      </div>
      {entry.routeNote ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          Route note — no national locator exists for this. The working route is through MilitaryINSTALLATIONS,
          below; there is no official directory link to give you.
        </p>
      ) : null}
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.details?.map((d) => (
        <p key={d.slice(0, 32)} className="mt-2 text-sm text-[var(--text)]">
          {d}
        </p>
      ))}
      {entry.callout ? (
        <p className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-base font-bold text-[var(--text)]">
          {entry.callout}
        </p>
      ) : null}
      {entry.who ? (
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Who it&apos;s for: </span>
          {entry.who}
        </p>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 ? <div className="mt-3 flex flex-wrap gap-2">{renderLinks(entry.links)}</div> : null}
      <CardTools
        cardRef={{
          section: "find",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------- State Benefits Finder ------------------------ */

function StatesView({
  profile,
  focusName,
  focusNonce,
  onFocusHandled,
}: {
  profile: Profile | null;
  focusName?: string | null;
  focusNonce?: number;
  onFocusHandled?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<StateEntry | null>(null);
  // The member's home state from their profile ("" / unset → null, and no
  // HOME marker or shortcut renders). Set only from the profile form —
  // never inferred from branch, job, or location.
  const homeName = profileHomeState(profile);
  const pickByName = (name: string) => {
    const entry = STATE_ENTRIES.find((s) => s.state === name);
    if (entry) setSelected(entry);
  };
  // Deep link from Home's "Your state" card: open that state's card.
  useEffect(() => {
    if (!focusName) return;
    pickByName(focusName);
    onFocusHandled?.();
    // Re-fires when the same state is picked again via the nonce.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusName, focusNonce]);
  const q = query.trim().toLowerCase();
  const matches = q
    ? STATE_ENTRIES.filter(
        (s) => s.state.toLowerCase().includes(q) || s.agency.toLowerCase().includes(q),
      )
    : STATE_ENTRIES;

  return (
    <div>
      <SectionHead
        title="State Benefits Finder"
        sub="State-level veteran benefits, state by state — each card gives the official veterans affairs agency, its official website, and the headline benefits drawn only from that state's official pages."
      />

      {homeName && selected?.state !== homeName ? (
        <button
          type="button"
          aria-label={`Your state: open ${homeName} benefits`}
          onClick={() => pickByName(homeName)}
          className="mb-6 block w-full rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4 text-left"
        >
          <span className="flex flex-wrap items-center gap-2">
            <Badge tone="amber">YOUR STATE</Badge>
            <span className="font-display text-lg font-bold text-[var(--text)]">{homeName}</span>
          </span>
          <span className="mt-1 block text-sm text-[var(--dim)]">
            Your home state, from your profile — its veterans agency and headline benefits.
          </span>
          <span className="mt-2 block text-sm font-bold text-[var(--accent)]">Open {homeName} benefits →</span>
        </button>
      ) : null}

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{STATES_STANDING_NOTE}</p>
      </div>

      <article className="mb-6 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
        <p className="font-display text-sm font-bold tracking-widest text-[var(--dim)]">START HERE — NATIONAL DIRECTORY</p>
        <h3 className="font-display mt-1 text-lg font-bold text-[var(--text)]">{NASDVA.agency}</h3>
        <p className="mt-1 text-base text-[var(--text)]">{NASDVA.text}</p>
        <div className="mt-3">
          <a
            href={NASDVA.site}
            target="_blank"
            rel="noreferrer"
            aria-label="NASDVA official site (opens in new tab)"
            className="inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
          >
            NASDVA — nasdva.us ↗
          </a>
        </div>
        <CardTools
          cardRef={{
            section: "states",
            itemKey: "NASDVA",
            title: NASDVA.agency,
            summary: NASDVA.text,
            source: NASDVA.agency,
          }}
        />
      </article>

      <UsMapPicker
        selectedName={selected?.state ?? null}
        homeName={homeName}
        onPick={pickByName}
      />

      {selected ? (
        <div>
          <button
            type="button"
            aria-label="Back to the state list"
            onClick={() => setSelected(null)}
            className={`${btnGhost} mb-4`}
          >
            ← All states
          </button>
          <StateCard entry={selected} />
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label htmlFor="state-search" className={labelCls}>Find your state</label>
            <input
              id="state-search"
              aria-label="Search states"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={inputCls}
              placeholder="Search by state or agency name…"
            />
          </div>
          {matches.length === 0 ? (
            <p className="text-base text-[var(--dim)]">
              No state matches “{query}”. The finder covers the 50 states and the District of Columbia.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {matches.map((s) => {
                const isHome = homeName !== null && s.state === homeName;
                return (
                  <button
                    key={s.state}
                    type="button"
                    aria-label={`Open ${s.state} benefits`}
                    onClick={() => setSelected(s)}
                    className={`rounded-[var(--radius)] px-3 py-3 text-left font-display text-base font-bold text-[var(--text)] ${
                      isHome
                        ? "border-2 border-[var(--amber)] bg-[var(--amber-bg)]"
                        : "border border-[var(--border)] bg-[var(--surface)]"
                    }`}
                  >
                    {s.state}
                    {isHome ? (
                      <span className="ml-2 rounded-full bg-[var(--amber)] px-2 py-0.5 text-xs font-bold text-white">
                        HOME
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StateCard({ entry }: { entry: StateEntry }) {
  const flagCls = "mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]";
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <h3 className="font-display text-2xl font-bold text-[var(--text)]">{entry.state}</h3>
      <p className="mt-1 text-base font-semibold text-[var(--text)]">{entry.agency}</p>
      {entry.agencyFlag ? (
        <p className={flagCls}>{entry.agencyFlag.startsWith("⚠") ? entry.agencyFlag : `⚠ ${entry.agencyFlag}`}</p>
      ) : null}
      <div className="mt-3">
        <a
          href={entry.site}
          target="_blank"
          rel="noreferrer"
          aria-label={`${entry.state} — official veterans affairs site (opens in new tab)`}
          className="inline-block rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
        >
          Official site ↗
        </a>
      </div>
      <h4 className="font-display mt-4 text-base font-bold text-[var(--text)]">Headline benefits</h4>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        {entry.bullets.map((b, i) => (
          <li key={i} className="text-base text-[var(--text)]">
            {b.text}
            {b.flag ? (
              <span className="mt-1 block rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
                {b.flag.startsWith("⚠") ? b.flag : `⚠ ${b.flag}`}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      {entry.entryFlag ? (
        <p className={flagCls}>{entry.entryFlag.startsWith("⚠") ? entry.entryFlag : `⚠ ${entry.entryFlag}`}</p>
      ) : null}
      <CardTools
        cardRef={{
          section: "states",
          itemKey: entry.state,
          title: `${entry.state} veterans benefits`,
          summary: entry.bullets[0]?.text ?? entry.agency,
          source: entry.agency,
        }}
      />
    </article>
  );
}

/* ---------------------------- Close Combat ---------------------------- */

function BeltSection({ belt }: { belt: CombatBelt }) {
  return (
    <section aria-label={belt.belt} className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">{belt.belt}</h3>
        <span className="rounded-full bg-[var(--surface2)] px-3 py-1 text-sm font-bold text-[var(--text)]">{belt.hours}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--text)]">{belt.focus}</p>
      <p className="mt-1 text-sm text-[var(--dim)]">
        <span className="font-bold text-[var(--text)]">What it signifies:</span> {belt.signifies}
      </p>
      {belt.groups.map((g) => (
        <div key={g.family} className="mt-4">
          <h4 className="font-display text-base font-bold text-[var(--text)]">{g.family}</h4>
          {g.note ? (
            <p className="mt-2 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-sm text-[var(--text)]">
              ⚠ {g.note}
            </p>
          ) : null}
          <div className="mt-2 grid gap-2">
            {g.techniques.map((t) => (
              <div key={t.name} className="flex gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                <TechniqueDiagram category={t.category} />
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-[var(--text)]">{t.name}</p>
                  <p className="text-xs font-bold tracking-wide text-[var(--accent)] uppercase">
                    {t.category} · {belt.belt}
                  </p>
                  <p className="mt-1 text-sm text-[var(--dim)]">{t.purpose}</p>
                  <p className="mt-1 text-xs text-[var(--dim)] italic">Diagram: stylized category illustration only.</p>
                  <CardTools
                    compact
                    cardRef={{
                      section: "combat",
                      itemKey: `${belt.belt} — ${t.name}`,
                      title: `${t.name} (${belt.belt})`,
                      summary: t.purpose,
                      source: "MCRP 3-02B, Marine Corps Martial Arts Program",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <CardTools
        cardRef={{
          section: "combat",
          itemKey: belt.belt,
          title: `${belt.belt} — MCMAP`,
          summary: belt.focus,
          source: "MCRP 3-02B, Marine Corps Martial Arts Program",
        }}
      />
    </section>
  );
}

function CombatView() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-[var(--text)]">Close Combat</h2>
      <p className="mt-1 text-base text-[var(--dim)]">
        The services' close-combat programs as published curricula: the MCMAP technique catalog belt by belt,
        Army Combatives by course level, and the other branches at the depth their public programs support.
      </p>

      <section aria-label="Training safety" className="mt-4 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-5">
        <h3 className="font-display text-lg font-bold text-[var(--red)]">Train smart — this is a catalog, not a course</h3>
        {SAFETY_FRAMING.map((line) => (
          <p key={line.slice(0, 40)} className="mt-2 text-sm text-[var(--text)]">{line}</p>
        ))}
      </section>

      <section aria-label="MCMAP program overview" className="mt-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">USMC — Marine Corps Martial Arts Program (MCMAP)</h3>
        <p className="font-display mt-1 text-lg font-bold text-[var(--accent)]">“{MCMAP_FRAMING.motto}”</p>
        <p className="mt-2 text-sm text-[var(--text)]">{MCMAP_FRAMING.purpose}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {MCMAP_FRAMING.disciplines.map((d) => (
            <div key={d.name} className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
              <p className="font-display text-sm font-bold text-[var(--text)]">{d.name}</p>
              <p className="mt-1 text-sm text-[var(--dim)]">{d.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-[var(--dim)]">{MCMAP_FRAMING.tacticalConcepts}</p>
        <div className="mt-3 grid gap-3">
          {MCMAP_FRAMING.instructors.map((i) => (
            <div key={i.name} className="rounded-[var(--radius)] border border-[var(--border)] p-3">
              <p className="font-display text-sm font-bold text-[var(--text)]">{i.name}</p>
              <p className="mt-1 text-sm text-[var(--dim)]">{i.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-[var(--dim)]">{MCMAP_FRAMING.sustainment}</p>
        <p className="mt-2 text-sm text-[var(--dim)]">
          <span className="font-bold text-[var(--text)]">Black belt degrees 2–6:</span> {MCMAP_FRAMING.blackDegrees}
        </p>
        <p className="mt-2 text-sm text-[var(--dim)]">{MCMAP_COUNTS}</p>
        <CardTools
          cardRef={{
            section: "combat",
            itemKey: "MCMAP program overview",
            title: "MCMAP — Marine Corps Martial Arts Program",
            summary: MCMAP_FRAMING.purpose,
            source: "MCRP 3-02B, Marine Corps Martial Arts Program",
          }}
        />
      </section>

      {MCMAP_BELTS.map((b) => (
        <BeltSection key={b.belt} belt={b} />
      ))}

      <section aria-label="Army Combatives" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">{MACP.name}</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">{MACP.source}</p>
        <p className="mt-2 text-sm text-[var(--text)]">{MACP.purpose}</p>
        <div className="mt-3 grid gap-3">
          {MACP.levels.map((l) => (
            <div key={l.name} className="rounded-[var(--radius)] border border-[var(--border)] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-base font-bold text-[var(--text)]">{l.name}</p>
                <span className="rounded-full bg-[var(--surface2)] px-3 py-1 text-sm font-bold text-[var(--text)]">{l.length}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--text)]">{l.purpose}</p>
              <p className="mt-1 text-sm text-[var(--dim)]">
                <span className="font-bold text-[var(--text)]">What it covers:</span> {l.covers}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-sm text-[var(--text)]">
          ⚠ {MACP.note}
        </p>
        <CardTools
          cardRef={{
            section: "combat",
            itemKey: MACP.name,
            title: MACP.name,
            summary: MACP.purpose,
            source: "TC 3-25.150, Combatives",
          }}
        />
      </section>

      <section aria-label="Other branch programs" className="mt-4 grid gap-3">
        {OTHER_BRANCH_PROGRAMS.map((p) => (
          <div key={p.branch} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="font-display text-lg font-bold text-[var(--text)]">{p.branch}</h3>
            <p className="mt-1 text-sm text-[var(--text)]">{p.text}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--dim)]">
              {p.points.map((pt) => (
                <li key={pt.slice(0, 40)}>{pt}</li>
              ))}
            </ul>
            <p className="mt-3 rounded-[var(--radius)] border border-[var(--amber)] bg-[var(--amber-bg)] p-3 text-sm text-[var(--text)]">
              ⚠ {p.flag}
            </p>
            <CardTools
              cardRef={{
                section: "combat",
                itemKey: p.branch,
                title: p.branch,
                summary: p.text,
                source: null,
              }}
            />
          </div>
        ))}
      </section>

      <p className="mt-4 text-xs text-[var(--dim)]">{COMBAT_SOURCES}</p>
    </div>
  );
}

function FieldcraftView() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [distance, setDistance] = useState(6);
  const [pace, setPace] = useState(15);
  const [gain, setGain] = useState(800);
  const [hot, setHot] = useState(false);
  const [openGuide, setOpenGuide] = useState<string | null>(GUIDES[0]?.id ?? null);

  const totalWeight = PACK_ITEMS.reduce((sum, item, i) => sum + (checked.has(i) ? item.weightLb : 0), 0);
  const moveHours = distance * (pace / 60);
  const climbHours = (gain / 1000) * 0.5;
  const totalHours = moveHours + climbHours;
  const waterLiters = totalHours * (hot ? 0.75 : 0.5);
  const fmtTime = (h: number) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return hh > 0 ? `${hh}h ${mm}m` : `${mm}m`;
  };

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const categories = [...new Set(PACK_ITEMS.map((p) => p.category))];

  return (
    <div>
      <SectionHead title="Fieldcraft" sub="Interactive tools, not articles: pack it, weigh it, plan the movement." />

      <section aria-label="Ruck packing checklist" className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-[var(--text)]">Ruck / Packing Checklist</h3>
          <p className="font-display text-2xl font-bold text-[var(--accent)]" role="status" aria-label="Estimated pack weight">
            {totalWeight.toFixed(1)} lb
          </p>
        </div>
        <p className="mt-1 text-sm text-[var(--dim)]">
          Check items as you pack — the estimated weight updates live. Weights are planning estimates for common kit, not
          a scale. A common field guideline keeps rucks at or under about a third of your body weight.
        </p>
        {categories.map((cat) => (
          <div key={cat} className="mt-4">
            <p className="text-sm font-bold tracking-wide text-[var(--dim)]">{cat.toUpperCase()}</p>
            <div className="mt-1 space-y-1">
              {PACK_ITEMS.map((item, i) =>
                item.category === cat ? (
                  <label key={item.name} className="flex cursor-pointer items-center justify-between gap-3 rounded bg-[var(--surface2)] px-3 py-2">
                    <span className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        aria-label={`Pack ${item.name}`}
                        checked={checked.has(i)}
                        onChange={() => toggle(i)}
                        className="h-5 w-5 accent-[var(--accent)]"
                      />
                      <span className="text-base text-[var(--text)]">{item.name}</span>
                    </span>
                    <span className="text-sm font-semibold text-[var(--dim)]">{item.weightLb > 0 ? `${item.weightLb} lb` : "worn"}</span>
                  </label>
                ) : null,
              )}
            </div>
          </div>
        ))}
        <button type="button" aria-label="Reset packing checklist" onClick={() => setChecked(new Set())} className={`${btnGhost} mt-4`}>
          Reset checklist
        </button>
      </section>

      <section aria-label="Hike and ruck planner" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Hike / Ruck Planner</h3>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div>
            <label htmlFor="rp-distance" className={labelCls}>Distance (mi)</label>
            <input id="rp-distance" aria-label="Distance in miles" type="number" min={0.5} step={0.5} value={distance} onChange={(e) => setDistance(Number(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rp-pace" className={labelCls}>Pace (min/mi)</label>
            <input id="rp-pace" aria-label="Pace in minutes per mile" type="number" min={8} step={1} value={pace} onChange={(e) => setPace(Number(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="rp-gain" className={labelCls}>Climb (ft)</label>
            <input id="rp-gain" aria-label="Elevation gain in feet" type="number" min={0} step={100} value={gain} onChange={(e) => setGain(Number(e.target.value) || 0)} className={inputCls} />
          </div>
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-3">
          <input type="checkbox" aria-label="Hot weather" checked={hot} onChange={(e) => setHot(e.target.checked)} className="h-5 w-5 accent-[var(--accent)]" />
          <span className="text-base text-[var(--text)]">Hot weather (raises water needs)</span>
        </label>
        <div className="mt-4 grid grid-cols-2 gap-3" role="status">
          <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4">
            <p className="text-sm font-bold text-[var(--dim)]">ESTIMATED TIME</p>
            <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{fmtTime(totalHours)}</p>
            <p className="text-sm text-[var(--dim)]">Pace time {fmtTime(moveHours)} + climb {fmtTime(climbHours)} (Naismith-style allowance)</p>
          </div>
          <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4">
            <p className="text-sm font-bold text-[var(--dim)]">WATER TO CARRY / PLAN</p>
            <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{waterLiters.toFixed(1)} L</p>
            <p className="text-sm text-[var(--dim)]">About {(waterLiters * 1.06).toFixed(1)} quarts at {hot ? "0.75" : "0.5"} L per hour of movement</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-[var(--dim)]">Estimates only — terrain, load, altitude, and weather change everything. Plan a reserve, and turn back on your water, not your pride.</p>
      </section>

      <section aria-label="Field guides" className="mt-4">
        <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Field Guides</h3>
        <div className="space-y-2">
          {GUIDES.map((g) => (
            <div key={g.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
              <button
                type="button"
                aria-label={`${openGuide === g.id ? "Close" : "Open"} guide ${g.title}`}
                aria-expanded={openGuide === g.id}
                onClick={() => setOpenGuide(openGuide === g.id ? null : g.id)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-display text-lg font-bold text-[var(--text)]">{g.title}</span>
                <span className="text-sm text-[var(--dim)]">{g.minutes} min</span>
              </button>
              {openGuide === g.id ? (
                <div className="border-t border-[var(--border)] p-4">
                  <ul className="list-disc space-y-2 pl-5 text-base text-[var(--text)]">
                    {g.body.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <ContributionForm targetType="guide" targetId={g.id} targetLabel={g.title} />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* -------------------------------- Fitness -------------------------------- */

const EQUIPMENT_OPTIONS = [
  { value: "gym", label: "Full gym" },
  { value: "barracks", label: "Barracks / limited kit" },
  { value: "field", label: "Field / deployed" },
  { value: "none", label: "No equipment — bodyweight" },
];

function PlanDisplay({ result }: { result: PlanResult }) {
  const queryClient = useQueryClient();
  const [logTitle, setLogTitle] = useState("");
  const [logDetail, setLogDetail] = useState("");
  const addLog = useMutation({
    mutationFn: () => api.addWorkoutLog({ dayLabel: "", title: logTitle, detail: logDetail }),
    onSuccess: () => {
      setLogTitle("");
      setLogDetail("");
      void queryClient.invalidateQueries({ queryKey: ["workoutLogs"] });
    },
  });
  return (
    <div className="mt-4">
      {result.sanityFlag ? (
        <p className="rounded-[var(--radius)] bg-[var(--amber-bg)] p-4 text-base font-semibold text-[var(--amber)]" role="alert">
          Goal-weight check: {result.sanityFlag}
        </p>
      ) : null}
      {result.testEvents.length > 0 ? (
        <p className="mt-2 text-base text-[var(--text)]">
          <strong>Test events this plan trains:</strong> {result.testEvents.join(" · ")}
        </p>
      ) : null}
      {result.caloriesLow != null ? (
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4">
            <p className="text-sm font-bold text-[var(--dim)]">DAILY CALORIES (ESTIMATE)</p>
            <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{result.caloriesLow}–{result.caloriesHigh}</p>
          </div>
          <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-4">
            <p className="text-sm font-bold text-[var(--dim)]">DAILY PROTEIN (ESTIMATE)</p>
            <p className="font-display mt-1 text-2xl font-bold text-[var(--text)]">{result.proteinLow}–{result.proteinHigh} g</p>
          </div>
        </div>
      ) : null}
      <div className="mt-3 space-y-2">
        {result.days.map((d) => (
          <article key={d.day} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="font-display text-lg font-bold text-[var(--text)]">{d.day} — {d.focus}</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
              {d.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <form
        className="mt-4 space-y-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (logTitle.trim()) addLog.mutate();
        }}
      >
        <p className="font-display text-base font-bold text-[var(--text)]">Log a workout from this plan</p>
        <div>
          <label htmlFor="wl-title" className={labelCls}>Workout</label>
          <input id="wl-title" aria-label="Workout title" value={logTitle} onChange={(e) => setLogTitle(e.target.value)} className={inputCls} placeholder="e.g., Day 1 — pull-up strength" />
        </div>
        <div>
          <label htmlFor="wl-detail" className={labelCls}>Notes / numbers</label>
          <input id="wl-detail" aria-label="Workout notes" value={logDetail} onChange={(e) => setLogDetail(e.target.value)} className={inputCls} placeholder="Sets, reps, times — what you actually did" />
        </div>
        <button type="submit" aria-label="Add workout log entry" disabled={addLog.isPending || !logTitle.trim()} className={btnPrimary}>
          Log workout
        </button>
        {addLog.isSuccess ? <p className="text-sm font-semibold text-[var(--accent)]">Logged. It is in your workout history below.</p> : null}
      </form>
    </div>
  );
}

/* ------------------------------ War Stories ------------------------------ */

function storyLinks(links: StoryLink[], ownerName: string) {
  return links.map((l) => (
    <a
      key={l.url}
      href={l.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${ownerName} — ${l.label} (opens in new tab)`}
      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
    >
      {l.label} ↗
    </a>
  ));
}

function DocumentedStoryCard({ story }: { story: DocumentedStory }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{story.title}</h4>
        <Badge tone="official">DOCUMENTED</Badge>
        {story.tag ? <Badge>{story.tag}</Badge> : null}
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--dim)]">
        {story.person} · {story.branch} · {story.era}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">{story.summary}</p>
      <p className="mt-2 text-sm text-[var(--text)]">
        <span className="font-bold">Why it matters: </span>
        {story.why}
      </p>
      {story.vhp ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">{VHP_LABEL}</p>
      ) : null}
      {story.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {story.flag}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">{storyLinks(story.links, story.title)}</div>
      <CardTools
        cardRef={{
          section: "warstories",
          itemKey: story.title,
          title: story.title,
          summary: story.summary,
          source: sourceFromLinks(story.links),
        }}
      />
    </article>
  );
}

function MohRouteCard({ route }: { route: MohRoute }) {
  return (
    <article className="rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{route.name}</h4>
        <Badge tone="official">AUTHORITATIVE DATABASE</Badge>
      </div>
      <p className="mt-2 text-base text-[var(--text)]">{route.summary}</p>
      {route.note ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {route.note}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">{storyLinks(route.links, route.name)}</div>
      <CardTools
        cardRef={{
          section: "warstories",
          itemKey: route.name,
          title: route.name,
          summary: route.summary,
          source: sourceFromLinks(route.links),
        }}
      />
    </article>
  );
}

function MohProfileCard({ profile }: { profile: MohProfile }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{profile.name}</h4>
        <Badge tone="official">OFFICIAL CITATION</Badge>
        {profile.living ? <Badge tone="amber">LIVING RECIPIENT</Badge> : null}
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--dim)]">
        {profile.rank} · {profile.branch} · {profile.conflict}
      </p>
      <p className="mt-1 text-sm text-[var(--dim)]">{profile.placeDate}</p>
      <p className="mt-2 text-base text-[var(--text)]">{profile.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">{storyLinks(profile.links, profile.name)}</div>
      <CardTools
        cardRef={{
          section: "warstories",
          itemKey: `MOH: ${profile.name}`,
          title: `Medal of Honor — ${profile.name}`,
          summary: profile.summary,
          source: sourceFromLinks(profile.links),
        }}
      />
    </article>
  );
}

function DecoratedCard({ profile }: { profile: DecoratedProfile }) {
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{profile.name}</h4>
        <Badge>NOTABLE RECORD — UNRANKED</Badge>
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--dim)]">
        {profile.branch} · {profile.era}
      </p>
      <p className="mt-2 text-base text-[var(--text)]">{profile.decorations}</p>
      {profile.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">⚠ {profile.flag}</p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-2">{storyLinks(profile.links, profile.name)}</div>
      <CardTools
        cardRef={{
          section: "warstories",
          itemKey: `Decorated: ${profile.name}`,
          title: `Most Decorated — ${profile.name}`,
          summary: profile.decorations,
          source: sourceFromLinks(profile.links),
        }}
      />
    </article>
  );
}

function MemberStoryCard({ story }: { story: MemberStory }) {
  const queryClient = useQueryClient();
  const [revealed, setRevealed] = useState(false);
  const [reported, setReported] = useState(false);
  const report = useMutation({
    mutationFn: () => api.reportWarStory({ id: story.id }),
    onSuccess: () => {
      setReported(true);
      void queryClient.invalidateQueries({ queryKey: ["warStories"] });
    },
  });
  const isLoss = story.category === "Loss & Remembrance";
  const byline =
    story.displayChoice === "anonymous"
      ? "Anonymous"
      : story.displayName || DISPLAY_CHOICES.find((d) => d.value === story.displayChoice)?.label || "Member";
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{story.title}</h4>
        <Badge tone="amber">MEMBER STORY</Badge>
        <Badge>{story.category}</Badge>
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--dim)]">
        By {byline} · {story.branch} · {story.era}
        {story.eraDetail ? ` — ${story.eraDetail}` : ""}
      </p>
      <p className="mt-1 text-xs text-[var(--dim)]">
        A personal account — this member&apos;s recollection, presented as such, not independently fact-checked history.
      </p>
      {isLoss && !revealed ? (
        <div className="mt-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-3">
          <p className="text-sm font-bold text-[var(--amber)]">CONTENT WARNING — LOSS &amp; REMEMBRANCE</p>
          <p className="mt-1 text-sm text-[var(--text)]">
            This story is about losing someone. Read it when you&apos;re ready — it will still be here.
          </p>
          <button
            type="button"
            aria-label={`Read member story ${story.title}`}
            onClick={() => setRevealed(true)}
            className="mt-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--text)]"
          >
            Read story
          </button>
        </div>
      ) : (
        <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{story.body}</p>
      )}
      <div className="mt-3">
        {reported ? (
          <p className="text-sm font-semibold text-[var(--amber)]">
            Reported — this story is back in the review queue for a moderator decision.
          </p>
        ) : (
          <button
            type="button"
            aria-label={`Report member story ${story.title}`}
            disabled={report.isPending}
            onClick={() => report.mutate()}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--dim)] disabled:opacity-50"
          >
            Report this story
          </button>
        )}
        {report.isError ? <p className="mt-1 text-sm text-[var(--red)]">Could not send the report. Try again.</p> : null}
      </div>
    </article>
  );
}

function ShareStoryForm({ profile }: { profile: Profile }) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [branch, setBranch] = useState<string>(
    (STORY_BRANCHES as readonly string[]).includes(profile.branch) ? profile.branch : "Army",
  );
  const [era, setEra] = useState<string>("Iraq");
  const [eraDetail, setEraDetail] = useState("");
  const [category, setCategory] = useState<string>("Deployment");
  const [displayChoice, setDisplayChoice] = useState<string>("rank_last");
  const [displayName, setDisplayName] = useState("");
  const [body, setBody] = useState("");
  const [ack, setAck] = useState(false);
  const submit = useMutation({
    mutationFn: () =>
      api.submitWarStory({
        title,
        branch,
        era,
        eraDetail,
        category: category as MemberStory["category"],
        displayChoice: displayChoice as MemberStory["displayChoice"],
        displayName,
        body,
      }),
    onSuccess: () => {
      setTitle("");
      setEraDetail("");
      setDisplayName("");
      setBody("");
      setAck(false);
      setOpen(false);
      void queryClient.invalidateQueries({ queryKey: ["warStories"] });
    },
  });

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Share your war story"
        onClick={() => setOpen(true)}
        className={`${btnPrimary} w-full`}
      >
        Share your story — it goes to the review queue first
      </button>
    );
  }

  const nameLabel =
    displayChoice === "full"
      ? "Your full name, as it should appear"
      : displayChoice === "rank_last"
        ? "Rank + last name, as it should appear (e.g., Sgt Smith)"
        : "Your callsign, as it should appear";

  return (
    <form
      className="space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        submit.mutate();
      }}
    >
      <p className="font-display text-base font-bold text-[var(--text)]">Share your story</p>
      <p className="text-sm text-[var(--dim)]">
        Members only. Your story goes to <strong>PENDING</strong> review and is verified before it publishes — the same
        flow as app contributions. Nothing appears publicly on submission.
      </p>
      <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
        <p className="text-sm font-bold text-[var(--text)]">The rules — read before you write</p>
        <ul className="mt-2 space-y-2">
          {STORY_RULES.map((r) => (
            <li key={r.title} className="text-sm text-[var(--text)]">
              <span className="font-bold">{r.title}. </span>
              {r.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="ws-title" className={labelCls}>Title</label>
        <input id="ws-title" aria-label="Story title" value={title} onChange={(e) => setTitle(e.target.value)} required minLength={3} maxLength={140} className={inputCls} placeholder="A plain title — no unit designators for current or recent units" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="ws-branch" className={labelCls}>Branch</label>
          <select id="ws-branch" aria-label="Story branch" value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls}>
            {STORY_BRANCHES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ws-era" className={labelCls}>Era / Conflict</label>
          <select id="ws-era" aria-label="Story era or conflict" value={era} onChange={(e) => setEra(e.target.value)} className={inputCls}>
            {STORY_ERAS.map((er) => (
              <option key={er} value={er}>{er}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="ws-era-detail" className={labelCls}>Era detail (optional)</label>
        <input id="ws-era-detail" aria-label="Story era detail" value={eraDetail} onChange={(e) => setEraDetail(e.target.value)} maxLength={120} className={inputCls} placeholder="e.g., 2004–2005 — no operation dates for current or recent service" />
      </div>
      <div>
        <label htmlFor="ws-category" className={labelCls}>Category (exactly one)</label>
        <select id="ws-category" aria-label="Story category" value={category} onChange={(e) => setCategory(e.target.value)} className={inputCls}>
          {STORY_CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {category === "Loss & Remembrance" ? (
          <p className="mt-1 text-sm font-semibold text-[var(--amber)]">
            Loss &amp; Remembrance stories publish with a visible content-warning label — readers see the warning before
            your story text.
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="ws-display-choice" className={labelCls}>How your name appears (chosen now; changeable only through review)</label>
        <select id="ws-display-choice" aria-label="Display name choice" value={displayChoice} onChange={(e) => setDisplayChoice(e.target.value)} className={inputCls}>
          {DISPLAY_CHOICES.map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
      </div>
      {displayChoice !== "anonymous" ? (
        <div>
          <label htmlFor="ws-display-name" className={labelCls}>{nameLabel}</label>
          <input id="ws-display-name" aria-label="Display name as it should appear" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required maxLength={80} className={inputCls} placeholder={displayChoice === "callsign" ? "e.g., Reaper" : "As it should appear on your story"} />
        </div>
      ) : (
        <p className="text-sm text-[var(--dim)]">Anonymous: no name is attached to your story, and review never overrides that choice.</p>
      )}
      <div>
        <label htmlFor="ws-body" className={labelCls}>Your story</label>
        <textarea id="ws-body" aria-label="Your story text" value={body} onChange={(e) => setBody(e.target.value)} required minLength={20} maxLength={12000} rows={8} className={inputCls} placeholder="Plain text, in your own words. No external links." />
      </div>
      <p className="text-sm text-[var(--dim)]">
        Photos are a later phase — photo upload is not part of this version. When photos ship they will go through the
        same PENDING review, with location data stripped before publication.
      </p>
      <label className="flex items-start gap-2 text-sm text-[var(--text)]">
        <input type="checkbox" aria-label="Acknowledge the war story rules" checked={ack} onChange={(e) => setAck(e.target.checked)} className="mt-1 h-4 w-4 shrink-0" />
        <span>{STORY_ACK}</span>
      </label>
      {submit.isError ? <p className="text-sm text-[var(--red)]">Could not submit your story. Try again.</p> : null}
      <div className="flex gap-2">
        <button type="submit" aria-label="Submit story for review" disabled={submit.isPending || !ack} className={btnPrimary}>
          {submit.isPending ? "Submitting…" : "Submit — goes to PENDING review"}
        </button>
        <button type="button" aria-label="Cancel sharing your story" onClick={() => setOpen(false)} className={btnGhost}>
          Cancel
        </button>
      </div>
    </form>
  );
}

/* --------------------------- Traditions & Lore --------------------------- */

/** Badge tone per honesty label: DOCUMENTED reads as the verified
 * stamp, TRADITION as a plain custom tag, LEGEND as an amber caution,
 * DISPUTED in red — the label is the point of this section. */
const TRADITION_LABEL_TONES: Record<TraditionLabel, "official" | "amber" | "red" | "plain"> = {
  DOCUMENTED: "official",
  TRADITION: "plain",
  LEGEND: "amber",
  DISPUTED: "red",
};

function TraditionsView() {
  return (
    <div>
      <SectionHead
        title="Traditions & Lore"
        sub="The culture layer — why the flag folds 13 times, what a blood stripe really is, coin-check rules, branch birthdays and songs. Every card carries its honesty label where the research assigns one, its correction where there is one, and its official source."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{TRADITIONS_LABELS_NOTE}</p>
        <p className="mt-2 text-sm text-[var(--text)]">{TRADITIONS_STANDING_RULE}</p>
      </div>

      {TRADITION_GROUPS.map((group) => {
        let lastBranch: string | undefined;
        return (
          <section key={group.title} aria-label={group.title} className="mb-8">
            <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
            {group.note ? (
              <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
                {group.note}
              </p>
            ) : null}
            <div className="space-y-3">
              {group.entries.map((entry) => {
                const showBranch = entry.branch !== undefined && entry.branch !== lastBranch;
                lastBranch = entry.branch;
                return (
                  <div key={entry.name}>
                    {showBranch ? (
                      <h4 className="font-display mb-2 mt-5 text-base font-bold tracking-wide text-[var(--accent)]">
                        {entry.branch}
                      </h4>
                    ) : null}
                    <TraditionCard entry={entry} />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function TraditionCard({ entry }: { entry: TraditionItem }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        {entry.labels.map((l) => (
          <Badge key={l} tone={TRADITION_LABEL_TONES[l]}>
            {l}
          </Badge>
        ))}
      </div>
      {entry.labelNote ? (
        <p className="mt-1 text-sm font-semibold text-[var(--dim)]">{entry.labelNote}</p>
      ) : null}
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b) => (
            <li key={b} className="text-sm text-[var(--text)]">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className={linkCls}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      ) : null}
      {entry.sourceNote ? <p className="mt-2 text-sm text-[var(--dim)]">{entry.sourceNote}</p> : null}
      <CardTools
        cardRef={{
          section: "traditions",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

/* ------------------------------- Mail Call ------------------------------- */

/* --------------------------- My Service Timeline -------------------------- */

function TimelineView({
  onPrint,
}: {
  onPrint: (entries: TimelineEntry[]) => void;
}) {
  const queryClient = useQueryClient();
  const entriesQ = useQuery({ queryKey: ["timelineEntries"], queryFn: () => api.listTimelineEntries({}) });
  const entries = sortTimeline(entriesQ.data?.entries ?? []);
  const summary = timelineSummary(entries);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<TimelineEntry | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const invalidate = () => void queryClient.invalidateQueries({ queryKey: ["timelineEntries"] });
  const remove = useMutation({
    mutationFn: (id: number) => api.deleteTimelineEntry({ id }),
    onSuccess: () => {
      setConfirmDeleteId(null);
      invalidate();
    },
  });

  return (
    <div>
      <SectionHead
        title="My Service Timeline"
        sub="Your career, in your own entries — the day you joined, boot camp, units, deployments, promotions, and the day it ended. Oldest first."
      />

      <div className="mb-5 space-y-2 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        {TIMELINE_PRIVACY_LINES.map((line) => (
          <p key={line} className="text-sm font-semibold text-[var(--text)]">
            {line}
          </p>
        ))}
      </div>

      {entriesQ.isPending ? (
        <p className="text-base text-[var(--dim)]">Loading your timeline…</p>
      ) : entriesQ.isError ? (
        <p className="text-base text-[var(--red)]">Could not load your timeline. Pull to retry, or reopen the app.</p>
      ) : entries.length === 0 && !formOpen ? (
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
          <h3 className="font-display text-lg font-bold text-[var(--text)]">No entries yet</h3>
          <p className="mt-1 text-sm text-[var(--dim)]">
            Your timeline starts empty — nothing here is guessed or filled in for you. Add the moments that made
            your service, at whatever date precision you remember:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base text-[var(--text)]">
            {TIMELINE_STARTERS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Add your first timeline entry"
            onClick={() => setFormOpen(true)}
            className={`${btnPrimary} mt-4 w-full`}
          >
            Add your first entry
          </button>
        </div>
      ) : (
        <>
          <section
            aria-label="Timeline summary"
            className="mb-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
          >
            <p className="text-base font-semibold text-[var(--text)]">
              {summary.count} entr{summary.count === 1 ? "y" : "ies"}
              {summary.spanLabel ? ` · ${summary.spanLabel}` : ""}
            </p>
            {summary.deployments > 0 || summary.promotions > 0 ? (
              <p className="mt-1 text-sm text-[var(--dim)]">
                {[
                  summary.deployments > 0
                    ? `${summary.deployments} deployment${summary.deployments === 1 ? "" : "s"}`
                    : null,
                  summary.promotions > 0
                    ? `${summary.promotions} promotion${summary.promotions === 1 ? "" : "s"}`
                    : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {!formOpen && !editing ? (
                <button
                  type="button"
                  aria-label="Add a timeline entry"
                  onClick={() => setFormOpen(true)}
                  className={btnPrimary}
                >
                  Add an entry
                </button>
              ) : null}
              <button
                type="button"
                aria-label="Print my timeline"
                onClick={() => onPrint(entries)}
                className={btnGhost}
              >
                Print my timeline
              </button>
            </div>
          </section>

          {formOpen && !editing ? (
            <TimelineEntryForm
              onDone={() => {
                setFormOpen(false);
                invalidate();
              }}
              onCancel={() => setFormOpen(false)}
            />
          ) : null}

          <ol className="relative space-y-3 border-l-2 border-[var(--border)] pl-5">
            {entries.map((e) => (
              <li key={e.id} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[27px] top-4 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)]"
                />
                {editing?.id === e.id ? (
                  <TimelineEntryForm
                    entry={e}
                    onDone={() => {
                      setEditing(null);
                      invalidate();
                    }}
                    onCancel={() => setEditing(null)}
                  />
                ) : (
                  <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="official">{timelineTypeLabel(e.entryType)}</Badge>
                      <span className="text-sm font-bold text-[var(--text)]">{formatTimelineDate(e.entryDate)}</span>
                    </div>
                    <h3 className="font-display mt-2 text-lg font-bold leading-snug text-[var(--text)]">{e.title}</h3>
                    {e.unit || e.place ? (
                      <p className="mt-0.5 text-sm font-semibold text-[var(--dim)]">
                        {[e.unit, e.place].filter(Boolean).join(" · ")}
                      </p>
                    ) : null}
                    {e.note ? <p className="mt-1 text-base text-[var(--text)]">{e.note}</p> : null}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        aria-label={`Edit entry: ${e.title}`}
                        onClick={() => {
                          setFormOpen(false);
                          setEditing(e);
                        }}
                        className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--text)]"
                      >
                        Edit
                      </button>
                      {confirmDeleteId === e.id ? (
                        <>
                          <button
                            type="button"
                            aria-label={`Confirm delete entry: ${e.title}`}
                            disabled={remove.isPending}
                            onClick={() => remove.mutate(e.id)}
                            className="rounded-[var(--radius)] bg-[var(--red)] px-3 py-2 text-sm font-bold text-white disabled:opacity-50"
                          >
                            {remove.isPending ? "Deleting…" : "Confirm delete"}
                          </button>
                          <button
                            type="button"
                            aria-label="Cancel delete"
                            onClick={() => setConfirmDeleteId(null)}
                            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--text)]"
                          >
                            Keep it
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          aria-label={`Delete entry: ${e.title}`}
                          onClick={() => setConfirmDeleteId(e.id)}
                          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--red)]"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    {remove.isError && confirmDeleteId === e.id ? (
                      <p className="mt-2 text-sm text-[var(--red)]">Could not delete that entry. Try again.</p>
                    ) : null}
                  </article>
                )}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

function TimelineEntryForm({
  entry,
  onDone,
  onCancel,
}: {
  entry?: TimelineEntry;
  onDone: () => void;
  onCancel: () => void;
}) {
  const [precision, setPrecision] = useState<TimelinePrecision>(entry ? precisionOf(entry.entryDate) : "full");
  const [fullDate, setFullDate] = useState(entry && precisionOf(entry.entryDate) === "full" ? entry.entryDate : "");
  const [monthDate, setMonthDate] = useState(
    entry ? (precisionOf(entry.entryDate) === "month" ? entry.entryDate : entry.entryDate.slice(0, 7)) : "",
  );
  const [yearOnly, setYearOnly] = useState(entry ? entry.entryDate.slice(0, 4) : "");
  const [entryType, setEntryType] = useState<TimelineEntryType>(entry?.entryType ?? "joined");
  const [title, setTitle] = useState(entry?.title ?? "");
  const [unit, setUnit] = useState(entry?.unit ?? "");
  const [place, setPlace] = useState(entry?.place ?? "");
  const [note, setNote] = useState(entry?.note ?? "");

  const entryDate = precision === "full" ? fullDate : precision === "month" ? monthDate : yearOnly.trim();
  const dateOk =
    precision === "full"
      ? /^\d{4}-\d{2}-\d{2}$/.test(fullDate)
      : precision === "month"
        ? /^\d{4}-\d{2}$/.test(monthDate)
        : /^\d{4}$/.test(yearOnly.trim()) && Number(yearOnly.trim()) >= 1900 && Number(yearOnly.trim()) <= 2100;
  const canSubmit = dateOk && title.trim().length > 0;

  const save = useMutation({
    mutationFn: async () => {
      if (entry) {
        await api.updateTimelineEntry({ id: entry.id, entryDate, entryType, title: title.trim(), unit, place, note });
      } else {
        await api.addTimelineEntry({ entryDate, entryType, title: title.trim(), unit, place, note });
      }
    },
    onSuccess: onDone,
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (canSubmit) save.mutate();
  }

  return (
    <form
      onSubmit={submit}
      aria-label={entry ? "Edit timeline entry" : "Add a timeline entry"}
      className="mb-5 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4"
    >
      <h3 className="font-display text-lg font-bold text-[var(--text)]">
        {entry ? "Edit entry" : "Add an entry"}
      </h3>
      <p className="mt-1 rounded-[var(--radius)] bg-[var(--amber-bg)] p-3 text-sm font-semibold text-[var(--text)]">
        {TIMELINE_FORM_OPSEC}
      </p>

      <div className="mt-4">
        <label htmlFor="tl-type" className={labelCls}>Entry type</label>
        <select
          id="tl-type"
          aria-label="Entry type"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value as TimelineEntryType)}
          className={inputCls}
        >
          {TIMELINE_TYPES.map((t) => (
            <option key={t.key} value={t.key}>{t.label}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <span className={labelCls}>Date — as precise as you remember it</span>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Date precision">
          {(
            [
              { key: "full", label: "Full date" },
              { key: "month", label: "Month & year" },
              { key: "year", label: "Year only" },
            ] as { key: TimelinePrecision; label: string }[]
          ).map((p) => (
            <button
              key={p.key}
              type="button"
              aria-label={`Date precision: ${p.label}`}
              aria-pressed={precision === p.key}
              onClick={() => setPrecision(p.key)}
              className={`rounded-[var(--radius)] px-3 py-2 text-sm font-bold ${
                precision === p.key
                  ? "bg-[var(--accent)] text-[var(--accent-text)]"
                  : "border border-[var(--border)] bg-[var(--surface2)] text-[var(--text)]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="mt-2">
          {precision === "full" ? (
            <input
              type="date"
              aria-label="Entry date"
              value={fullDate}
              onChange={(e) => setFullDate(e.target.value)}
              className={inputCls}
            />
          ) : precision === "month" ? (
            <input
              type="month"
              aria-label="Entry month and year"
              value={monthDate}
              onChange={(e) => setMonthDate(e.target.value)}
              className={inputCls}
            />
          ) : (
            <input
              type="text"
              inputMode="numeric"
              aria-label="Entry year"
              value={yearOnly}
              onChange={(e) => setYearOnly(e.target.value.replace(/[^0-9]/g, "").slice(0, 4))}
              placeholder="e.g., 2019"
              className={inputCls}
            />
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="tl-title" className={labelCls}>Title</label>
        <input
          id="tl-title"
          aria-label="Entry title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={140}
          placeholder="e.g., Shipped to Parris Island"
          className={inputCls}
        />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tl-unit" className={labelCls}>Unit (optional)</label>
          <input
            id="tl-unit"
            aria-label="Unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            maxLength={120}
            placeholder="e.g., 2/8 Marines"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="tl-place" className={labelCls}>Place (optional)</label>
          <input
            id="tl-place"
            aria-label="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            maxLength={120}
            placeholder="e.g., Camp Lejeune, NC"
            className={inputCls}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="tl-note" className={labelCls}>Note (optional)</label>
        <textarea
          id="tl-note"
          aria-label="Entry note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={600}
          rows={3}
          placeholder="A line or two you'll want to remember."
          className={inputCls}
        />
      </div>

      {save.isError ? <p className="mt-3 text-sm text-[var(--red)]">Could not save that entry. Check the date and try again.</p> : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="submit" aria-label={entry ? "Save entry changes" : "Save timeline entry"} disabled={!canSubmit || save.isPending} className={btnPrimary}>
          {save.isPending ? "Saving…" : entry ? "Save changes" : "Save entry"}
        </button>
        <button type="button" aria-label="Cancel" onClick={onCancel} className={btnGhost}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function MailCallView() {
  return (
    <div>
      <SectionHead
        title="Mail Call"
        sub="Care packages and military mail: how APO/FPO/DPO mail works, the free USPS kit, the 2026 holiday deadlines, the rules, what to send — and the verified routes for letters when you don't personally know someone deployed."
      />

      <div className="mb-6 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{MAIL_STANDING_NOTE}</p>
      </div>

      {MAIL_GROUPS.map((group) => {
        const isDeadlines = group.title.startsWith("Holiday Deadlines");
        return (
          <section key={group.title} aria-label={group.title} className="mb-8">
            <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">{group.title}</h3>
            {group.note ? (
              isDeadlines ? (
                <div className="mb-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
                  <p className="text-base font-semibold text-[var(--text)]">{group.note}</p>
                  {group.noteLinks && group.noteLinks.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.noteLinks.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${group.title} — ${l.label} (opens in new tab)`}
                          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <p className="mb-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm text-[var(--text)]">
                  {group.note}
                </p>
              )
            ) : null}
            <div className="space-y-3">
              {group.entries.map((entry) => (
                <div key={entry.name} className="space-y-3">
                  <MailCard entry={entry} />
                  {entry.name.startsWith("Address It to a Specific Person") ? <AddressingRuleCard /> : null}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/**
 * The pack's addressing rule, rendered prominently as its own card in
 * the How Military Mail Works group: never write the foreign city or
 * country in an APO/FPO/DPO address.
 */
function AddressingRuleCard() {
  const links = [
    {
      label: "USPS — Military & Diplomatic Mail",
      url: "https://www.usps.com/ship/apo-fpo-dpo.htm",
    },
    {
      label: "U.S. Army / MPSA — Overseas military mail delayed, missing due to customers misaddressing labels",
      url: "https://www.army.mil/article/60566/overseas_military_mail_delayed_missing_due_to_customers_misaddressing_labels",
    },
  ];
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  return (
    <article className="rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">
          Never Write the Foreign City or Country
        </h4>
        <Badge tone="red">ADDRESSING RULE</Badge>
      </div>
      <p className="mt-1 text-base font-semibold text-[var(--text)]">{ADDRESSING_RULE}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Never Write the Foreign City or Country — ${l.label} (opens in new tab)`}
            className={linkCls}
          >
            {l.label} ↗
          </a>
        ))}
      </div>
      <CardTools
        cardRef={{
          section: "mailcall",
          itemKey: "Never Write the Foreign City or Country",
          title: "Never Write the Foreign City or Country",
          summary: ADDRESSING_RULE,
          source: sourceFromLinks(links),
        }}
      />
    </article>
  );
}

/** USPS's 2026 military-mail deadline table, rendered as stacked rows
 * so it reflows at phone width — the same dates as the pack's table. */
function HolidayDeadlineTable() {
  const fields: { key: "groundAdvantage" | "firstClass" | "priority" | "pmems"; label: string }[] = [
    { key: "groundAdvantage", label: "USPS Ground Advantage®" },
    { key: "firstClass", label: "First-Class Mail®" },
    { key: "priority", label: "Priority Mail®" },
    { key: "pmems", label: "Priority Mail Express Military® (PMEMS)" },
  ];
  return (
    <div className="mt-3">
      <p className="text-sm font-semibold text-[var(--dim)]">{HOLIDAY_TABLE_NOTE}</p>
      <div className="mt-2 space-y-3">
        {HOLIDAY_ROWS.map((row) => (
          <div
            key={row.addressedTo}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3"
          >
            <p className="font-display text-base font-bold text-[var(--text)]">{row.addressedTo}</p>
            <dl className="mt-2 space-y-1">
              {fields.map((f) => (
                <div key={f.key} className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <dt className="text-sm text-[var(--dim)]">{f.label}</dt>
                  <dd className="text-sm font-bold text-[var(--text)]">{row[f.key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

/** USPS's three example addresses, reproduced exactly as printed. */
function ExampleAddressesBlock() {
  return (
    <div className="mt-3 space-y-3">
      {EXAMPLE_ADDRESSES.map((block) => (
        <div
          key={block.heading}
          className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-3"
        >
          <p className="text-sm font-bold text-[var(--dim)]">{block.heading}</p>
          <p className="mt-1 whitespace-pre-line font-mono text-base font-semibold leading-relaxed text-[var(--text)]">
            {block.lines.join("\n")}
          </p>
        </div>
      ))}
    </div>
  );
}

function MailCard({ entry }: { entry: MailEntry }) {
  const linkCls =
    "rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] px-3 py-2 text-sm font-bold text-[var(--accent)] underline";
  const showExamples = entry.name.startsWith("USPS's Example Addresses");
  const showTable = entry.name.startsWith("2026 Send-By Dates");
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-lg font-bold text-[var(--text)]">{entry.name}</h4>
        {entry.kind ? <Badge>{entry.kind}</Badge> : null}
        {entry.alertBadge ? <Badge tone="red">{entry.alertBadge}</Badge> : null}
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{entry.summary}</p>
      {showExamples ? <ExampleAddressesBlock /> : null}
      {showTable ? <HolidayDeadlineTable /> : null}
      {entry.bullets ? (
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {entry.bullets.map((b) => (
            <li key={b} className="text-sm text-[var(--text)]">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.flag ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] p-2 text-sm font-semibold text-[var(--amber)]">
          {entry.flag.startsWith("⚠") ? entry.flag : `⚠ ${entry.flag}`}
        </p>
      ) : null}
      {entry.links.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${entry.name} — ${l.label} (opens in new tab)`}
              className={linkCls}
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      ) : null}
      <CardTools
        cardRef={{
          section: "mailcall",
          itemKey: entry.name,
          title: entry.name,
          summary: entry.summary,
          source: sourceFromLinks(entry.links),
        }}
      />
    </article>
  );
}

function WarStoriesView({ profile, goReview }: { profile: Profile; goReview: () => void }) {
  const publishedQ = useQuery({
    queryKey: ["warStories", "published"],
    queryFn: () => api.listWarStories({ scope: "published" }),
  });
  const mineQ = useQuery({
    queryKey: ["warStories", "mine"],
    queryFn: () => api.listWarStories({ scope: "mine" }),
  });
  const published = publishedQ.data?.stories ?? [];
  const mine = (mineQ.data?.stories ?? []).filter((s) => s.status !== "approved");

  return (
    <div>
      <SectionHead
        title="War Stories"
        sub="Documented accounts from official sources, Medal of Honor profiles summarized from the official citations, the most decorated presented honestly — unranked — and member stories that are reviewed before they ever publish."
      />

      <section aria-label="Documented stories" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Documented Stories</h3>
        <p className="mb-3 text-sm text-[var(--dim)]">
          First-person or officially documented accounts, WWI through post-9/11, across the branches — medics,
          engineers, logistics, and home-front service included, because those are war stories too. Stories drawn from
          the Library of Congress Veterans History Project carry its label: a first-person recollection, not
          independently verified by the Library of Congress.
        </p>
        <div className="space-y-3">
          {DOCUMENTED_STORIES.map((s) => (
            <DocumentedStoryCard key={s.title} story={s} />
          ))}
        </div>
      </section>

      <section aria-label="Medal of Honor" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Medal of Honor</h3>
        <p className="mb-3 text-sm text-[var(--dim)]">
          Start with the authoritative databases — the full recipient roll lives there, not here.
        </p>
        <div className="space-y-3">
          {MOH_ROUTES.map((r) => (
            <MohRouteCard key={r.name} route={r} />
          ))}
        </div>
        <div className="mb-3 mt-4 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
          <p className="text-base font-semibold text-[var(--text)]">{MOH_WOMAN_NOTE}</p>
          <p className="mt-2 text-sm text-[var(--text)]">{MOH_CAVEAT}</p>
        </div>
        <div className="space-y-3">
          {MOH_PROFILES.map((p) => (
            <MohProfileCard key={p.name} profile={p} />
          ))}
        </div>
      </section>

      <section aria-label="Most decorated" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Most Decorated — Notable Records, Unranked</h3>
        <div className="mb-3 rounded-[var(--radius)] border-2 border-[var(--amber)] bg-[var(--amber-bg)] p-4">
          <p className="text-base font-semibold text-[var(--text)]">{DECORATED_CAVEAT}</p>
        </div>
        <div className="space-y-3">
          {DECORATED_PROFILES.map((p) => (
            <DecoratedCard key={p.name} profile={p} />
          ))}
        </div>
      </section>

      <section aria-label="Member stories" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Member Stories</h3>
        <p className="mb-3 text-sm text-[var(--dim)]">
          Stories from members, published only after review — labeled MEMBER STORY so they never blur with the
          documented history above. A member&apos;s story is their recollection, presented as such.
        </p>
        {publishedQ.isPending ? <p className="text-base text-[var(--dim)]">Loading member stories…</p> : null}
        {!publishedQ.isPending && published.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            No member stories published yet — yours could be the first, after review.
          </p>
        ) : null}
        <div className="space-y-3">
          {published.map((s) => (
            <MemberStoryCard key={s.id} story={s} />
          ))}
        </div>

        <div className="mt-5">
          <ShareStoryForm profile={profile} />
        </div>

        {mine.length > 0 ? (
          <div className="mt-5">
            <h4 className="font-display mb-2 text-lg font-bold text-[var(--text)]">Your submissions</h4>
            <div className="space-y-2">
              {mine.map((s) => (
                <article key={s.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={s.status === "pending" ? "amber" : s.status === "returned" ? "amber" : "red"}>
                      {s.status.toUpperCase()}
                    </Badge>
                    {s.reported ? <Badge tone="red">REPORTED</Badge> : null}
                    <span className="text-sm text-[var(--dim)]">
                      {s.branch} · {s.era} · {s.category}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-[var(--text)]">{s.title}</p>
                  {s.status === "pending" ? (
                    <p className="mt-1 text-sm text-[var(--dim)]">In the review queue — not public until it is approved.</p>
                  ) : null}
                  {s.status === "returned" && s.reviewNote ? (
                    <p className="mt-1 text-sm text-[var(--text)]">
                      <span className="font-bold">Returned by review: </span>
                      {s.reviewNote}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
            <button type="button" aria-label="Open the review queue" onClick={goReview} className={`${btnGhost} mt-3`}>
              Open the Review Queue
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}

/* ----------------------------- Wall of Honor ----------------------------- */

function TributeCard({ tribute, lit }: { tribute: MemberTribute; lit: boolean }) {
  const queryClient = useQueryClient();
  const [reported, setReported] = useState(false);
  const candle = useMutation({
    mutationFn: () => api.toggleCandle({ tributeId: tribute.id }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["tributes"] });
      void queryClient.invalidateQueries({ queryKey: ["myCandles"] });
    },
  });
  const report = useMutation({
    mutationFn: () => api.reportTribute({ id: tribute.id }),
    onSuccess: () => {
      setReported(true);
      void queryClient.invalidateQueries({ queryKey: ["tributes"] });
    },
  });
  const born = formatTributeDate(tribute.birthDate);
  const lost = formatTributeDate(tribute.lossDate);
  const bornYear = tributeYear(tribute.birthDate);
  const lostYear = tributeYear(tribute.lossDate);
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-display text-xl font-bold text-[var(--text)]">
          {tribute.rank ? `${tribute.rank} ` : ""}{tribute.name}
        </h4>
        <Badge tone="amber">MEMBER TRIBUTE</Badge>
      </div>
      <p className="mt-1 text-sm font-semibold text-[var(--dim)]">
        {tribute.branch}
        {tribute.unit ? ` · ${tribute.unit}` : ""} · {tribute.era}
      </p>
      {born || lost ? (
        <p className="mt-1 text-sm text-[var(--dim)]">
          {bornYear && lostYear ? `${bornYear} – ${lostYear} · ` : ""}
          {born ? `Born ${born}` : ""}
          {born && lost ? " · " : ""}
          {lost ? `Lost ${lost}` : ""}
        </p>
      ) : null}
      <p className="mt-3 whitespace-pre-wrap text-base leading-relaxed text-[var(--text)]">{tribute.tributeText}</p>
      {tribute.showAdder && tribute.addedBy ? (
        <p className="mt-3 text-sm text-[var(--dim)]">
          Added by {tribute.addedBy}
          {tribute.relationship ? ` — ${tribute.relationship}` : ""}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-3">
        <button
          type="button"
          aria-label={lit ? `Your candle is lit for ${tribute.name} — tap to put it out` : `Light a candle for ${tribute.name}`}
          aria-pressed={lit}
          disabled={candle.isPending}
          onClick={() => candle.mutate()}
          className={`flex items-center gap-2 rounded-[var(--radius)] border px-3 py-2 text-sm font-semibold disabled:opacity-50 ${
            lit
              ? "border-[var(--amber)] bg-[var(--amber-bg)] text-[var(--text)]"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          }`}
        >
          <span className={lit ? "text-[var(--amber)]" : "text-[var(--dim)]"}>
            <NavIcon name="flame" size={18} />
          </span>
          {lit ? "Candle lit" : "Light a candle"}
        </button>
        <span className="text-sm text-[var(--dim)]" aria-live="polite">
          {tribute.candleCount === 0
            ? "No candles lit yet"
            : `${tribute.candleCount} candle${tribute.candleCount === 1 ? "" : "s"} lit in remembrance`}
        </span>
      </div>
      {candle.isError ? <p className="mt-1 text-sm text-[var(--red)]">Could not record your candle. Try again.</p> : null}
      <div className="mt-2">
        {reported ? (
          <p className="text-sm font-semibold text-[var(--amber)]">
            Reported — this tribute is back in the review queue. A family request to edit or remove a tribute is
            always honored.
          </p>
        ) : (
          <button
            type="button"
            aria-label={`Report tribute to ${tribute.name}`}
            disabled={report.isPending}
            onClick={() => report.mutate()}
            className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--dim)] disabled:opacity-50"
          >
            Report this tribute
          </button>
        )}
        {report.isError ? <p className="mt-1 text-sm text-[var(--red)]">Could not send the report. Try again.</p> : null}
      </div>
    </article>
  );
}

function WallOfHonorView({ profile, goReview }: { profile: Profile; goReview: () => void }) {
  const publishedQ = useQuery({
    queryKey: ["tributes", "published"],
    queryFn: () => api.listTributes({ scope: "published" }),
  });
  const mineQ = useQuery({
    queryKey: ["tributes", "mine"],
    queryFn: () => api.listTributes({ scope: "mine" }),
  });
  const candlesQ = useQuery({
    queryKey: ["myCandles"],
    queryFn: () => api.getMyCandles({}),
  });
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [eraFilter, setEraFilter] = useState("All");

  const published = publishedQ.data?.tributes ?? [];
  const litIds = new Set(candlesQ.data?.litIds ?? []);
  const mine = (mineQ.data?.tributes ?? []).filter((t) => t.status !== "approved");
  const now = new Date();
  const todayList = published.filter((t) => fallsOnToday(t.lossDate, now) || fallsOnToday(t.birthDate, now));
  const todayIds = new Set(todayList.map((t) => t.id));
  const q = search.trim().toLowerCase();
  const wall = published
    .filter((t) => !todayIds.has(t.id))
    .filter((t) => (q ? t.name.toLowerCase().includes(q) : true))
    .filter((t) => (branchFilter === "All" ? true : t.branch === branchFilter))
    .filter((t) => (eraFilter === "All" ? true : t.era === eraFilter));

  return (
    <div>
      <SectionHead
        title="Wall of Honor"
        sub="A quiet place for the names members carry. Every tribute was added by a member who knew them, served with them, or is family — and reviewed before it appeared here. There are no likes and no rankings on this wall: only names, and candles."
      />

      {todayList.length > 0 ? (
        <section aria-label="Today we remember" className="mb-8">
          <h3 className="font-display mb-1 text-xl font-bold text-[var(--text)]">Today we remember</h3>
          <p className="mb-3 text-sm text-[var(--dim)]">
            {now.toLocaleDateString("en-US", { month: "long", day: "numeric" })} is the birthday or the day of loss
            of:
          </p>
          <div className="space-y-3">
            {todayList.map((t) => (
              <TributeCard key={t.id} tribute={t} lit={litIds.has(t.id)} />
            ))}
          </div>
        </section>
      ) : null}

      <section aria-label="The wall" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">The Wall</h3>
        <div className="mb-3 grid gap-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label htmlFor="honor-search" className={labelCls}>Search by name</label>
            <input id="honor-search" aria-label="Search tributes by name" value={search} onChange={(e) => setSearch(e.target.value)} className={inputCls} placeholder="Search the wall…" />
          </div>
          <div>
            <label htmlFor="honor-branch-filter" className={labelCls}>Branch</label>
            <select id="honor-branch-filter" aria-label="Filter tributes by branch" value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className={inputCls}>
              <option value="All">All branches</option>
              {HONOR_BRANCHES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="honor-era-filter" className={labelCls}>Era / conflict</label>
            <select id="honor-era-filter" aria-label="Filter tributes by era or conflict" value={eraFilter} onChange={(e) => setEraFilter(e.target.value)} className={inputCls}>
              <option value="All">All eras</option>
              {HONOR_ERAS.map((er) => (
                <option key={er} value={er}>{er}</option>
              ))}
            </select>
          </div>
        </div>
        {publishedQ.isPending ? <p className="text-base text-[var(--dim)]">Loading the wall…</p> : null}
        {!publishedQ.isPending && published.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-base text-[var(--text)]">
            No tributes yet — the wall begins with the first name a member adds.
          </p>
        ) : null}
        {!publishedQ.isPending && published.length > 0 && wall.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            {todayList.length > 0 && !q && branchFilter === "All" && eraFilter === "All"
              ? "Every name on the wall is remembered above today."
              : "No tributes match that name or those filters."}
          </p>
        ) : null}
        <div className="space-y-3">
          {wall.map((t) => (
            <TributeCard key={t.id} tribute={t} lit={litIds.has(t.id)} />
          ))}
        </div>
      </section>

      <section aria-label="Add a tribute" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Add a Tribute</h3>
        <AddTributeForm profile={profile} />
        {mine.length > 0 ? (
          <div className="mt-5">
            <h4 className="font-display mb-2 text-lg font-bold text-[var(--text)]">Your submissions</h4>
            <div className="space-y-2">
              {mine.map((t) => (
                <article key={t.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="amber">{t.status.toUpperCase()}</Badge>
                    {t.reported ? <Badge tone="red">REPORTED</Badge> : null}
                    <span className="text-sm text-[var(--dim)]">
                      {t.branch} · {t.era}
                    </span>
                  </div>
                  <p className="mt-1 text-base font-semibold text-[var(--text)]">
                    {t.rank ? `${t.rank} ` : ""}{t.name}
                  </p>
                  {t.status === "pending" ? (
                    <p className="mt-1 text-sm text-[var(--dim)]">In the review queue — not on the wall until it is approved.</p>
                  ) : null}
                  {t.status === "returned" && t.reviewNote ? (
                    <p className="mt-1 text-sm text-[var(--text)]">
                      <span className="font-bold">Returned by review: </span>
                      {t.reviewNote}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
            <button type="button" aria-label="Open the review queue" onClick={goReview} className={`${btnGhost} mt-3`}>
              Open the Review Queue
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}

type TributeDateMode = "omit" | "year" | "full";

function composeTributeDate(mode: TributeDateMode, year: string, full: string): string {
  if (mode === "year") return year.trim();
  if (mode === "full") return full;
  return "";
}

function TributeDateFields({
  idPrefix,
  legend,
  mode,
  setMode,
  year,
  setYear,
  full,
  setFull,
}: {
  idPrefix: string;
  legend: string;
  mode: TributeDateMode;
  setMode: (m: TributeDateMode) => void;
  year: string;
  setYear: (v: string) => void;
  full: string;
  setFull: (v: string) => void;
}) {
  return (
    <fieldset className="rounded-[var(--radius)] border border-[var(--border)] p-3">
      <legend className="px-1 text-sm font-semibold text-[var(--text)]">{legend}</legend>
      <label htmlFor={`${idPrefix}-mode`} className={labelCls}>How much do you know?</label>
      <select
        id={`${idPrefix}-mode`}
        aria-label={`${legend}: how much do you know`}
        value={mode}
        onChange={(e) => setMode(e.target.value as TributeDateMode)}
        className={inputCls}
      >
        <option value="omit">Not recorded</option>
        <option value="year">Year only</option>
        <option value="full">Full date</option>
      </select>
      {mode === "year" ? (
        <div className="mt-2">
          <label htmlFor={`${idPrefix}-year`} className={labelCls}>Year</label>
          <input id={`${idPrefix}-year`} aria-label={`${legend} year`} value={year} onChange={(e) => setYear(e.target.value)} required pattern="\d{4}" maxLength={4} inputMode="numeric" className={inputCls} placeholder="e.g., 1944" />
        </div>
      ) : null}
      {mode === "full" ? (
        <div className="mt-2">
          <label htmlFor={`${idPrefix}-full`} className={labelCls}>Date</label>
          <input id={`${idPrefix}-full`} aria-label={`${legend} full date`} type="date" value={full} onChange={(e) => setFull(e.target.value)} required className={inputCls} />
        </div>
      ) : null}
    </fieldset>
  );
}

function AddTributeForm({ profile }: { profile: Profile }) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [branch, setBranch] = useState<string>(
    (HONOR_BRANCHES as readonly string[]).includes(profile.branch) ? profile.branch : "Army",
  );
  const [unit, setUnit] = useState("");
  const [era, setEra] = useState<string>("Post-9/11 (other)");
  const [birthMode, setBirthMode] = useState<TributeDateMode>("omit");
  const [birthYear, setBirthYear] = useState("");
  const [birthFull, setBirthFull] = useState("");
  const [lossMode, setLossMode] = useState<TributeDateMode>("omit");
  const [lossYear, setLossYear] = useState("");
  const [lossFull, setLossFull] = useState("");
  const [tributeText, setTributeText] = useState("");
  const [addedBy, setAddedBy] = useState(profile.displayName ?? "");
  const [relationship, setRelationship] = useState("");
  const [showAdder, setShowAdder] = useState(false);
  const [ack, setAck] = useState(false);
  const submit = useMutation({
    mutationFn: () =>
      api.submitTribute({
        name,
        rank,
        branch,
        unit,
        era,
        birthDate: composeTributeDate(birthMode, birthYear, birthFull),
        lossDate: composeTributeDate(lossMode, lossYear, lossFull),
        tributeText,
        addedBy,
        relationship,
        showAdder,
      }),
    onSuccess: () => {
      setName("");
      setRank("");
      setUnit("");
      setBirthMode("omit");
      setBirthYear("");
      setBirthFull("");
      setLossMode("omit");
      setLossYear("");
      setLossFull("");
      setTributeText("");
      setRelationship("");
      setShowAdder(false);
      setAck(false);
      setOpen(false);
      void queryClient.invalidateQueries({ queryKey: ["tributes"] });
    },
  });

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Add a tribute to the Wall of Honor"
        onClick={() => setOpen(true)}
        className={`${btnPrimary} w-full`}
      >
        Add a tribute — it goes to the review queue first
      </button>
    );
  }

  return (
    <form
      className="space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        submit.mutate();
      }}
    >
      <p className="font-display text-base font-bold text-[var(--text)]">Add a tribute</p>
      <p className="text-sm text-[var(--dim)]">
        Members only. Your tribute goes to <strong>PENDING</strong> review and is verified by a moderator before it
        appears on the wall. Nothing publishes on submission.
      </p>
      <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
        <p className="text-sm font-bold text-[var(--text)]">The rules — read before you write</p>
        <ul className="mt-2 space-y-2">
          {TRIBUTE_RULES.map((r) => (
            <li key={r.title} className="text-sm text-[var(--text)]">
              <span className="font-bold">{r.title}. </span>
              {r.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="honor-name" className={labelCls}>Their name</label>
        <input id="honor-name" aria-label="Name of the fallen service member" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={120} className={inputCls} placeholder="Full name, as it should appear on the wall" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="honor-rank" className={labelCls}>Rank</label>
          <input id="honor-rank" aria-label="Rank of the fallen service member" value={rank} onChange={(e) => setRank(e.target.value)} maxLength={60} className={inputCls} placeholder="e.g., Sergeant, HM2, Capt" />
        </div>
        <div>
          <label htmlFor="honor-branch" className={labelCls}>Branch</label>
          <select id="honor-branch" aria-label="Branch of the fallen service member" value={branch} onChange={(e) => setBranch(e.target.value)} className={inputCls}>
            {HONOR_BRANCHES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="honor-unit" className={labelCls}>Unit (optional)</label>
          <input id="honor-unit" aria-label="Unit of the fallen service member, optional" value={unit} onChange={(e) => setUnit(e.target.value)} maxLength={120} className={inputCls} placeholder="Unit, ship, or squadron" />
        </div>
        <div>
          <label htmlFor="honor-era" className={labelCls}>Era / conflict</label>
          <select id="honor-era" aria-label="Era or conflict" value={era} onChange={(e) => setEra(e.target.value)} className={inputCls}>
            {HONOR_ERAS.map((er) => (
              <option key={er} value={er}>{er}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <TributeDateFields
          idPrefix="honor-birth"
          legend="Date of birth"
          mode={birthMode}
          setMode={setBirthMode}
          year={birthYear}
          setYear={setBirthYear}
          full={birthFull}
          setFull={setBirthFull}
        />
        <TributeDateFields
          idPrefix="honor-loss"
          legend="Date of loss"
          mode={lossMode}
          setMode={setLossMode}
          year={lossYear}
          setYear={setLossYear}
          full={lossFull}
          setFull={setLossFull}
        />
      </div>
      <p className="text-sm text-[var(--dim)]">
        Dates may be a full date, a year only, or left unrecorded. On their birthday or the day of their loss, the
        wall brings their name forward under “Today we remember.”
      </p>
      <div>
        <label htmlFor="honor-text" className={labelCls}>Who they were</label>
        <textarea id="honor-text" aria-label="Tribute text: who they were" value={tributeText} onChange={(e) => setTributeText(e.target.value)} required minLength={20} maxLength={4000} rows={6} className={inputCls} placeholder="A few sentences about who they were — the person, not just the service record." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="honor-added-by" className={labelCls}>Your name</label>
          <input id="honor-added-by" aria-label="Your name as the member adding this tribute" value={addedBy} onChange={(e) => setAddedBy(e.target.value)} maxLength={80} className={inputCls} placeholder="As it should appear, if shown" />
        </div>
        <div>
          <label htmlFor="honor-relationship" className={labelCls}>Your relationship to them</label>
          <input id="honor-relationship" aria-label="Your relationship to the fallen service member" value={relationship} onChange={(e) => setRelationship(e.target.value)} maxLength={120} className={inputCls} placeholder="e.g., Served with him · His sister · Their squad leader" />
        </div>
      </div>
      <label className="flex items-start gap-2 text-sm text-[var(--text)]">
        <input type="checkbox" aria-label="Show my name and relationship on the tribute" checked={showAdder} onChange={(e) => setShowAdder(e.target.checked)} className="mt-1 h-4 w-4 shrink-0" />
        <span>Show my name and relationship on the tribute. Leave this off and the tribute stands on its own, with no name attached.</span>
      </label>
      <label className="flex items-start gap-2 text-sm text-[var(--text)]">
        <input type="checkbox" aria-label="Acknowledge the Wall of Honor rules" checked={ack} onChange={(e) => setAck(e.target.checked)} className="mt-1 h-4 w-4 shrink-0" />
        <span>{TRIBUTE_ACK}</span>
      </label>
      {submit.isError ? <p className="text-sm text-[var(--red)]">Could not submit your tribute. Try again.</p> : null}
      <div className="flex gap-2">
        <button type="submit" aria-label="Submit tribute for review" disabled={submit.isPending || !ack} className={btnPrimary}>
          {submit.isPending ? "Submitting…" : "Submit — goes to PENDING review"}
        </button>
        <button type="button" aria-label="Cancel adding a tribute" onClick={() => setOpen(false)} className={btnGhost}>
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ----------------------------- Find a Mentor ---------------------------- */

function MentorsView({
  profile,
  go,
  goReview,
}: {
  profile: Profile;
  go: (v: View) => void;
  goReview: () => void;
}) {
  const publishedQ = useQuery({
    queryKey: ["mentors", "published"],
    queryFn: () => api.listMentors({ scope: "published" }),
  });
  const mineQ = useQuery({
    queryKey: ["mentors", "mine"],
    queryFn: () => api.listMentors({ scope: "mine" }),
  });
  const requestsQ = useQuery({
    queryKey: ["mentorRequests"],
    queryFn: () => api.listMentorRequests({}),
  });
  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [topicFilter, setTopicFilter] = useState("All");

  const published = publishedQ.data?.mentors ?? [];
  const mine = mineQ.data?.mentors ?? [];
  const ownIds = new Set(mine.map((m) => m.id));
  const requests = requestsQ.data?.requests ?? [];
  const incoming = requests.filter((r) => ownIds.has(r.mentorId));
  const outgoing = requests.filter((r) => !ownIds.has(r.mentorId));
  const incomingPending = incoming.filter((r) => r.status === "pending");
  const connections = requests.filter((r) => r.status === "accepted");

  const q = search.trim().toLowerCase();
  const browse = published
    .filter((m) =>
      q
        ? m.jobCode.toLowerCase().includes(q) ||
          m.jobTitle.toLowerCase().includes(q) ||
          m.displayName.toLowerCase().includes(q)
        : true,
    )
    .filter((m) => (branchFilter === "All" ? true : m.branch === branchFilter))
    .filter((m) => (topicFilter === "All" ? true : m.topics.includes(topicFilter)));

  return (
    <div>
      <SectionHead
        title="Find a Mentor"
        sub="Members who've been where you are — by branch, job, and topic. Every listing was reviewed before it published, and everything happens inside the app: no phone numbers, no emails, no social handles, ever."
      />

      <section aria-label="A note before you start" className="mb-6 rounded-[var(--radius)] border-2 border-[var(--red)] bg-[var(--red-bg)] p-4">
        <p className="text-base font-semibold text-[var(--text)]">{MENTOR_CARE_NOTE}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" aria-label="Open Care and Crisis" onClick={() => go("care")} className={btnPrimary}>
            Open Care &amp; Crisis
          </button>
          <a href="tel:988" aria-label="Call 988 Suicide and Crisis Lifeline, Veterans press 1" className={btnGhost}>
            Call 988 — Veterans press 1
          </a>
        </div>
      </section>

      <section aria-label="Your mentor listing" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Be a Mentor</h3>
        {mine.length > 0 ? (
          <div className="mb-4 space-y-3">
            {mine.map((m) => (
              <OwnMentorCard key={m.id} mentor={m} />
            ))}
          </div>
        ) : (
          <p className="mb-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            You&apos;re not listed as a mentor yet. If you&apos;ve got a tour, a school, a board, or a transition
            behind you, somebody coming up behind you could use exactly that.
          </p>
        )}
        <BecomeMentorForm profile={profile} />
        {mine.some((m) => m.status === "pending" || m.status === "returned") ? (
          <button type="button" aria-label="Open the review queue" onClick={goReview} className={`${btnGhost} mt-3`}>
            Open the Review Queue
          </button>
        ) : null}
      </section>

      <section aria-label="Requests for you" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">
          Requests for You{incomingPending.length > 0 ? ` — ${incomingPending.length} waiting` : ""}
        </h3>
        <p className="mb-3 rounded-[var(--radius)] bg-[var(--surface2)] p-3 text-sm text-[var(--dim)]">
          Prototype honesty: this build carries one member profile, so a request you send to your own listing
          appears on both sides of this page. With real accounts, each side shows only its own.
        </p>
        {requestsQ.isPending ? <p className="text-base text-[var(--dim)]">Loading requests…</p> : null}
        {!requestsQ.isPending && incomingPending.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            No requests yet.
          </p>
        ) : null}
        <div className="space-y-3">
          {incomingPending.map((r) => (
            <IncomingRequestCard key={r.id} request={r} />
          ))}
        </div>
      </section>

      <section aria-label="Your connections" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Your Connections</h3>
        {connections.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            No active mentorships yet. When a request is accepted, the pair connects here — and as a private
            mentorship squad in Check-In, where the conversation lives.
          </p>
        ) : (
          <div className="space-y-3">
            {connections.map((r) => (
              <ConnectionCard key={r.id} request={r} go={go} />
            ))}
          </div>
        )}
      </section>

      <section aria-label="Find a mentor" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Find a Mentor</h3>
        <div className="mb-3 grid gap-2 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label htmlFor="mentor-search" className={labelCls}>Search by job</label>
            <input id="mentor-search" aria-label="Search mentors by job code or title" value={search} onChange={(e) => setSearch(e.target.value)} className={inputCls} placeholder="e.g., 1371 or Combat Engineer" />
          </div>
          <div>
            <label htmlFor="mentor-branch-filter" className={labelCls}>Branch</label>
            <select id="mentor-branch-filter" aria-label="Filter mentors by branch" value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)} className={inputCls}>
              <option value="All">All branches</option>
              {BRANCHES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="mentor-topic-filter" className={labelCls}>Topic</label>
            <select id="mentor-topic-filter" aria-label="Filter mentors by topic" value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} className={inputCls}>
              <option value="All">All topics</option>
              {MENTOR_TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        {publishedQ.isPending ? <p className="text-base text-[var(--dim)]">Loading mentors…</p> : null}
        {!publishedQ.isPending && published.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 text-base text-[var(--text)]">
            No mentors listed yet — the first mentor could be you.
          </p>
        ) : null}
        {!publishedQ.isPending && published.length > 0 && browse.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            No mentors match that job search or those filters.
          </p>
        ) : null}
        <div className="space-y-3">
          {browse.map((m) => (
            <MentorBrowseCard key={m.id} mentor={m} isOwn={ownIds.has(m.id)} />
          ))}
        </div>
      </section>

      <section aria-label="Requests you sent" className="mb-8">
        <h3 className="font-display mb-3 text-xl font-bold text-[var(--text)]">Requests You Sent</h3>
        {outgoing.length === 0 && incoming.length === 0 ? (
          <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            You haven&apos;t sent a request yet. Pick a mentor above and ask — one topic, a short intro, that&apos;s
            the whole ask.
          </p>
        ) : null}
        <div className="space-y-2">
          {outgoing.map((r) => (
            <OutgoingRequestRow key={r.id} request={r} />
          ))}
          {outgoing.length === 0 && incoming.length > 0 ? (
            <p className="text-sm text-[var(--dim)]">
              Every request so far was sent to your own listing, so they&apos;re all under Requests for You above.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function OwnMentorCard({ mentor }: { mentor: MemberMentor }) {
  const queryClient = useQueryClient();
  const availability = useMutation({
    mutationFn: (next: "open" | "paused") => api.setMentorAvailability({ id: mentor.id, availability: next }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["mentors"] }),
  });
  const jobLabel = [mentor.jobCode, mentor.jobTitle].filter(Boolean).join(" — ");
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={mentor.status === "approved" ? "official" : mentor.status === "pending" ? "amber" : "red"}>
          {mentor.status.toUpperCase()}
        </Badge>
        {mentor.reported ? <Badge tone="red">REPORTED</Badge> : null}
        {mentor.status === "approved" ? (
          <Badge tone={mentor.availability === "open" ? "official" : "amber"}>
            {mentor.availability === "open" ? "OPEN TO REQUESTS" : "PAUSED"}
          </Badge>
        ) : null}
        <span className="text-sm text-[var(--dim)]">
          {mentor.branch}
          {jobLabel ? ` · ${jobLabel}` : ""}
        </span>
      </div>
      <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">{mentor.displayName}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {mentor.topics.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <p className="mt-2 text-base text-[var(--text)]">{mentor.bio}</p>
      {mentor.status === "pending" ? (
        <p className="mt-2 text-sm text-[var(--dim)]">In the review queue — not visible in Find a Mentor until it is approved.</p>
      ) : null}
      {mentor.status === "returned" && mentor.reviewNote ? (
        <p className="mt-2 text-sm text-[var(--text)]">
          <span className="font-bold">Returned by review: </span>
          {mentor.reviewNote}
        </p>
      ) : null}
      {mentor.status === "approved" ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {mentor.pendingRequests > 0 ? (
            <Badge tone="amber">
              {mentor.pendingRequests} request{mentor.pendingRequests === 1 ? "" : "s"} waiting — see Requests for You
            </Badge>
          ) : (
            <span className="text-sm text-[var(--dim)]">No requests waiting on this listing.</span>
          )}
          <button
            type="button"
            aria-label={mentor.availability === "open" ? `Pause mentor listing by ${mentor.displayName}` : `Reopen mentor listing by ${mentor.displayName}`}
            disabled={availability.isPending}
            onClick={() => availability.mutate(mentor.availability === "open" ? "paused" : "open")}
            className={btnGhost}
          >
            {mentor.availability === "open" ? "Pause listing" : "Reopen listing"}
          </button>
        </div>
      ) : null}
      {availability.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not change availability. Try again.</p> : null}
    </article>
  );
}

function BecomeMentorForm({ profile }: { profile: Profile }) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const profileEntry = ALL_MOS_ENTRIES.find(
    (e) => e.branch === profile.branch && e.code.toUpperCase() === profile.mosCode.toUpperCase(),
  );
  const [branch, setBranch] = useState<string>(
    (BRANCHES as readonly string[]).includes(profile.branch) ? profile.branch : "Marine Corps",
  );
  const branchJobs = ALL_MOS_ENTRIES.filter((e) => e.branch === branch);
  const [jobId, setJobId] = useState<string>(
    profileEntry && profileEntry.branch === branch ? profileEntry.id : (branchJobs[0]?.id ?? ""),
  );
  const [topics, setTopics] = useState<MentorTopic[]>([]);
  const [bio, setBio] = useState("");
  const [years, setYears] = useState("");
  const [displayChoice, setDisplayChoice] = useState<"full" | "rank_last" | "callsign">("full");
  const [displayName, setDisplayName] = useState(profile.displayName ?? "");
  const [availabilityChoice, setAvailabilityChoice] = useState<"open" | "paused">("open");
  const [ack, setAck] = useState(false);
  const selectedJob = branchJobs.find((e) => e.id === jobId) ?? branchJobs[0];
  const submit = useMutation({
    mutationFn: () =>
      api.submitMentor({
        branch,
        jobCode: selectedJob?.code ?? "",
        jobTitle: selectedJob?.title ?? "",
        topics,
        bio,
        yearsService: years.trim() === "" ? null : Number(years),
        displayChoice,
        displayName,
        availability: availabilityChoice,
      }),
    onSuccess: () => {
      setTopics([]);
      setBio("");
      setYears("");
      setAck(false);
      setOpen(false);
      void queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Become a mentor — open the mentor listing form"
        onClick={() => setOpen(true)}
        className={`${btnPrimary} w-full`}
      >
        Become a mentor — your listing goes to the review queue first
      </button>
    );
  }

  const toggleTopic = (t: MentorTopic) =>
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <form
      className="space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        submit.mutate();
      }}
    >
      <p className="font-display text-base font-bold text-[var(--text)]">Offer mentorship</p>
      <p className="text-sm text-[var(--dim)]">
        Members only. Your listing goes to <strong>PENDING</strong> review and publishes only after a moderator
        approves it. Nothing publishes on submission.
      </p>
      <div className="rounded-[var(--radius)] bg-[var(--surface2)] p-3">
        <p className="text-sm font-bold text-[var(--text)]">The standing rules — read before you write</p>
        <ul className="mt-2 space-y-2">
          {MENTOR_RULES.map((r) => (
            <li key={r.title} className="text-sm text-[var(--text)]">
              <span className="font-bold">{r.title}. </span>
              {r.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="mentor-branch" className={labelCls}>Your branch</label>
          <select
            id="mentor-branch"
            aria-label="Your branch"
            value={branch}
            onChange={(e) => {
              const next = e.target.value;
              setBranch(next);
              const first = ALL_MOS_ENTRIES.find((x) => x.branch === next);
              setJobId(first?.id ?? "");
            }}
            className={inputCls}
          >
            {BRANCHES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mentor-years" className={labelCls}>Years of service (optional)</label>
          <input id="mentor-years" aria-label="Years of service, optional" value={years} onChange={(e) => setYears(e.target.value)} inputMode="numeric" pattern="\d{0,2}" maxLength={2} className={inputCls} placeholder="e.g., 9" />
        </div>
      </div>
      <div>
        <label htmlFor="mentor-job" className={labelCls}>Your job — pick from the Library</label>
        <select id="mentor-job" aria-label="Your job from the MOS Library" value={selectedJob?.id ?? ""} onChange={(e) => setJobId(e.target.value)} className={inputCls}>
          {branchJobs.map((e) => (
            <option key={e.id} value={e.id}>{e.code} — {e.title}</option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="mb-1 text-sm font-semibold text-[var(--text)]">Topics you can help with — pick at least one</legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Mentor topics">
          {MENTOR_TOPICS.map((t) => {
            const on = topics.includes(t);
            return (
              <button
                key={t}
                type="button"
                aria-label={`Topic: ${t}`}
                aria-pressed={on}
                onClick={() => toggleTopic(t)}
                className={`rounded-full px-3 py-2 text-sm font-bold ${on ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div>
        <label htmlFor="mentor-bio" className={labelCls}>What I can help with</label>
        <textarea id="mentor-bio" aria-label="What I can help with — your mentor bio" value={bio} onChange={(e) => setBio(e.target.value)} required minLength={20} maxLength={1200} rows={4} className={inputCls} placeholder="Where you've served, what you've done, and the questions you're glad to answer. No phone, email, or social handles — contact stays inside the app." />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="mentor-display-choice" className={labelCls}>Show my name as</label>
          <select id="mentor-display-choice" aria-label="How your name appears on the listing" value={displayChoice} onChange={(e) => setDisplayChoice(e.target.value as "full" | "rank_last" | "callsign")} className={inputCls}>
            {MENTOR_DISPLAY_CHOICES.map((d) => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-[var(--dim)]">
            {MENTOR_DISPLAY_CHOICES.find((d) => d.value === displayChoice)?.hint}
          </p>
        </div>
        <div>
          <label htmlFor="mentor-display-name" className={labelCls}>Name on the listing</label>
          <input id="mentor-display-name" aria-label="Name shown on your mentor listing" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required maxLength={80} className={inputCls} placeholder="As it should appear" />
        </div>
      </div>
      <div>
        <label htmlFor="mentor-availability" className={labelCls}>Availability</label>
        <select id="mentor-availability" aria-label="Your availability for new requests" value={availabilityChoice} onChange={(e) => setAvailabilityChoice(e.target.value as "open" | "paused")} className={inputCls}>
          <option value="open">Open — I&apos;m taking requests</option>
          <option value="paused">Paused — list me, but no new requests</option>
        </select>
      </div>
      <label className="flex items-start gap-2 text-sm text-[var(--text)]">
        <input type="checkbox" aria-label="Acknowledge the mentor standing rules" checked={ack} onChange={(e) => setAck(e.target.checked)} className="mt-1 h-4 w-4 shrink-0" />
        <span>{MENTOR_ACK}</span>
      </label>
      {submit.isError ? <p className="text-sm text-[var(--red)]">Could not submit your listing. Check the topics and bio, then try again.</p> : null}
      <div className="flex gap-2">
        <button type="submit" aria-label="Submit mentor listing for review" disabled={submit.isPending || !ack || topics.length === 0} className={btnPrimary}>
          {submit.isPending ? "Submitting…" : "Submit — goes to PENDING review"}
        </button>
        <button type="button" aria-label="Cancel becoming a mentor" onClick={() => setOpen(false)} className={btnGhost}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function IncomingRequestCard({ request }: { request: MemberMentorRequest }) {
  const queryClient = useQueryClient();
  const [reported, setReported] = useState(false);
  const respond = useMutation({
    mutationFn: (decision: "accepted" | "declined") => api.respondMentorRequest({ id: request.id, decision }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["mentorRequests"] });
      void queryClient.invalidateQueries({ queryKey: ["mentors"] });
      void queryClient.invalidateQueries({ queryKey: ["checkins"] });
    },
  });
  const report = useMutation({
    mutationFn: () => api.reportMentorRequest({ id: request.id }),
    onSuccess: () => setReported(true),
  });
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="amber">REQUEST</Badge>
        <Badge>{request.topic}</Badge>
        <span className="text-sm text-[var(--dim)]">For your listing as {request.mentorDisplayName}</span>
      </div>
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{request.message}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Accept the mentorship request about ${request.topic}`} disabled={respond.isPending} onClick={() => respond.mutate("accepted")} className={btnPrimary}>
          Accept — connect in Check-In
        </button>
        <button type="button" aria-label={`Decline the mentorship request about ${request.topic}`} disabled={respond.isPending} onClick={() => respond.mutate("declined")} className={btnGhost}>
          Decline
        </button>
        {reported ? (
          <span className="self-center text-sm font-semibold text-[var(--amber)]" role="status">Reported to moderation.</span>
        ) : (
          <button type="button" aria-label={`Report the mentorship request about ${request.topic}`} disabled={report.isPending} onClick={() => report.mutate()} className="self-center text-sm font-bold text-[var(--red)]">
            Report
          </button>
        )}
      </div>
      {respond.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not answer that request. Try again.</p> : null}
      {report.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not send that report. Try again.</p> : null}
    </article>
  );
}

function ConnectionCard({ request, go }: { request: MemberMentorRequest; go: (v: View) => void }) {
  const queryClient = useQueryClient();
  const [confirmEnd, setConfirmEnd] = useState(false);
  const end = useMutation({
    mutationFn: () => api.endMentorship({ id: request.id }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["mentorRequests"] });
      void queryClient.invalidateQueries({ queryKey: ["mentors"] });
      void queryClient.invalidateQueries({ queryKey: ["checkins"] });
    },
  });
  return (
    <article className="rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="official">CONNECTED</Badge>
        <Badge>{request.topic}</Badge>
        <span className="text-sm text-[var(--dim)]">
          Mentor: {request.mentorDisplayName}
          {request.mentorBranch ? ` · ${request.mentorBranch}` : ""}
          {request.mentorJobLabel ? ` · ${request.mentorJobLabel}` : ""}
        </span>
      </div>
      <p className="mt-2 text-sm text-[var(--dim)]">
        This mentorship lives in Check-In as a private squad named for it — that&apos;s where you talk. No contact
        details were exchanged, and none are needed.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-label={`Open Check-In for the mentorship about ${request.topic}`} onClick={() => go("checkin")} className={btnPrimary}>
          Open Check-In
        </button>
        {confirmEnd ? (
          <>
            <button type="button" aria-label={`Confirm ending the mentorship about ${request.topic}`} disabled={end.isPending} onClick={() => end.mutate()} className={btnGhost}>
              Confirm — end it
            </button>
            <button type="button" aria-label="Keep the mentorship" onClick={() => setConfirmEnd(false)} className={btnGhost}>
              Keep it
            </button>
          </>
        ) : (
          <button type="button" aria-label={`End the mentorship about ${request.topic}`} onClick={() => setConfirmEnd(true)} className={btnGhost}>
            End mentorship
          </button>
        )}
      </div>
      {end.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not end that mentorship. Try again.</p> : null}
    </article>
  );
}

function OutgoingRequestRow({ request }: { request: MemberMentorRequest }) {
  const queryClient = useQueryClient();
  const [reported, setReported] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const report = useMutation({
    mutationFn: () => api.reportMentorRequest({ id: request.id }),
    onSuccess: () => setReported(true),
  });
  const end = useMutation({
    mutationFn: () => api.endMentorship({ id: request.id }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["mentorRequests"] });
      void queryClient.invalidateQueries({ queryKey: ["checkins"] });
    },
  });
  const tone =
    request.status === "accepted" ? "official" : request.status === "pending" ? "amber" : "plain";
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={tone}>{request.status.toUpperCase()}</Badge>
        <span className="text-sm text-[var(--dim)]">
          To {request.mentorDisplayName} · {request.topic}
        </span>
      </div>
      <p className="mt-1 text-base text-[var(--text)]">{request.message}</p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {request.status === "accepted" ? (
          confirmEnd ? (
            <>
              <button type="button" aria-label={`Confirm ending your mentorship with ${request.mentorDisplayName}`} disabled={end.isPending} onClick={() => end.mutate()} className="text-sm font-bold text-[var(--red)]">
                Confirm — end it
              </button>
              <button type="button" aria-label="Keep the mentorship" onClick={() => setConfirmEnd(false)} className="text-sm font-bold text-[var(--dim)]">
                Keep it
              </button>
            </>
          ) : (
            <button type="button" aria-label={`End your mentorship with ${request.mentorDisplayName}`} onClick={() => setConfirmEnd(true)} className="text-sm font-bold text-[var(--red)]">
              End mentorship
            </button>
          )
        ) : null}
        {request.status === "pending" || request.status === "accepted" ? (
          reported ? (
            <span className="text-sm font-semibold text-[var(--amber)]" role="status">Reported to moderation.</span>
          ) : (
            <button type="button" aria-label={`Report your request to ${request.mentorDisplayName}`} disabled={report.isPending} onClick={() => report.mutate()} className="text-sm font-bold text-[var(--red)]">
              Report
            </button>
          )
        ) : null}
      </div>
      {end.isError ? <p className="mt-1 text-sm text-[var(--red)]">Could not end that mentorship. Try again.</p> : null}
    </article>
  );
}

function MentorBrowseCard({ mentor, isOwn }: { mentor: MemberMentor; isOwn: boolean }) {
  const queryClient = useQueryClient();
  const [requestOpen, setRequestOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reported, setReported] = useState(false);
  const [topic, setTopic] = useState<MentorTopic>(mentor.topics[0] as MentorTopic);
  const [message, setMessage] = useState("");
  const paused = mentor.availability !== "open";
  const jobLabel = [mentor.jobCode, mentor.jobTitle].filter(Boolean).join(" — ");
  const request = useMutation({
    mutationFn: () => api.requestMentor({ mentorId: mentor.id, topic, message }),
    onSuccess: () => {
      setSent(true);
      setRequestOpen(false);
      setMessage("");
      void queryClient.invalidateQueries({ queryKey: ["mentorRequests"] });
      void queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
  const report = useMutation({
    mutationFn: () => api.reportMentor({ id: mentor.id }),
    onSuccess: () => {
      setReported(true);
      void queryClient.invalidateQueries({ queryKey: ["mentors"] });
    },
  });
  return (
    <article className={`rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 ${paused ? "opacity-75" : ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={paused ? "amber" : "official"}>{paused ? "PAUSED" : "OPEN"}</Badge>
        {isOwn ? <Badge tone="amber">YOUR LISTING</Badge> : null}
        <span className="text-sm text-[var(--dim)]">
          {mentor.branch}
          {jobLabel ? ` · ${jobLabel}` : ""}
          {mentor.yearsService !== null ? ` · ${mentor.yearsService} yrs of service` : ""}
        </span>
      </div>
      <p className="font-display mt-2 text-lg font-bold text-[var(--text)]">{mentor.displayName}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {mentor.topics.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <p className="mt-2 whitespace-pre-wrap text-base text-[var(--text)]">{mentor.bio}</p>
      {paused ? (
        <p className="mt-3 text-sm font-semibold text-[var(--amber)]">
          Paused — this mentor isn&apos;t taking new requests right now.
        </p>
      ) : sent ? (
        <p className="mt-3 text-sm font-semibold text-[var(--accent)]" role="status">
          Request sent. When {mentor.displayName} accepts, you&apos;ll connect in Check-In — watch Your Connections
          above.
        </p>
      ) : requestOpen ? (
        <form
          className="mt-3 space-y-3 border-t border-[var(--border)] pt-3"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            request.mutate();
          }}
        >
          <div>
            <label htmlFor={`mentor-req-topic-${mentor.id}`} className={labelCls}>What do you want help with?</label>
            <select id={`mentor-req-topic-${mentor.id}`} aria-label={`Request topic for ${mentor.displayName}`} value={topic} onChange={(e) => setTopic(e.target.value as MentorTopic)} className={inputCls}>
              {mentor.topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`mentor-req-msg-${mentor.id}`} className={labelCls}>A short intro</label>
            <textarea id={`mentor-req-msg-${mentor.id}`} aria-label={`Intro message to ${mentor.displayName}`} value={message} onChange={(e) => setMessage(e.target.value)} required minLength={10} maxLength={800} rows={3} className={inputCls} placeholder="Where you are, what you're facing, what you're hoping to learn. No phone, email, or social handles — contact stays inside the app." />
          </div>
          {request.isError ? (
            <p className="text-sm text-[var(--red)]">
              {request.error instanceof Error ? request.error.message : "Could not send that request. Try again."}
            </p>
          ) : null}
          <div className="flex gap-2">
            <button type="submit" aria-label={`Send mentorship request to ${mentor.displayName}`} disabled={request.isPending} className={btnPrimary}>
              {request.isPending ? "Sending…" : "Send request"}
            </button>
            <button type="button" aria-label={`Cancel request to ${mentor.displayName}`} onClick={() => setRequestOpen(false)} className={btnGhost}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button type="button" aria-label={`Request mentorship from ${mentor.displayName}`} onClick={() => setRequestOpen(true)} className={btnPrimary}>
            Request mentorship
          </button>
          {reported ? (
            <span className="text-sm font-semibold text-[var(--amber)]" role="status">
              Reported — this listing is back in the review queue.
            </span>
          ) : (
            <button type="button" aria-label={`Report mentor listing by ${mentor.displayName}`} disabled={report.isPending} onClick={() => report.mutate()} className="text-sm font-bold text-[var(--red)]">
              Report this listing
            </button>
          )}
        </div>
      )}
      {report.isError ? <p className="mt-2 text-sm text-[var(--red)]">Could not send that report. Try again.</p> : null}
    </article>
  );
}

function FitnessView({ profile }: { profile: Profile }) {
  const queryClient = useQueryClient();
  const [path, setPath] = useState<"test" | "dream" | null>(null);
  // Test prep state
  const [branch, setBranch] = useState(BRANCHES.includes(profile.branch as (typeof BRANCHES)[number]) ? profile.branch : "Marine Corps");
  const [testName, setTestName] = useState((BRANCH_TESTS[branch] ?? ["USMC PFT"])[0] ?? "USMC PFT");
  const [testDate, setTestDate] = useState("");
  const [baseline, setBaseline] = useState("");
  const [target, setTarget] = useState("");
  // Shared state
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [equipment, setEquipment] = useState("gym");
  const [limitations, setLimitations] = useState("");
  // Dream body state
  const [goal, setGoal] = useState("recomp");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [age, setAge] = useState("");
  const [currentBody, setCurrentBody] = useState("average");
  const [desiredBody, setDesiredBody] = useState("athletic");
  const [activity, setActivity] = useState("moderate");
  const [weightInput, setWeightInput] = useState("");

  const latestQ = useQuery({ queryKey: ["latestPlan"], queryFn: () => api.getLatestPlan({}) });
  const logsQ = useQuery({ queryKey: ["workoutLogs"], queryFn: () => api.listWorkoutLogs({ limit: 50 }) });
  const weightsQ = useQuery({ queryKey: ["weightLogs"], queryFn: () => api.listWeightLogs({ limit: 50 }) });

  const generate = useMutation({
    mutationFn: (args: Parameters<typeof api.generatePlan>[0]) => api.generatePlan(args),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["latestPlan"] }),
  });
  const addWeight = useMutation({
    mutationFn: () => api.addWeightLog({ weightLb: Number(weightInput) }),
    onSuccess: () => {
      setWeightInput("");
      void queryClient.invalidateQueries({ queryKey: ["weightLogs"] });
    },
  });

  const latest = latestQ.data?.plan;
  const latestAsResult: PlanResult | null =
    generate.data ??
    (latest
      ? {
          planId: latest.id,
          days: latest.days,
          caloriesLow: latest.caloriesLow,
          caloriesHigh: latest.caloriesHigh,
          proteinLow: latest.proteinLow,
          proteinHigh: latest.proteinHigh,
          sanityFlag: latest.sanityFlag,
          testEvents: [],
        }
      : null);

  return (
    <div>
      <SectionHead title="Fitness Coach" sub="Two paths. Test Prep builds around your branch's actual fitness test. Other builds the physique you want. This coach is a training aid, not medical care — pain or injury flags mean get checked, not push through." />

      <div className="grid grid-cols-2 gap-3" role="group" aria-label="Choose fitness path">
        <button type="button" aria-label="Choose Test Prep path" aria-pressed={path === "test"} onClick={() => setPath("test")} className={`rounded-[var(--radius)] border-2 p-4 text-left ${path === "test" ? "border-[var(--accent)] bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]"}`}>
          <span className="font-display block text-lg font-bold text-[var(--text)]">Test Prep</span>
          <span className="mt-1 block text-sm text-[var(--dim)]">Pick your branch, then its test. The plan trains those exact events.</span>
        </button>
        <button type="button" aria-label="Choose Other Dream Body path" aria-pressed={path === "dream"} onClick={() => setPath("dream")} className={`rounded-[var(--radius)] border-2 p-4 text-left ${path === "dream" ? "border-[var(--accent)] bg-[var(--surface)]" : "border-[var(--border)] bg-[var(--surface)]"}`}>
          <span className="font-display block text-lg font-bold text-[var(--text)]">Other — Dream Body</span>
          <span className="mt-1 block text-sm text-[var(--dim)]">No test. Set a goal weight and the body type you want; get a plan plus calorie/protein targets.</span>
        </button>
      </div>

      {path === "test" ? (
        <form
          className="mt-4 space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            generate.mutate({ path: "test", branch, testName, testDate, baseline, target, goal: "", currentBody: "", desiredBody: "", activity: "moderate", daysPerWeek, equipment, limitations });
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="fit-branch" className={labelCls}>1. Branch</label>
              <select
                id="fit-branch"
                aria-label="Branch for fitness test"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                  setTestName((BRANCH_TESTS[e.target.value] ?? [])[0] ?? "");
                }}
                className={inputCls}
              >
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="fit-test" className={labelCls}>2. Fitness test</label>
              <select id="fit-test" aria-label="Fitness test" value={testName} onChange={(e) => setTestName(e.target.value)} className={inputCls}>
                {(BRANCH_TESTS[branch] ?? []).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="fit-date" className={labelCls}>Test date</label>
            <input id="fit-date" aria-label="Test date" type="date" value={testDate} onChange={(e) => setTestDate(e.target.value)} className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="fit-baseline" className={labelCls}>Current baseline</label>
              <input id="fit-baseline" aria-label="Current baseline scores" value={baseline} onChange={(e) => setBaseline(e.target.value)} className={inputCls} placeholder="e.g., 12 pull-ups, plank 2:30, run 22:10" />
            </div>
            <div>
              <label htmlFor="fit-target" className={labelCls}>Target</label>
              <input id="fit-target" aria-label="Target score" value={target} onChange={(e) => setTarget(e.target.value)} className={inputCls} placeholder="e.g., 1st class, 270+" />
            </div>
          </div>
          <SharedFitnessFields daysPerWeek={daysPerWeek} setDaysPerWeek={setDaysPerWeek} equipment={equipment} setEquipment={setEquipment} limitations={limitations} setLimitations={setLimitations} />
          <button type="submit" aria-label="Generate test prep plan" disabled={generate.isPending} className={`${btnPrimary} w-full`}>
            {generate.isPending ? "Building your week…" : "Generate my 1-week test plan"}
          </button>
        </form>
      ) : null}

      {path === "dream" ? (
        <form
          className="mt-4 space-y-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            generate.mutate({
              path: "dream",
              branch: "",
              testName: "",
              testDate: "",
              baseline: "",
              target: "",
              goal,
              currentWeightLb: Number(currentWeight) || undefined,
              goalWeightLb: Number(goalWeight) || undefined,
              heightIn: Number(heightIn) || undefined,
              age: Number(age) || undefined,
              currentBody,
              desiredBody,
              activity,
              daysPerWeek,
              equipment,
              limitations,
            });
          }}
        >
          <div>
            <label htmlFor="dream-goal" className={labelCls}>Goal</label>
            <select id="dream-goal" aria-label="Dream body goal" value={goal} onChange={(e) => setGoal(e.target.value)} className={inputCls}>
              <option value="muscle">Build muscle</option>
              <option value="fatloss">Lose fat</option>
              <option value="recomp">Recomp — both at once</option>
              <option value="athletic">Athletic performance</option>
              <option value="health">General health</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="dream-current" className={labelCls}>Current weight (lb)</label>
              <input id="dream-current" aria-label="Current weight in pounds" type="number" min={60} max={600} value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} required className={inputCls} />
            </div>
            <div>
              <label htmlFor="dream-goalw" className={labelCls}>Goal weight (lb)</label>
              <input id="dream-goalw" aria-label="Goal weight in pounds" type="number" min={60} max={600} value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} required className={inputCls} />
            </div>
            <div>
              <label htmlFor="dream-height" className={labelCls}>Height (inches)</label>
              <input id="dream-height" aria-label="Height in inches" type="number" min={48} max={96} value={heightIn} onChange={(e) => setHeightIn(e.target.value)} required className={inputCls} placeholder="e.g., 70 = 5'10&quot;" />
            </div>
            <div>
              <label htmlFor="dream-age" className={labelCls}>Age</label>
              <input id="dream-age" aria-label="Age" type="number" min={16} max={80} value={age} onChange={(e) => setAge(e.target.value)} className={inputCls} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="dream-cbody" className={labelCls}>Current body type</label>
              <select id="dream-cbody" aria-label="Current body type" value={currentBody} onChange={(e) => setCurrentBody(e.target.value)} className={inputCls}>
                {["lean", "average", "athletic", "muscular", "heavier"].map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="dream-dbody" className={labelCls}>Desired body type</label>
              <select id="dream-dbody" aria-label="Desired body type" value={desiredBody} onChange={(e) => setDesiredBody(e.target.value)} className={inputCls}>
                {["slimmer", "lean", "athletic", "muscular", "bigger"].map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="dream-activity" className={labelCls}>Activity level</label>
            <select id="dream-activity" aria-label="Activity level" value={activity} onChange={(e) => setActivity(e.target.value)} className={inputCls}>
              <option value="sedentary">Sedentary — desk most of the day</option>
              <option value="light">Light — on my feet some</option>
              <option value="moderate">Moderate — physical job / regular PT</option>
              <option value="active">Active — heavy physical work daily</option>
            </select>
          </div>
          <SharedFitnessFields daysPerWeek={daysPerWeek} setDaysPerWeek={setDaysPerWeek} equipment={equipment} setEquipment={setEquipment} limitations={limitations} setLimitations={setLimitations} />
          <button type="submit" aria-label="Generate dream body plan" disabled={generate.isPending} className={`${btnPrimary} w-full`}>
            {generate.isPending ? "Building your week…" : "Generate my dream body plan"}
          </button>
        </form>
      ) : null}

      {generate.isError ? <p className="mt-3 text-base text-[var(--red)]">The coach could not build that plan. Check the numbers and try again.</p> : null}
      {latestAsResult ? <PlanDisplay result={latestAsResult} /> : null}

      <section aria-label="Weight log" className="mt-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Weight Log</h3>
        <form
          className="mt-2 flex gap-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (Number(weightInput) > 0) addWeight.mutate();
          }}
        >
          <div className="flex-1">
            <label htmlFor="weight-input" className={labelCls}>Today's weight (lb)</label>
            <input id="weight-input" aria-label="Weight in pounds" type="number" min={60} max={600} step={0.1} value={weightInput} onChange={(e) => setWeightInput(e.target.value)} className={inputCls} />
          </div>
          <button type="submit" aria-label="Log weight" disabled={addWeight.isPending || !weightInput} className={`${btnPrimary} self-end`}>
            Log
          </button>
        </form>
        {weightsQ.data && weightsQ.data.logs.length > 0 ? (
          <ul className="mt-3 space-y-1 text-base text-[var(--text)]">
            {weightsQ.data.logs.slice(0, 8).map((w) => (
              <li key={w.id} className="flex justify-between rounded bg-[var(--surface2)] px-3 py-2">
                <span>{w.weightLb} lb</span>
                <span className="text-sm text-[var(--dim)]">{new Date(w.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-[var(--dim)]">No weigh-ins yet. Log the first one to start the trend.</p>
        )}
      </section>

      <section aria-label="Workout history" className="mt-4">
        <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Workout History</h3>
        {logsQ.data && logsQ.data.logs.length > 0 ? (
          <ul className="space-y-2">
            {logsQ.data.logs.slice(0, 10).map((l) => (
              <li key={l.id} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3">
                <p className="font-display text-base font-bold text-[var(--text)]">{l.title}</p>
                {l.detail ? <p className="text-sm text-[var(--dim)]">{l.detail}</p> : null}
                <p className="text-sm text-[var(--dim)]">{new Date(l.createdAt).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[var(--dim)]">No workouts logged yet. Generate a plan above and log your first session.</p>
        )}
      </section>
      <p className="mt-4 text-sm text-[var(--dim)]">
        Safety: this coach is a training aid, not medical care. Calorie and protein figures are estimates. If something
        hurts — sharp pain, numbness, chest pain, dizziness — stop and get checked by medical before training through it.
      </p>
    </div>
  );
}

function SharedFitnessFields({
  daysPerWeek,
  setDaysPerWeek,
  equipment,
  setEquipment,
  limitations,
  setLimitations,
}: {
  daysPerWeek: number;
  setDaysPerWeek: (n: number) => void;
  equipment: string;
  setEquipment: (s: string) => void;
  limitations: string;
  setLimitations: (s: string) => void;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="fit-days" className={labelCls}>Days per week</label>
          <select id="fit-days" aria-label="Training days per week" value={daysPerWeek} onChange={(e) => setDaysPerWeek(Number(e.target.value))} className={inputCls}>
            {[2, 3, 4, 5, 6].map((d) => (
              <option key={d} value={d}>{d} days</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fit-equip" className={labelCls}>Equipment you actually have</label>
          <select id="fit-equip" aria-label="Available equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} className={inputCls}>
            {EQUIPMENT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="fit-limits" className={labelCls}>Injuries / limitations (optional)</label>
        <input id="fit-limits" aria-label="Injuries or limitations" value={limitations} onChange={(e) => setLimitations(e.target.value)} className={inputCls} placeholder="e.g., bad left knee, no running for 2 weeks" />
      </div>
    </>
  );
}

/* ---------------------------------- News ---------------------------------- */

type NewsTab = "foryou" | "all" | "branch" | "pay" | "veterans" | "saved";

function StoryCard({ story }: { story: Story }) {
  const queryClient = useQueryClient();
  const bookmark = useMutation({
    mutationFn: () => api.toggleBookmark({ storyId: story.id }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["news"] }),
  });
  return (
    <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={story.sourceType === "OFFICIAL" ? "official" : "amber"}>{story.sourceType}</Badge>
        <span className="text-sm font-semibold text-[var(--dim)]">{story.sourceName}</span>
        {story.publishedLabel ? <span className="text-sm text-[var(--dim)]">· {story.publishedLabel}</span> : null}
        <span className="text-sm text-[var(--dim)]">· {story.category}</span>
      </div>
      <h3 className="font-display mt-2 text-lg font-bold leading-snug text-[var(--text)]">
        <a href={story.url} target="_blank" rel="noreferrer" aria-label={`Read at source: ${story.headline}`} className="underline-offset-2 hover:underline">
          {story.headline}
        </a>
      </h3>
      <p className="mt-1 text-base text-[var(--text)]">{story.summary}</p>
      {story.affectsYou ? (
        <p className="mt-2 rounded bg-[var(--amber-bg)] px-3 py-2 text-sm font-semibold text-[var(--amber)]">Affects you: {story.affectsYou}</p>
      ) : null}
      <div className="mt-3 flex gap-2">
        <a href={story.url} target="_blank" rel="noreferrer" aria-label={`Open original story: ${story.headline}`} className={btnGhost}>
          Read at source ↗
        </a>
        <button
          type="button"
          aria-label={story.bookmarked ? `Remove bookmark from ${story.headline}` : `Bookmark ${story.headline}`}
          aria-pressed={story.bookmarked}
          disabled={bookmark.isPending}
          onClick={() => bookmark.mutate()}
          className={btnGhost}
        >
          {story.bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
        </button>
      </div>
    </article>
  );
}

function NewsView({ profile }: { profile: Profile }) {
  const [tab, setTab] = useState<NewsTab>("foryou");
  const [refreshNote, setRefreshNote] = useState("");
  const newsQ = useQuery({ queryKey: ["news"], queryFn: () => api.getNews({}) });
  const refresh = useMutation({
    mutationFn: () => api.refreshNews({}),
    onSuccess: (data) => {
      setRefreshNote(data.added > 0 ? `Refresh complete — ${data.added} new ${data.added === 1 ? "story" : "stories"} from the verified source list.` : "Refresh complete — no new stories from the verified sources right now.");
    },
    onError: () => setRefreshNote("Refresh could not reach the news sources. Showing the latest saved stories."),
  });

  const stories = newsQ.data?.stories ?? [];
  const messages = (newsQ.data?.officialMessages ?? []).filter(
    (s) => profile.branch === "Marine Corps" || s.branch === profile.branch || s.branch === "All",
  );
  const visible = stories.filter((s) => {
    switch (tab) {
      case "foryou":
        return s.branch === profile.branch || s.branch === "All" || s.affectsYou !== "";
      case "all":
        return true;
      case "branch":
        return s.branch === profile.branch || s.branch === "All";
      case "pay":
        return s.category === "Pay & Benefits";
      case "veterans":
        return s.category === "Veterans & VA";
      case "saved":
        return s.bookmarked;
    }
  });

  const tabs: { key: NewsTab; label: string }[] = [
    { key: "foryou", label: "For You" },
    { key: "all", label: "All Military" },
    { key: "branch", label: "By Branch" },
    { key: "pay", label: "Pay & Benefits" },
    { key: "veterans", label: "Veterans & VA" },
    { key: "saved", label: "Bookmarks" },
  ];

  return (
    <div>
      <SectionHead
        title="Military News"
        sub="Verified sources only — official (.mil, Defense.gov, DVIDS, VA, DFAS, TRICARE) and independent (Military Times, Stars and Stripes, Task & Purpose, Military.com), every story badged. Headlines and summaries link out to the original; full articles stay with their publishers."
      />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" aria-label="Refresh news feed" disabled={refresh.isPending} onClick={() => refresh.mutate()} className={btnPrimary}>
          {refresh.isPending ? "Refreshing…" : "Refresh news"}
        </button>
        {newsQ.data?.fetchedAt ? (
          <span className="text-sm text-[var(--dim)]">Latest story pulled {new Date(newsQ.data.fetchedAt).toLocaleDateString()}</span>
        ) : null}
      </div>
      {refreshNote ? <p className="mb-3 text-sm font-semibold text-[var(--accent)]" role="status">{refreshNote}</p> : null}

      {messages.length > 0 ? (
        <section aria-label="Official messages" className="mb-4 rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--surface)] p-4">
          <p className="font-display text-base font-bold text-[var(--text)]">OFFICIAL MESSAGES — {profile.branch.toUpperCase()}</p>
          <ul className="mt-2 space-y-2">
            {messages.slice(0, 4).map((m) => (
              <li key={m.id} className="text-base">
                <a href={m.url} target="_blank" rel="noreferrer" aria-label={`Open official message: ${m.headline}`} className="font-semibold text-[var(--accent)] underline">
                  {m.headline}
                </a>
                <span className="text-sm text-[var(--dim)]"> · {m.publishedLabel}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="News feed filters">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            aria-label={`Show ${t.label}`}
            aria-pressed={tab === t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${tab === t.key ? "bg-[var(--accent)] text-[var(--accent-text)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {newsQ.isPending ? <p className="text-base text-[var(--dim)]">Loading the feed…</p> : null}
      {newsQ.isError ? <p className="text-base text-[var(--red)]">The feed could not load. Try the refresh button.</p> : null}
      <div className="space-y-3">
        {visible.map((s) => (
          <StoryCard key={s.id} story={s} />
        ))}
      </div>
      {!newsQ.isPending && visible.length === 0 ? (
        <p className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
          Nothing in this tab yet. {tab === "saved" ? "Bookmark a story and it will wait for you here." : "Try Refresh news, or check another tab."}
        </p>
      ) : null}
      <p className="mt-4 text-sm text-[var(--dim)]">Alerts in a production version are opt-in and high-impact only — pay/benefits changes and your branch's policy messages. No breaking-news spam.</p>
    </div>
  );
}

/* -------------------------------- Check-In -------------------------------- */
// Squads here run on the claim model: a squad's invite code is the only
// way in. A member shares the code or the join link; the other person
// signs in as themselves and claims their own seat. Nobody is added by
// typing a name — there is no such control anywhere in this view.

type SquadsData = ApiResponse<typeof api, "getSquads">;
type Squad = SquadsData["squads"][number];
type SquadMember = Squad["members"][number];

function joinedDateLabel(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function squadJoinLink(formattedCode: string): string {
  const raw = formattedCode.replace(/[^A-Za-z0-9]/g, "");
  return `${window.location.origin}${window.location.pathname}#join/${raw}`;
}

function CopyTextButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      className={btnGhost}
      onClick={() => {
        void (async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setFailed(false);
          } catch {
            setCopied(false);
            setFailed(true);
          }
        })();
      }}
    >
      {copied ? "Copied" : failed ? "Copy failed — long-press to copy" : "Copy"}
    </button>
  );
}

function SquadCard({ squad }: { squad: Squad }) {
  const queryClient = useQueryClient();
  const [confirmRegen, setConfirmRegen] = useState(false);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const [confirmRemoveId, setConfirmRemoveId] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const isLeader = squad.myRole === "Leader";
  const othersRemain = squad.members.some((m) => !m.isYou);

  const invalidate = () => void queryClient.invalidateQueries({ queryKey: ["squads"] });
  const actionError = (e: unknown) =>
    setNotice(e instanceof Error ? e.message : "Something went wrong. Try again.");

  const regen = useMutation({
    mutationFn: () => api.regenerateSquadInvite({ squadId: squad.id }),
    onSuccess: (r) => {
      setConfirmRegen(false);
      setNotice(`New invite code: ${r.inviteCode}. The old code stopped working the moment this one was made.`);
      invalidate();
    },
    onError: actionError,
  });
  const pauseToggle = useMutation({
    mutationFn: (paused: boolean) => api.setSquadInvitesPaused({ squadId: squad.id, paused }),
    onSuccess: (_r, paused) => {
      setNotice(
        paused
          ? "Invites paused. The code still identifies this squad, but every claim is refused until you resume."
          : "Invites resumed. Anyone with the current code can claim a seat again.",
      );
      invalidate();
    },
    onError: actionError,
  });
  const removeMember = useMutation({
    mutationFn: (membershipId: number) => api.removeSquadMember({ squadId: squad.id, membershipId }),
    onSuccess: () => {
      setConfirmRemoveId(null);
      setNotice("Removed from the roster. They would need the current invite code to claim a seat again.");
      invalidate();
    },
    onError: actionError,
  });
  const leave = useMutation({
    mutationFn: () => api.leaveSquad({ squadId: squad.id }),
    onSuccess: () => invalidate(),
    onError: actionError,
  });

  return (
    <section aria-label={`Squad ${squad.name}`} className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">{squad.name}</h3>
        <Badge tone={isLeader ? "official" : "plain"}>{isLeader ? "You lead this squad" : "You're a member"}</Badge>
        <Badge>{squad.members.length} {squad.members.length === 1 ? "member" : "members"}</Badge>
        {squad.invitesPaused ? <Badge tone="amber">Invites paused</Badge> : null}
      </div>

      <div className="mt-4 rounded bg-[var(--surface2)] p-4">
        <p className="text-sm text-[var(--text)]">Share this with your people — they join by claiming their own seat.</p>
        <p className="mt-2 flex flex-wrap items-center gap-3">
          <span className="font-display text-2xl font-bold tracking-[0.2em] text-[var(--text)]">{squad.inviteCode}</span>
          <CopyTextButton text={squad.inviteCode} label={`Copy invite code for ${squad.name}`} />
        </p>
        <p className="mt-2 break-all text-sm text-[var(--dim)]">{squadJoinLink(squad.inviteCode)}</p>
        <div className="mt-1">
          <CopyTextButton text={squadJoinLink(squad.inviteCode)} label={`Copy join link for ${squad.name}`} />
        </div>
        <p className="mt-2 text-sm text-[var(--dim)]">
          Send the code or the link however you normally reach them. Opening the link lands on Join a Squad with the
          code filled in. There is no way to add someone by name — a seat exists only when its owner claims it.
        </p>
      </div>

      {isLeader ? (
        <div className="mt-4 border-t border-[var(--border)] pt-3">
          <p className={labelCls}>Leader controls</p>
          {confirmRegen ? (
            <div className="rounded bg-[var(--amber-bg)] p-3">
              <p className="text-sm font-semibold text-[var(--amber)]">
                Regenerate the code? The old code stops working immediately — anyone holding it can no longer
                preview or join. Current members keep their seats.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button type="button" aria-label={`Confirm regenerate invite code for ${squad.name}`} disabled={regen.isPending} onClick={() => regen.mutate()} className={btnPrimary}>
                  {regen.isPending ? "Regenerating…" : "Yes — regenerate"}
                </button>
                <button type="button" aria-label="Cancel regenerate invite code" onClick={() => setConfirmRegen(false)} className={btnGhost}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <button type="button" aria-label={`Regenerate invite code for ${squad.name}`} onClick={() => setConfirmRegen(true)} className={btnGhost}>
                Regenerate code
              </button>
              {squad.invitesPaused ? (
                <button type="button" aria-label={`Resume invites for ${squad.name}`} disabled={pauseToggle.isPending} onClick={() => pauseToggle.mutate(false)} className={btnGhost}>
                  Resume invites
                </button>
              ) : (
                <button type="button" aria-label={`Pause invites for ${squad.name}`} disabled={pauseToggle.isPending} onClick={() => pauseToggle.mutate(true)} className={btnGhost}>
                  Pause invites
                </button>
              )}
            </div>
          )}
        </div>
      ) : null}

      <h4 className="font-display mt-4 text-base font-bold text-[var(--text)]">Roster</h4>
      <ul className="mt-2 space-y-2">
        {squad.members.map((m: SquadMember) => (
          <li key={m.membershipId} className="rounded bg-[var(--surface2)] px-3 py-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-base text-[var(--text)]">
                <span className="font-semibold">{m.displayName || "Battle Book member"}</span>
                {m.isYou ? <span className="text-sm text-[var(--dim)]"> (you)</span> : null}
              </span>
              <span className="flex items-center gap-2">
                <Badge tone={m.role === "Leader" ? "official" : "plain"}>{m.role}</Badge>
                {isLeader && !m.isYou && m.role !== "Leader" ? (
                  <button
                    type="button"
                    aria-label={`Remove ${m.displayName || "member"} from ${squad.name}`}
                    onClick={() => setConfirmRemoveId(confirmRemoveId === m.membershipId ? null : m.membershipId)}
                    className="text-sm font-bold text-[var(--red)]"
                  >
                    Remove
                  </button>
                ) : null}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-[var(--dim)]">
              Joined {joinedDateLabel(m.joinedAt)}
              {m.joinedVia === "invite" ? " · joined by invite" : ""}
              {m.joinedVia === "created" ? " · created this squad" : ""}
              {m.joinedVia === "legacy" ? " · in this squad since before invite codes" : ""}
            </p>
            {confirmRemoveId === m.membershipId ? (
              <div className="mt-2 rounded bg-[var(--red-bg)] p-3">
                <p className="text-sm font-semibold text-[var(--red)]">
                  Remove {m.displayName || "this member"} from {squad.name}? Their seat is deleted; to come back
                  they would claim a new seat with the current invite code.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <button type="button" aria-label={`Confirm remove ${m.displayName || "member"} from ${squad.name}`} disabled={removeMember.isPending} onClick={() => removeMember.mutate(m.membershipId)} className={btnPrimary}>
                    {removeMember.isPending ? "Removing…" : "Yes — remove"}
                  </button>
                  <button type="button" aria-label="Cancel remove member" onClick={() => setConfirmRemoveId(null)} className={btnGhost}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      {confirmLeave ? (
        <div className="mt-3 rounded bg-[var(--amber-bg)] p-3">
          <p className="text-sm font-semibold text-[var(--amber)]">
            {isLeader && othersRemain
              ? `Leave ${squad.name}? You give up the leader's seat — the earliest-joined member becomes leader, and you'd need the current invite code to claim a seat again.`
              : isLeader
                ? `Leave ${squad.name}? You're its last member — leaving closes the squad and its invite code dies with it.`
                : `Leave ${squad.name}? Your seat is deleted; to come back you'd claim a new seat with the current invite code.`}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" aria-label={`Confirm leave ${squad.name}`} disabled={leave.isPending} onClick={() => leave.mutate()} className={btnPrimary}>
              {leave.isPending ? "Leaving…" : "Yes — leave"}
            </button>
            <button type="button" aria-label="Cancel leave squad" onClick={() => setConfirmLeave(false)} className={btnGhost}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button type="button" aria-label={`Leave ${squad.name}`} onClick={() => setConfirmLeave(true)} className="mt-3 text-sm font-bold text-[var(--red)]">
          Leave this squad
        </button>
      )}
      {notice ? <p className="mt-2 text-sm font-semibold text-[var(--accent)]" role="status">{notice}</p> : null}
    </section>
  );
}

function JoinSquadSection({ joinSeed }: { joinSeed: { code: string; n: number } | null }) {
  const queryClient = useQueryClient();
  const [code, setCode] = useState("");
  const [preview, setPreview] = useState<ApiResponse<typeof api, "previewSquadInvite"> | null>(null);
  const [claimMsg, setClaimMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const previewMut = useMutation({
    mutationFn: (c: string) => api.previewSquadInvite({ code: c }),
    onSuccess: (r) => {
      setPreview(r);
      setClaimMsg(null);
    },
    onError: () =>
      setPreview({
        ok: false,
        message: "That code couldn't be checked just now. Try again in a moment.",
        squad: null,
      }),
  });
  const claimMut = useMutation({
    mutationFn: (c: string) => api.claimSquadSeat({ code: c }),
    onSuccess: (r) => {
      setClaimMsg({ ok: r.ok, text: r.message });
      if (r.ok) {
        setPreview(null);
        setCode("");
        void queryClient.invalidateQueries({ queryKey: ["squads"] });
      }
    },
    onError: () => setClaimMsg({ ok: false, text: "Your seat couldn't be claimed just now. Try again in a moment." }),
  });

  // Arriving via a join link: the code is prefilled and previewed.
  const seedNonce = joinSeed?.n ?? 0;
  const seedCode = joinSeed?.code ?? "";
  const [handledSeed, setHandledSeed] = useState(0);
  useEffect(() => {
    if (seedNonce && seedNonce !== handledSeed) {
      setHandledSeed(seedNonce);
      setCode(seedCode);
      previewMut.mutate(seedCode);
    }
    // previewMut is stable across renders for this check.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seedNonce, seedCode, handledSeed]);

  return (
    <section aria-label="Join a squad" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="font-display text-lg font-bold text-[var(--text)]">Join a Squad</h3>
      <p className="mt-1 text-sm text-[var(--dim)]">
        Got an invite code from someone in a squad? Enter it here. You'll see the squad before you join — and the
        seat you claim is yours, under your own profile. Nobody can add you by name, and you can't claim a seat for
        anyone else.
      </p>
      <form
        className="mt-3 flex flex-wrap gap-2"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (code.trim()) previewMut.mutate(code.trim());
        }}
      >
        <div className="min-w-40 flex-1">
          <label htmlFor="join-code" className={labelCls}>Invite code</label>
          <input
            id="join-code"
            aria-label="Squad invite code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setPreview(null);
              setClaimMsg(null);
            }}
            className={inputCls}
            placeholder="e.g., K7QX-4MND"
            autoComplete="off"
          />
        </div>
        <button type="submit" aria-label="Preview squad for this invite code" disabled={previewMut.isPending || !code.trim()} className={`${btnPrimary} self-end`}>
          {previewMut.isPending ? "Checking…" : "Preview squad"}
        </button>
      </form>

      {preview ? (
        <div className="mt-3 rounded bg-[var(--surface2)] p-4" role="status">
          {preview.squad ? (
            <>
              <p className="font-display text-lg font-bold text-[var(--text)]">{preview.squad.name}</p>
              <p className="mt-0.5 text-sm text-[var(--dim)]">
                Led by {preview.squad.leaderName} · {preview.squad.memberCount}{" "}
                {preview.squad.memberCount === 1 ? "member" : "members"} so far
              </p>
            </>
          ) : null}
          {preview.ok ? (
            <button
              type="button"
              aria-label={`Claim your seat in ${preview.squad?.name ?? "this squad"}`}
              disabled={claimMut.isPending}
              onClick={() => claimMut.mutate(code.trim())}
              className={`${btnPrimary} mt-3`}
            >
              {claimMut.isPending ? "Claiming…" : "Claim your seat"}
            </button>
          ) : (
            <p className="mt-2 text-sm font-semibold text-[var(--amber)]">{preview.message}</p>
          )}
        </div>
      ) : null}
      {claimMsg ? (
        <p className={`mt-3 text-sm font-semibold ${claimMsg.ok ? "text-[var(--accent)]" : "text-[var(--amber)]"}`} role="status">
          {claimMsg.text}
        </p>
      ) : null}
    </section>
  );
}

function CheckinView({ profile, joinSeed }: { profile: Profile; joinSeed: { code: string; n: number } | null }) {
  const queryClient = useQueryClient();
  const dataQ = useQuery({ queryKey: ["checkins"], queryFn: () => api.getCheckins({}) });
  const squadsQ = useQuery({ queryKey: ["squads"], queryFn: () => api.getSquads({}) });
  const [picked, setPicked] = useState<string | null>(null);
  const [returnDate, setReturnDate] = useState("");
  const [note, setNote] = useState("");
  const [squadName, setSquadName] = useState("");
  const [createMsg, setCreateMsg] = useState("");

  const today = dataQ.data?.checkins.find((c) => c.dayKey === todayKey());
  const status = (picked ?? today?.status ?? "good") as "good" | "rough" | "talk" | "dark";

  const save = useMutation({
    mutationFn: () =>
      api.saveCheckin({ dayKey: todayKey(), status, returnDate: status === "dark" ? returnDate : "", note }),
    onSuccess: () => void queryClient.invalidateQueries({ queryKey: ["checkins"] }),
  });
  const createSquad = useMutation({
    mutationFn: () => api.createSquad({ name: squadName.trim() }),
    onSuccess: (r) => {
      setSquadName("");
      setCreateMsg(
        `Squad created — you're its leader, and its invite code is ${r.inviteCode}. Share it from the squad card above; your people claim their own seats.`,
      );
      void queryClient.invalidateQueries({ queryKey: ["squads"] });
    },
    onError: (e) => setCreateMsg(e instanceof Error ? e.message : "That squad couldn't be created. Try again."),
  });

  const options: { key: "good" | "rough" | "talk" | "dark"; label: string; hint: string }[] = [
    { key: "good", label: "Good", hint: "Solid day. Squad sees green." },
    { key: "rough", label: "Rough day", hint: "Not great, not an emergency. Your buddy checks in." },
    { key: "talk", label: "Need to talk", hint: "Raises the ladder: your paired buddy is pinged first." },
    { key: "dark", label: "Going Dark", hint: "Off the grid on purpose — set a return date so nobody escalates early." },
  ];

  return (
    <div>
      <a
        href="tel:988"
        aria-label="Call 988 Suicide and Crisis Lifeline, Veterans press 1"
        className="mb-4 block rounded-[var(--radius)] bg-[var(--red)] p-4 text-center font-display text-lg font-bold text-white"
      >
        In crisis? Call 988 — Veterans press 1
      </a>
      <SectionHead
        title="Check-In"
        sub="Your squads only — people join by claiming a seat with a squad's invite code, never by being added. No strangers, no public feed, no location, ever."
      />

      <section aria-label="Today's check-in" className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <p className="font-display text-lg font-bold text-[var(--text)]">
          How are you today{profile.displayName ? `, ${profile.displayName}` : ""}?
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label="Choose today's status">
          {options.map((o) => (
            <button
              key={o.key}
              type="button"
              aria-label={`Set status ${o.label}`}
              aria-pressed={status === o.key}
              onClick={() => setPicked(o.key)}
              className={`rounded-[var(--radius)] border-2 p-3 text-left ${status === o.key ? "border-[var(--accent)] bg-[var(--surface2)]" : "border-[var(--border)]"}`}
            >
              <span className="font-display block text-base font-bold text-[var(--text)]">{o.label}</span>
              <span className="mt-0.5 block text-sm text-[var(--dim)]">{o.hint}</span>
            </button>
          ))}
        </div>
        {status === "dark" ? (
          <div className="mt-3">
            <label htmlFor="ci-return" className={labelCls}>Return date</label>
            <input id="ci-return" aria-label="Going dark return date" type="date" value={returnDate || today?.returnDate || ""} onChange={(e) => setReturnDate(e.target.value)} className={inputCls} />
          </div>
        ) : null}
        <div className="mt-3">
          <label htmlFor="ci-note" className={labelCls}>Note for your squad (optional)</label>
          <input id="ci-note" aria-label="Check-in note" value={note} onChange={(e) => setNote(e.target.value)} className={inputCls} placeholder="Anything your buddy should know" />
        </div>
        <button type="button" aria-label="Save today's check-in" disabled={save.isPending} onClick={() => save.mutate()} className={`${btnPrimary} mt-3 w-full`}>
          {save.isPending ? "Saving…" : today ? "Update today's check-in" : "Check in"}
        </button>
        {save.isSuccess ? <p className="mt-2 text-sm font-semibold text-[var(--accent)]" role="status">Saved. Your squad sees this status.</p> : null}
        {today && status === "talk" ? (
          <p className="mt-2 rounded bg-[var(--amber-bg)] p-3 text-sm font-semibold text-[var(--amber)]">
            You marked "Need to talk." Next rung on the ladder: your paired buddy reaches out. If nobody responds and
            things get worse, don't wait on the app — call a person, or 988 (Veterans press 1).
          </p>
        ) : null}
      </section>

      <section aria-label="Escalation ladder" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">How the ladder works</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-base text-[var(--text)]">
          <li>You check in daily. A missed check-in is a flag, not a verdict.</li>
          <li>"Need to talk" or a missed day → your paired buddy is the first call.</li>
          <li>No contact after the buddy tries → the squad is looped in.</li>
          <li>Real crisis, any time → 988 (Veterans press 1) or 911. The app never replaces a person.</li>
        </ol>
        <p className="mt-2 text-sm text-[var(--dim)]">Prototype honesty: squad rosters and invite claims are real in this build — a seat exists only when its owner claims it under their own profile. Live pings between members' devices arrive with production accounts.</p>
      </section>

      <div className="mt-6">
        <h3 className="font-display text-xl font-bold text-[var(--text)]">Your Squads</h3>
        {squadsQ.isPending ? (
          <p className="mt-2 text-sm text-[var(--dim)]">Loading your squads…</p>
        ) : squadsQ.isError ? (
          <p className="mt-2 text-sm text-[var(--red)]">Your squads couldn't load. Reopen Check-In to try again.</p>
        ) : (squadsQ.data?.squads ?? []).length === 0 ? (
          <p className="mt-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-base text-[var(--text)]">
            You're not in a squad yet. Create one below and share its invite code — or claim a seat in someone
            else's squad under Join a Squad.
          </p>
        ) : (
          (squadsQ.data?.squads ?? []).map((s) => <SquadCard key={s.id} squad={s} />)
        )}

        {(squadsQ.data?.mentorships ?? []).length > 0 ? (
          <section aria-label="Mentorship connections" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
            <h3 className="font-display text-lg font-bold text-[var(--text)]">Mentorship Connections</h3>
            <p className="mt-1 text-sm text-[var(--dim)]">
              Private pairs from Find a Mentor — just the two of you. Mentorship pairs have no invite code and no
              invite controls; manage them in Find a Mentor.
            </p>
            <ul className="mt-2 space-y-2">
              {(squadsQ.data?.mentorships ?? []).map((m) => (
                <li key={m.id} className="rounded bg-[var(--surface2)] px-3 py-2">
                  <span className="text-base font-semibold text-[var(--text)]">{m.name}</span>{" "}
                  <span className="text-sm text-[var(--dim)]">· {m.role} · private pair</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <section aria-label="Create a squad" className="mt-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <h3 className="font-display text-lg font-bold text-[var(--text)]">Start a Squad</h3>
        <p className="mt-1 text-sm text-[var(--dim)]">
          You lead the squads you start. Creating one makes only your seat — everyone else joins by claiming theirs
          with the squad's invite code.
        </p>
        <form
          className="mt-3 flex flex-wrap gap-2"
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (squadName.trim()) createSquad.mutate();
          }}
        >
          <div className="min-w-40 flex-1">
            <label htmlFor="sq-new-name" className={labelCls}>Squad name</label>
            <input id="sq-new-name" aria-label="New squad name" value={squadName} onChange={(e) => setSquadName(e.target.value)} className={inputCls} placeholder="e.g., Alpha Squad" maxLength={60} />
          </div>
          <button type="submit" aria-label="Create squad" disabled={createSquad.isPending || !squadName.trim()} className={`${btnPrimary} self-end`}>
            {createSquad.isPending ? "Creating…" : "Create squad"}
          </button>
        </form>
        {createMsg ? <p className="mt-2 text-sm font-semibold text-[var(--accent)]" role="status">{createMsg}</p> : null}
      </section>

      <JoinSquadSection joinSeed={joinSeed} />

      <section aria-label="Check-in history" className="mt-4">
        <h3 className="font-display mb-2 text-xl font-bold text-[var(--text)]">Recent Check-Ins</h3>
        {dataQ.data && dataQ.data.checkins.length > 0 ? (
          <ul className="space-y-2">
            {dataQ.data.checkins.slice(0, 10).map((c) => (
              <li key={c.id} className="flex items-center justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <span className="text-base font-semibold text-[var(--text)]">{c.dayKey}</span>
                <span className="flex items-center gap-2">
                  {c.status === "dark" && c.returnDate ? <span className="text-sm text-[var(--dim)]">back {c.returnDate}</span> : null}
                  <Badge tone={c.status === "good" ? "official" : c.status === "talk" ? "red" : "amber"}>{STATUS_LABEL[c.status]}</Badge>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[var(--dim)]">No check-ins yet. Your first one is today's, above.</p>
        )}
      </section>
    </div>
  );
}
