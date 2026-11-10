CREATE TABLE `home_pins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`section` text NOT NULL,
	`item_key` text NOT NULL,
	`title` text NOT NULL,
	`created_at` integer NOT NULL
);
