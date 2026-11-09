CREATE TABLE `binder_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`section` text NOT NULL,
	`item_key` text NOT NULL,
	`title` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`source` text DEFAULT '' NOT NULL,
	`created_at` integer NOT NULL
);
