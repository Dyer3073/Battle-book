DROP TABLE entries;
--> statement-breakpoint
CREATE TABLE profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  display_name TEXT NOT NULL DEFAULT '',
  branch TEXT NOT NULL DEFAULT '',
  component TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT '',
  mos_code TEXT NOT NULL DEFAULT '',
  rank TEXT NOT NULL DEFAULT '',
  goals TEXT NOT NULL DEFAULT '',
  onboarded INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE contributions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  kind TEXT NOT NULL,
  source_url TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at INTEGER NOT NULL,
  reviewed_at INTEGER
);
--> statement-breakpoint
CREATE TABLE news_stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  headline TEXT NOT NULL,
  summary TEXT NOT NULL,
  source_name TEXT NOT NULL,
  source_type TEXT NOT NULL,
  branch TEXT NOT NULL DEFAULT 'All',
  category TEXT NOT NULL DEFAULT 'General',
  url TEXT NOT NULL,
  published_label TEXT NOT NULL DEFAULT '',
  affects_you TEXT NOT NULL DEFAULT '',
  fetched_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE bookmarks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  story_id INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE checkins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  day_key TEXT NOT NULL,
  status TEXT NOT NULL,
  return_date TEXT NOT NULL DEFAULT '',
  note TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE squad_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'Buddy',
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE fitness_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  path TEXT NOT NULL,
  branch TEXT NOT NULL DEFAULT '',
  test_name TEXT NOT NULL DEFAULT '',
  inputs_json TEXT NOT NULL DEFAULT '{}',
  plan_json TEXT NOT NULL DEFAULT '[]',
  calories_low INTEGER,
  calories_high INTEGER,
  protein_low INTEGER,
  protein_high INTEGER,
  sanity_flag TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE workout_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  plan_id INTEGER,
  day_label TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  detail TEXT NOT NULL DEFAULT '',
  done INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE weight_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  weight_lb REAL NOT NULL,
  created_at INTEGER NOT NULL
);
