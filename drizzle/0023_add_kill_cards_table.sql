CREATE TABLE `kill_cards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`zap_number` text DEFAULT '' NOT NULL,
	`blood_type` text DEFAULT '' NOT NULL,
	`allergies` text DEFAULT '' NOT NULL,
	`gear_json` text DEFAULT '[]' NOT NULL,
	`updated_at` integer NOT NULL
);
