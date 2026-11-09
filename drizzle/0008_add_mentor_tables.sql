CREATE TABLE `mentors` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`branch` text NOT NULL,
	`job_code` text DEFAULT '' NOT NULL,
	`job_title` text DEFAULT '' NOT NULL,
	`topics_json` text DEFAULT '[]' NOT NULL,
	`bio` text NOT NULL,
	`years_service` integer,
	`display_choice` text NOT NULL,
	`display_name` text DEFAULT '' NOT NULL,
	`availability` text DEFAULT 'open' NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`review_note` text DEFAULT '' NOT NULL,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);
--> statement-breakpoint
CREATE TABLE `mentor_requests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`mentor_id` integer NOT NULL,
	`topic` text NOT NULL,
	`message` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`squad_member_id` integer,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`decided_at` integer
);
