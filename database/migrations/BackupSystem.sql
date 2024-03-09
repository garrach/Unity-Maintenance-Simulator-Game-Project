-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour carmaintain
CREATE DATABASE IF NOT EXISTS `carmaintain` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carmaintain`;

-- Listage de la structure de table carmaintain. addon_requests
CREATE TABLE IF NOT EXISTS `addon_requests` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_addon_requests_users` (`user_id`),
  KEY `FK_addon_requests_devices` (`device_id`),
  CONSTRAINT `FK_addon_requests_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `FK_addon_requests_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.addon_requests : ~13 rows (environ)
INSERT INTO `addon_requests` (`id`, `created_at`, `updated_at`, `user_id`, `device_id`) VALUES
	(1, '2024-03-07 17:41:41', '2024-03-07 17:41:41', 10, 8),
	(2, '2024-03-07 17:42:48', '2024-03-07 17:42:48', 10, 8),
	(3, '2024-03-07 17:43:57', '2024-03-07 17:43:57', 10, 8),
	(4, '2024-03-07 17:44:40', '2024-03-07 17:44:40', 10, 8),
	(5, '2024-03-07 17:45:48', '2024-03-07 17:45:48', 10, 3),
	(6, '2024-03-07 23:09:41', '2024-03-07 23:09:41', 10, 2),
	(7, '2024-03-08 10:48:14', '2024-03-08 10:48:14', 10, 8),
	(8, '2024-03-08 11:09:50', '2024-03-08 11:09:50', 10, 2),
	(9, '2024-03-08 11:22:58', '2024-03-08 11:22:58', 10, 2),
	(10, '2024-03-08 11:24:07', '2024-03-08 11:24:07', 10, 2),
	(11, '2024-03-08 11:24:24', '2024-03-08 11:24:24', 10, 9),
	(12, '2024-03-08 11:43:49', '2024-03-08 11:43:49', 10, 4),
	(13, '2024-03-08 11:45:02', '2024-03-08 11:45:02', 10, 2),
	(14, '2024-03-08 20:44:34', '2024-03-08 20:44:34', 5, 6),
	(15, '2024-03-08 20:45:41', '2024-03-08 20:45:41', 5, 6),
	(16, '2024-03-09 14:11:50', '2024-03-09 14:11:50', 10, 2);

-- Listage de la structure de table carmaintain. asset_bundles
CREATE TABLE IF NOT EXISTS `asset_bundles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` bigint unsigned DEFAULT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `asset_bundles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.asset_bundles : ~3 rows (environ)
INSERT INTO `asset_bundles` (`id`, `name`, `description`, `version`, `platform`, `file_size`, `file_path`, `created_at`, `updated_at`) VALUES
	(1, 'fine', 'Dolorem non voluptates sed provident commodi exercitationem.', '1', 'ea', NULL, 'public/storage/files/file_1.txt', '2024-02-15 19:38:06', '2024-02-15 20:03:23'),
	(2, 'Ratione sit quia quasi aut qui accusantium necessitatibus.', 'Animi velit unde deleniti illo iste alias voluptas.', '7', 'totam', 788, 'public/storage/files/file_2.txt', '2024-02-15 19:38:06', '2024-02-15 19:38:06'),
	(3, 'Qui iste molestiae dolores tempore dignissimos dolores.', 'Qui expedita quibusdam blanditiis pariatur quia tempora laborum voluptas.', '7', 'non', 672, 'public/storage/files/file_3.txt', '2024-02-15 19:38:06', '2024-02-15 19:38:06');

-- Listage de la structure de table carmaintain. asset_bundles_device
CREATE TABLE IF NOT EXISTS `asset_bundles_device` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `asset_bundles_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_bundles_device_device_id_foreign` (`device_id`),
  KEY `asset_bundles_device_asset_bundle_id_foreign` (`asset_bundles_id`) USING BTREE,
  CONSTRAINT `asset_bundles_device_asset_bundle_id_foreign` FOREIGN KEY (`asset_bundles_id`) REFERENCES `asset_bundles` (`id`),
  CONSTRAINT `asset_bundles_device_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.asset_bundles_device : ~0 rows (environ)

