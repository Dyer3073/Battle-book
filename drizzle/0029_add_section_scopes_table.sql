CREATE TABLE `section_scopes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`section_key` text NOT NULL,
	`scope` text NOT NULL,
	`updated_at` integer NOT NULL
);
