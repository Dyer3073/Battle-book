CREATE TABLE `calculator_states` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`calculator_id` text NOT NULL,
	`payload_json` text DEFAULT '{}' NOT NULL,
	`updated_at` integer NOT NULL
);
