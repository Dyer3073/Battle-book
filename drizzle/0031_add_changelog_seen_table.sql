CREATE TABLE `changelog_seen` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`last_seen_at` integer DEFAULT 0 NOT NULL,
	`updated_at` integer NOT NULL
);
