CREATE TABLE `wall_of_honor` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`rank` text DEFAULT '' NOT NULL,
	`branch` text NOT NULL,
	`unit` text DEFAULT '' NOT NULL,
	`era` text NOT NULL,
	`birth_date` text DEFAULT '' NOT NULL,
	`loss_date` text DEFAULT '' NOT NULL,
	`tribute_text` text NOT NULL,
	`added_by` text DEFAULT '' NOT NULL,
	`relationship` text DEFAULT '' NOT NULL,
	`show_adder` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`review_note` text DEFAULT '' NOT NULL,
	`reported` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`reviewed_at` integer
);
--> statement-breakpoint
CREATE TABLE `tribute_candles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`tribute_id` integer NOT NULL,
	`created_at` integer NOT NULL
);