-- Listage de la structure de table carmaintain. comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  `text` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK_comments_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.comments : ~5 rows (environ)
INSERT INTO `comments` (`id`, `created_at`, `updated_at`, `device_id`, `text`) VALUES
	(1, '2024-03-07 17:33:15', '2024-03-07 17:33:16', 2, 'good one'),
	(2, '2024-03-07 23:30:33', '2024-03-07 23:30:33', 3, 'cool radio'),
	(3, '2024-03-07 23:32:12', '2024-03-07 23:32:12', 3, 'cool radio 22'),
	(4, '2024-03-07 23:35:32', '2024-03-07 23:35:32', 3, 'pretty cool'),
	(5, '2024-03-07 23:36:31', '2024-03-07 23:36:31', 7, 'nice'),
	(6, '2024-03-08 20:42:19', '2024-03-08 20:42:19', 3, 'i comfirm');

-- Listage de la structure de table carmaintain. connections
CREATE TABLE IF NOT EXISTS `connections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `connection_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate` decimal(20,1) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `installationdate` date DEFAULT NULL,
  `vehicle_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `review_id` bigint unsigned DEFAULT NULL,
  `comment_id` bigint unsigned DEFAULT NULL,
  `reminder_id` bigint unsigned DEFAULT NULL,
  `schedules_id` bigint unsigned DEFAULT NULL,
  `purchase_id` bigint unsigned DEFAULT NULL,
  `report_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`,`device_id`) USING BTREE,
  KEY `connections_vehicle_id_foreign` (`vehicle_id`) USING BTREE,
  KEY `FK_connections_devices` (`device_id`) USING BTREE,
  KEY `user_id` (`user_id`),
  KEY `review_id` (`review_id`),
  KEY `comment_id` (`comment_id`),
  KEY `reminder_id` (`reminder_id`),
  KEY `schedules_id` (`schedules_id`),
  KEY `report_id` (`report_id`),
  KEY `purchase_id` (`purchase_id`),
  CONSTRAINT `FK_connections_comments` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`),
  CONSTRAINT `FK_connections_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `FK_connections_purchases` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `FK_connections_reminders` FOREIGN KEY (`reminder_id`) REFERENCES `reminders` (`id`),
  CONSTRAINT `FK_connections_reports` FOREIGN KEY (`report_id`) REFERENCES `reports` (`id`),
  CONSTRAINT `FK_connections_reviews` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`),
  CONSTRAINT `FK_connections_schedules` FOREIGN KEY (`schedules_id`) REFERENCES `schedules` (`id`),
  CONSTRAINT `FK_connections_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_connections_vehicles` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.connections : ~0 rows (environ)
INSERT INTO `connections` (`id`, `device_id`, `created_at`, `updated_at`, `connection_id`, `rate`, `name`, `installationdate`, `vehicle_id`, `user_id`, `review_id`, `comment_id`, `reminder_id`, `schedules_id`, `purchase_id`, `report_id`) VALUES
	(7, 8, '2024-03-08 11:54:34', '2024-03-08 11:54:34', NULL, NULL, NULL, NULL, 5, 10, NULL, NULL, NULL, NULL, NULL, NULL);

-- Listage de la structure de table carmaintain. contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.contacts : ~2 rows (environ)
INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
	(1, 'Garrach Hazem', 'garrach76@gmail.com', 'yo hello', '2024-03-07 12:15:17', '2024-03-07 12:15:17'),
	(2, 'Garrach Hazem', 'garrach76@gmail.com', 'zrsetdryftugyihuojip', '2024-03-07 12:16:54', '2024-03-07 12:16:54'),
	(3, 'Garrach Hazem', 'garrach76@gmail.com', 'ytugyihuojipk;', '2024-03-07 12:21:35', '2024-03-07 12:21:35'),
	(4, 'Garrach Hazem', 'garrach76@gmail.com', 'ésdééééééédédédéd', '2024-03-07 22:21:41', '2024-03-07 22:21:41');

-- Listage de la structure de table carmaintain. dashboards
CREATE TABLE IF NOT EXISTS `dashboards` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `element` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  KEY `element` (`element`),
  KEY `plan` (`plan`),
  CONSTRAINT `FK_dashboards_payment_plans` FOREIGN KEY (`plan`) REFERENCES `payment_plans` (`name`),
  CONSTRAINT `FK_dashboards_services` FOREIGN KEY (`element`) REFERENCES `services` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.dashboards : ~0 rows (environ)

-- Listage de la structure de table carmaintain. devices
CREATE TABLE IF NOT EXISTS `devices` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `serial_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `installation_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.devices : ~9 rows (environ)
INSERT INTO `devices` (`id`, `serial_number`, `type`, `price`, `created_at`, `updated_at`, `installation_date`) VALUES
	(1, 'SN12345', 'GPS Tracker', 0.00, '2024-02-16 11:00:00', '2024-02-16 11:30:00', NULL),
	(2, 'SN67890', 'Dash Cam', 0.00, '2024-02-16 12:00:00', '2024-02-16 12:45:00', '2024-03-07'),
	(3, 'SNABCDE', 'Radio', 0.00, '2024-02-16 13:30:00', '2024-02-16 14:15:00', NULL),
	(4, 'aeztrey', 'zyfgyzf', 0.00, '2024-02-18 18:31:46', '2024-02-18 18:31:46', NULL),
	(5, 'aeztrey', 'zyfgyzf', 0.00, '2024-02-18 18:32:16', '2024-02-18 18:32:16', NULL),
	(6, 'aeztrey', 'zyfgyzf', 0.00, '2024-02-18 18:32:27', '2024-02-18 18:32:27', NULL),
	(7, 'cool', 'zyfgyzf', 0.00, '2024-02-18 18:32:34', '2024-02-23 22:08:25', NULL),
	(8, 'new device', 'dffdty', 0.00, '2024-02-28 17:41:28', '2024-02-28 17:41:28', NULL),
	(9, 'cool', 'etryftugyihuoijpo', 0.00, '2024-03-05 18:26:08', '2024-03-05 18:31:14', '2024-03-05');

-- Listage de la structure de table carmaintain. device_usages
CREATE TABLE IF NOT EXISTS `device_usages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `usage_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK_device_usages_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `FK_device_usages_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.device_usages : ~3 rows (environ)
INSERT INTO `device_usages` (`id`, `user_id`, `device_id`, `usage_count`, `created_at`, `updated_at`) VALUES
	(19, 5, 2, 400, '2024-03-09 13:19:15', '2024-03-09 13:50:37'),
	(20, 8, 1, 600, '2024-03-09 13:19:18', '2024-03-09 13:50:17'),
	(21, 10, 3, 400, '2024-03-09 13:20:03', '2024-03-09 13:50:22');

