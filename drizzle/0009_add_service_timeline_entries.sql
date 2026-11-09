CREATE TABLE `service_timeline_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`entry_date` text NOT NULL,
	`entry_type` text NOT NULL,
	`title` text NOT NULL,
	`unit` text DEFAULT '' NOT NULL,
	`place` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`created_at` integer NOT NULL
);
