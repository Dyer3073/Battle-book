CREATE TABLE `squads` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` TEXT NOT NULL,
  `invite_code` TEXT,
  `invites_paused` INTEGER NOT NULL DEFAULT 0,
  `created_at` INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE `squad_memberships` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `squad_id` INTEGER NOT NULL,
  `profile_id` INTEGER,
  `display_name` TEXT NOT NULL DEFAULT '',
  `role` TEXT NOT NULL DEFAULT 'Member',
  `joined_via` TEXT NOT NULL DEFAULT 'invite',
  `joined_at` INTEGER NOT NULL
);
--> statement-breakpoint
CREATE TABLE `app_state` (
  `key` TEXT PRIMARY KEY,
  `value` TEXT NOT NULL DEFAULT ''
);
--> statement-breakpoint
INSERT INTO `squads` (`name`, `invite_code`, `invites_paused`, `created_at`)
SELECT 'My Squad', NULL, 0, CAST(strftime('%s', 'now') AS INTEGER) * 1000
WHERE EXISTS (SELECT 1 FROM `profiles`);
--> statement-breakpoint
INSERT INTO `squad_memberships` (`squad_id`, `profile_id`, `display_name`, `role`, `joined_via`, `joined_at`)
SELECT s.`id`, p.`id`, p.`display_name`, 'Leader', 'created', s.`created_at`
FROM `squads` s
JOIN `profiles` p ON p.`id` = (SELECT MIN(`id`) FROM `profiles`);
--> statement-breakpoint
INSERT INTO `squad_memberships` (`squad_id`, `profile_id`, `display_name`, `role`, `joined_via`, `joined_at`)
SELECT (SELECT `id` FROM `squads` LIMIT 1), NULL, sm.`name`, 'Member', 'legacy', sm.`created_at`
FROM `squad_members` sm
WHERE sm.`role` NOT LIKE 'Mentor connection%' AND EXISTS (SELECT 1 FROM `squads`);
--> statement-breakpoint
DELETE FROM `squad_members`
WHERE `role` NOT LIKE 'Mentor connection%' AND EXISTS (SELECT 1 FROM `squads`);
