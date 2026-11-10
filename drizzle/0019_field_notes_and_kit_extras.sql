ALTER TABLE `field_kit` ADD `load_json` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `field_kit` ADD `watchbills_json` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `field_kit` ADD `hydration_json` text DEFAULT '' NOT NULL;
--> statement-breakpoint
CREATE TABLE `field_notes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`title` text DEFAULT '' NOT NULL,
	`body` text DEFAULT '' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
