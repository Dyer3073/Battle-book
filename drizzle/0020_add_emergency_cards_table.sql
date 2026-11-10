CREATE TABLE `emergency_cards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`contacts_json` text DEFAULT '[]' NOT NULL,
	`unit_command` text DEFAULT '' NOT NULL,
	`blood_type` text DEFAULT '' NOT NULL,
	`allergies` text DEFAULT '' NOT NULL,
	`medications` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`updated_at` integer NOT NULL
);
