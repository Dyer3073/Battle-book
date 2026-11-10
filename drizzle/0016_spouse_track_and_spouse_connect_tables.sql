ALTER TABLE `profiles` ADD COLUMN `family_status` text DEFAULT '' NOT NULL;
--> statement-breakpoint
CREATE TABLE `spouse_listings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`display_name` text DEFAULT '' NOT NULL,
	`branch` text DEFAULT '' NOT NULL,
	`family_status` text DEFAULT '' NOT NULL,
	`state` text DEFAULT '' NOT NULL,
	`city` text DEFAULT '' NOT NULL,
	`gender` text NOT NULL,
	`connect_with` text NOT NULL,
	`life_stages_json` text DEFAULT '[]' NOT NULL,
	`up_for_json` text DEFAULT '[]' NOT NULL,
	`about` text NOT NULL,
	`availability` text DEFAULT 'open' NOT NULL,
	`review_status` text DEFAULT 'pending' NOT NULL,
	`review_note` text DEFAULT '' NOT NULL,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);
--> statement-breakpoint
CREATE TABLE `spouse_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`listing_id` integer NOT NULL,
	`requester_profile_id` integer NOT NULL,
	`target_profile_id` integer NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`squad_id` integer,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`decided_at` integer
);
--> statement-breakpoint
CREATE TABLE `spouse_blocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`blocker_profile_id` integer NOT NULL,
	`blocked_profile_id` integer NOT NULL,
	`created_at` integer NOT NULL
);
