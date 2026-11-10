CREATE TABLE `people_listings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`display_name` text DEFAULT '' NOT NULL,
	`branch` text DEFAULT '' NOT NULL,
	`job_code` text DEFAULT '' NOT NULL,
	`job_title` text DEFAULT '' NOT NULL,
	`component` text DEFAULT '' NOT NULL,
	`service_status` text DEFAULT '' NOT NULL,
	`state` text DEFAULT '' NOT NULL,
	`city` text DEFAULT '' NOT NULL,
	`gender` text NOT NULL,
	`connect_with` text NOT NULL,
	`up_for_json` text DEFAULT '[]' NOT NULL,
	`about` text DEFAULT '' NOT NULL,
	`availability` text DEFAULT 'open' NOT NULL,
	`review_status` text DEFAULT 'pending' NOT NULL,
	`review_note` text DEFAULT '' NOT NULL,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);
--> statement-breakpoint
CREATE TABLE `people_requests` (
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
CREATE TABLE `people_blocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`blocker_profile_id` integer NOT NULL,
	`blocked_profile_id` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `squads` ADD COLUMN `kind` text DEFAULT 'squad' NOT NULL;
