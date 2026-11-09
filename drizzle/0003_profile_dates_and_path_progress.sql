ALTER TABLE `profiles` ADD COLUMN `eas_date` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `profiles` ADD COLUMN `itf_date` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `profiles` ADD COLUMN `id_card_expiry` text DEFAULT '' NOT NULL;
--> statement-breakpoint
CREATE TABLE `path_progress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`path_id` text NOT NULL,
	`completed_json` text DEFAULT '[]' NOT NULL,
	`updated_at` integer NOT NULL
);