-- Listage de la structure de table carmaintain. failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.failed_jobs : ~0 rows (environ)

-- Listage de la structure de table carmaintain. jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `resume` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_jobs_users` (`user_id`),
  CONSTRAINT `FK_jobs_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.jobs : ~2 rows (environ)
INSERT INTO `jobs` (`id`, `title`, `description`, `resume`, `hash`, `approval`, `created_at`, `updated_at`, `user_id`) VALUES
	(1, 'Job Application: Garrach Projects', 'Name: Garrach Projects\nEmail: garrach76@gmail.com\nPhone: +126 28 258 285\nCover Letter: i wanna be an admin', 'resumes/1McDRCXJrB5ByYOB4p8X5ApeqxamYn3UeMqGpXrn.pdf', '$2y$12$pBzhPh0E4mrlL/cqtARlR.2wOqJLjTS0UVDSCS5eLdpRKYExr85EO', 0, '2024-03-07 17:50:00', '2024-03-07 17:50:00', 5),
	(2, 'Job Application: Any User', 'Name: Any User\nEmail: anyuser@gmai.com\nPhone: +216 28 452 197\nCover Letter: i wann work here', 'resumes/NJM2L0q94WfNLUnghbs1Xr7HA4PEWkYrW31G6PiQ.pdf', '$2y$12$Yv449.JcH/lVABf4CkLKjed8OGSx5wWS2NbUPyCIlEaOsBqhOXf7m', 1, '2024-03-08 22:16:21', '2024-03-08 22:16:21', 10),
	(4, 'Job Application: EPERON', 'Name: EPERON\nEmail: Eperonuser@gmail.com\nPhone: +216 28 452 197\nCover Letter: mbmkjtrhr\r\nth\r\nrth\r\nrth\r\nrthrth\r\nrth\r\nrt\r\nhr\r\nth\r\nrth\r\nrth\r\nrthrth\r\nrth', 'resumes/zob6Nb7w1azHUuZ7g7F6JjUNWQaSvHzw3GreIWH3.pdf', '$2y$12$VbeGKI3i9gjpOu8z0vMJ9umRCv0mdRjr5JE4g0156hINPa3UWIo2a', NULL, '2024-03-09 14:58:11', '2024-03-09 14:58:11', NULL);

