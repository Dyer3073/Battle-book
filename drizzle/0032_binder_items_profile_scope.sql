ALTER TABLE `binder_items` ADD COLUMN `profile_id` integer;
--> statement-breakpoint
UPDATE `binder_items` SET `profile_id` = (SELECT MIN(`id`) FROM `profiles`) WHERE `profile_id` IS NULL;
