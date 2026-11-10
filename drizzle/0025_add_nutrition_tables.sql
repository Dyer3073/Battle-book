CREATE TABLE `nutrition_settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`payload_json` text DEFAULT '{}' NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `nutrition_log_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`date` text NOT NULL,
	`meal` text DEFAULT 'snacks' NOT NULL,
	`name` text NOT NULL,
	`food_id` text DEFAULT '' NOT NULL,
	`servings` real DEFAULT 1 NOT NULL,
	`kcal` real DEFAULT 0 NOT NULL,
	`protein` real DEFAULT 0 NOT NULL,
	`carbs` real DEFAULT 0 NOT NULL,
	`fat` real DEFAULT 0 NOT NULL,
	`fiber` real DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `nutrition_custom_foods` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`name` text NOT NULL,
	`serving` text DEFAULT '1 serving' NOT NULL,
	`kcal` real DEFAULT 0 NOT NULL,
	`protein` real DEFAULT 0 NOT NULL,
	`carbs` real DEFAULT 0 NOT NULL,
	`fat` real DEFAULT 0 NOT NULL,
	`fiber` real DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `nutrition_weights` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`date` text NOT NULL,
	`weight_kg` real NOT NULL,
	`created_at` integer NOT NULL
);
