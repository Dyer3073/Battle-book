CREATE TABLE `va_claims` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`label` text NOT NULL,
	`claim_type` text NOT NULL,
	`stage` text NOT NULL,
	`itf_date` text DEFAULT '' NOT NULL,
	`filed_date` text DEFAULT '' NOT NULL,
	`exam_date` text DEFAULT '' NOT NULL,
	`evidence_json` text DEFAULT '[]' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
