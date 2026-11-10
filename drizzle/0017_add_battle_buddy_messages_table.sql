CREATE TABLE `buddy_messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`role` text NOT NULL,
	`body` text NOT NULL,
	`sources_json` text DEFAULT '[]' NOT NULL,
	`crisis` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
