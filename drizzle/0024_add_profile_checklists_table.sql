CREATE TABLE `profile_checklists` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`checklist_id` text NOT NULL,
	`completed_json` text DEFAULT '[]' NOT NULL,
	`updated_at` integer NOT NULL
);
