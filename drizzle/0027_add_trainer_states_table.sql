CREATE TABLE `trainer_states` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`trainer_id` text NOT NULL,
	`mode` text NOT NULL,
	`current_streak` integer DEFAULT 0 NOT NULL,
	`best_streak` integer DEFAULT 0 NOT NULL,
	`last_score` integer DEFAULT 0 NOT NULL,
	`last_total` integer DEFAULT 0 NOT NULL,
	`best_score` integer DEFAULT 0 NOT NULL,
	`best_total` integer DEFAULT 0 NOT NULL,
	`sessions` integer DEFAULT 0 NOT NULL,
	`updated_at` integer NOT NULL
);
