ALTER TABLE `profiles` ADD COLUMN `track` text DEFAULT 'member' NOT NULL;
--> statement-breakpoint
ALTER TABLE `profiles` ADD COLUMN `path_interest` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `profiles` ADD COLUMN `target_date` text DEFAULT '' NOT NULL;
