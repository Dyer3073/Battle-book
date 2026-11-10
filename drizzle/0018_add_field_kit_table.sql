CREATE TABLE `field_kit` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`pace_per_100` integer,
	`medevac_json` text DEFAULT '' NOT NULL,
	`cards_json` text DEFAULT '' NOT NULL,
	`updated_at` integer NOT NULL
);
