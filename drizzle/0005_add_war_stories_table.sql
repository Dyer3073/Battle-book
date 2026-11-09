CREATE TABLE `war_stories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`branch` text NOT NULL,
	`era` text NOT NULL,
	`era_detail` text DEFAULT '' NOT NULL,
	`category` text NOT NULL,
	`display_choice` text NOT NULL,
	`display_name` text DEFAULT '' NOT NULL,
	`body` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`review_note` text DEFAULT '' NOT NULL,
	`photo_blob_key` text,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);
