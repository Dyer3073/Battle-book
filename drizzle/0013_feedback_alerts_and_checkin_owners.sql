ALTER TABLE `checkins` ADD COLUMN `profile_id` integer;
--> statement-breakpoint
UPDATE `checkins` SET `profile_id` = (SELECT MIN(`id`) FROM `profiles`) WHERE `profile_id` IS NULL;
--> statement-breakpoint
CREATE TABLE `feedback` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`display_name` text DEFAULT '' NOT NULL,
	`rank` text DEFAULT '' NOT NULL,
	`branch` text DEFAULT '' NOT NULL,
	`mos_code` text DEFAULT '' NOT NULL,
	`type` text NOT NULL,
	`section` text DEFAULT '' NOT NULL,
	`body` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `alert_reads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`alert_key` text NOT NULL,
	`created_at` integer NOT NULL
);
