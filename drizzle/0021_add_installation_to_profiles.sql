ALTER TABLE `profiles` ADD COLUMN `installation_slug` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `profiles` ADD COLUMN `installation_name` text DEFAULT '' NOT NULL;