-- Listage de la structure de table carmaintain. migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.migrations : ~0 rows (environ)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2024_03_07_151723_create_reviews_table', 1),
	(2, '2024_03_07_151738_create_comments_table', 1),
	(3, '2024_03_09_044325_create_device_usages_table', 2);

-- Listage de la structure de table carmaintain. password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.password_reset_tokens : ~0 rows (environ)

-- Listage de la structure de table carmaintain. payment_plans
CREATE TABLE IF NOT EXISTS `payment_plans` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plans : ~3 rows (environ)
INSERT INTO `payment_plans` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(4, 'Basic Plan', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(5, 'Standard Plan', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(6, 'Premium Plan', '2024-02-15 18:48:47', '2024-02-15 18:48:47');

-- Listage de la structure de table carmaintain. payment_plan_service
CREATE TABLE IF NOT EXISTS `payment_plan_service` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `payment_plan_id` bigint unsigned NOT NULL,
  `service_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_plan_service_payment_plan_id_service_id_unique` (`payment_plan_id`,`service_id`),
  KEY `payment_plan_service_service_id_foreign` (`service_id`),
  CONSTRAINT `payment_plan_service_payment_plan_id_foreign` FOREIGN KEY (`payment_plan_id`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE,
  CONSTRAINT `payment_plan_service_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_service : ~12 rows (environ)
INSERT INTO `payment_plan_service` (`id`, `payment_plan_id`, `service_id`, `created_at`, `updated_at`) VALUES
	(1, 4, 1, NULL, NULL),
	(4, 5, 11, NULL, NULL),
	(5, 5, 10, NULL, NULL),
	(7, 6, 5, NULL, NULL),
	(9, 6, 7, NULL, NULL),
	(10, 6, 8, NULL, NULL),
	(12, 6, 10, NULL, NULL),
	(13, 6, 11, NULL, NULL),
	(14, 6, 1, NULL, NULL),
	(15, 5, 7, NULL, NULL),
	(16, 4, 10, NULL, NULL),
	(17, 6, 15, NULL, NULL);

-- Listage de la structure de table carmaintain. payment_plan_user
CREATE TABLE IF NOT EXISTS `payment_plan_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_plan_id` bigint unsigned DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  KEY `payment_plan_id` (`payment_plan_id`),
  CONSTRAINT `FK_payment_plan_user_payment_plans` FOREIGN KEY (`payment_plan_id`) REFERENCES `payment_plans` (`id`),
  CONSTRAINT `FK_payment_plan_user_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_user : ~2 rows (environ)
INSERT INTO `payment_plan_user` (`id`, `created_at`, `updated_at`, `payment_plan_id`, `user_id`) VALUES
	(1, '2024-03-06 22:35:42', '2024-03-06 22:35:43', 6, 5),
	(21, NULL, NULL, 5, 10);

-- Listage de la structure de table carmaintain. personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.personal_access_tokens : ~0 rows (environ)

-- Listage de la structure de table carmaintain. purchases
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `date` date NOT NULL,
  `stat` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK__devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `FK__users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table carmaintain.purchases : ~3 rows (environ)
INSERT INTO `purchases` (`id`, `user_id`, `device_id`, `date`, `stat`, `created_at`, `updated_at`) VALUES
	(1, 5, 2, '2024-03-07', 1, '2024-03-09 12:05:44', '2024-03-09 13:19:15'),
	(2, 8, 1, '2024-03-07', 1, '2024-03-09 12:05:46', '2024-03-09 13:19:18'),
	(3, 10, 3, '2024-03-08', 1, '2024-03-09 12:05:46', '2024-03-09 13:20:03');

-- Listage de la structure de table carmaintain. reminders
CREATE TABLE IF NOT EXISTS `reminders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reminders : ~2 rows (environ)
INSERT INTO `reminders` (`id`, `title`, `description`, `date`, `created_at`, `updated_at`) VALUES
	(1, 'Sample Reminder 1', 'This is a sample reminder.', '2022-02-27', '2024-02-25 16:48:19', '2024-02-25 16:48:19'),
	(2, 'Sample Reminder 2', 'Another sample reminder.', '2022-03-05', '2024-02-25 16:48:19', '2024-02-25 16:48:19');

-- Listage de la structure de table carmaintain. reports
CREATE TABLE IF NOT EXISTS `reports` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `application_status` int DEFAULT NULL,
  `application_date` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `job` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reports_user_id_foreign` (`user_id`),
  KEY `job` (`job`),
  CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reports : ~1 rows (environ)
INSERT INTO `reports` (`id`, `user_id`, `application_status`, `application_date`, `created_at`, `updated_at`, `job`, `title`, `description`) VALUES
	(25, 8, NULL, '2024-02-27 20:21:02', '2024-02-27 20:10:35', '2024-02-27 20:21:04', NULL, 'platfom is a bit slow', 'bbbbbbbbyyyyyyyyyy');

-- Listage de la structure de table carmaintain. reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  `rate` decimal(1,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK_reviews_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reviews : ~0 rows (environ)
INSERT INTO `reviews` (`id`, `created_at`, `updated_at`, `device_id`, `rate`) VALUES
	(1, '2024-03-07 17:33:34', '2024-03-07 17:33:35', 2, 0.0);

-- Listage de la structure de table carmaintain. schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `purchase_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `purchase_id` (`purchase_id`),
  CONSTRAINT `FK_schedules_purchases` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `FK_schedules_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.schedules : ~2 rows (environ)
INSERT INTO `schedules` (`id`, `title`, `description`, `start_date`, `end_date`, `created_at`, `updated_at`, `user_id`, `purchase_id`) VALUES
	(12, 'Sample Schedule 1', 'This is a sample schedule.', '2022-02-27', '2022-03-05', '2024-03-09 03:09:09', '2024-03-09 03:09:09', 10, 1),
	(13, 'Sample Schedule 2', 'Another sample schedule.', '2022-03-06', '2022-03-12', '2024-03-09 03:09:09', '2024-03-09 03:09:09', 10, 2),
	(14, 'Schedule Device:2', 'Another schedule.', '2024-03-09', '2024-03-12', '2024-03-09 14:11:50', '2024-03-09 14:11:50', NULL, NULL);

-- Listage de la structure de table carmaintain. services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.services : ~9 rows (environ)
INSERT INTO `services` (`id`, `name`, `description`, `created_at`, `updated_at`, `route`) VALUES
	(1, 'Basic Maintenance Tracking', 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.', '2024-02-15 18:31:37', '2024-02-15 18:31:37', 'basic-maintenance'),
	(4, 'Car Analytics', 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'car-analytics'),
	(5, 'Connected Services', 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'connected-services'),
	(7, 'Full Maintenance Suite', 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'full-maintenance-suite'),
	(8, 'Customizable Maintenance Schedules', 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'customizable-maintenance-schedules'),
	(10, 'Priority Customer Support', 'Experience top-notch customer support with our priority service for any queries or assistance you may need.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'priority-customer-support'),
	(11, 'Advanced Maintenance Reports', 'Access detailed reports on your car\'s maintenance history and performance, helping you make informed decisions.', '2024-02-15 18:48:47', '2024-02-15 18:48:47', 'advanced-maintenance-reports'),
	(14, 'Coinsystem', 'exp engagement', '2024-03-08 12:05:07', '2024-03-08 12:05:07', 'coin-system'),
	(15, 'JobApplications', 'list of client, and employees application for role, action, features', '2024-03-09 15:22:41', '2024-03-09 15:22:42', 'application-list');

-- Listage de la structure de table carmaintain. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.users : ~6 rows (environ)
INSERT INTO `users` (`id`, `name`, `role`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(5, 'Garrach Hazem', 'admin', 'garrach76@gmail.com', NULL, '$2y$12$ArDh3fQ16xZ8J7pvtJgzEunTkYoIuMtFJBwYYBhdQDJBoMxN36fnW', NULL, '2024-02-25 00:14:59', '2024-02-28 15:08:32'),
	(6, 'garrach', 'employee', 'garrach87@gmail.com', NULL, '$2y$12$yp0drNGhuG3X2D7NLtE06.XdnqJoKQZWvVqE8/H0cpTDnZW5tGGu.', NULL, '2024-02-25 15:27:59', '2024-03-08 21:32:01'),
	(7, 'user1', 'employee', 'admin@zedzd.com', NULL, '$2y$12$QRonZ01Zu3PKAMxLQqH3PuFXFejBRAMkjDiWX/Nn9OF/DzAAi8nHa', NULL, '2024-02-25 15:51:46', '2024-03-08 21:32:15'),
	(8, 'AdminAccount', 'employee', 'garrach706@gmail.com', NULL, '$2y$12$Kk2n2SanT6YHYrvQJKNqB.RFQP0x0pDp4028eDNcHRmUA6.bqEg.2', NULL, '2024-02-27 17:19:09', '2024-03-08 21:31:35'),
	(9, 'ClientAccount', 'employee', 'garrach809@gmail.com', NULL, '$2y$12$W2sPWoH0JwHTALAjcse8ueeLdVCOpXYJKSJAI/5v2OZmGArb0bAo6', NULL, '2024-02-27 17:20:03', '2024-03-08 21:32:29'),
	(10, 'anyUser', 'employee', 'anyuser@gamil.com', NULL, '$2y$12$oOnjVKaY6TseRCRplZqczu/wdLP78IUFnFtlwmXlE4f1IUdGvy6ie', NULL, '2024-03-06 21:45:34', '2024-03-08 10:51:26');

-- Listage de la structure de table carmaintain. vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `make` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int NOT NULL,
  `license_plate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.vehicles : ~3 rows (environ)
INSERT INTO `vehicles` (`id`, `make`, `model`, `year`, `license_plate`, `created_at`, `updated_at`) VALUES
	(1, 'Toyota Default', 'Camry', 2020, 'ABC123', '2024-02-16 11:00:00', '2024-02-16 11:30:00'),
	(5, 'newVH', 'lara', 2015, '150BBH', '2024-02-20 04:09:33', '2024-02-20 04:09:34'),
	(6, 'jjtut', 'bbbbb', 2015, 'KKL88', NULL, NULL);

-- Listage de la structure de table carmaintain. wish_lists
CREATE TABLE IF NOT EXISTS `wish_lists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.wish_lists : ~0 rows (environ)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
