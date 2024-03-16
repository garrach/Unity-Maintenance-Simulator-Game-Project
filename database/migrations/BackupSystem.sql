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
  KEY `addon_requests_user_id_foreign` (`user_id`),
  KEY `addon_requests_device_id_foreign` (`device_id`),
  CONSTRAINT `addon_requests_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`),
  CONSTRAINT `addon_requests_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.addon_requests : ~16 rows (environ)
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
	(1, 'Delectus est est placeat ab nisi.', 'Quam fugit voluptates est et tempore et.', '5', 'eius', 356, 'public/storage/files/file_1.txt', '2024-03-13 19:07:58', '2024-03-13 19:07:58'),
	(2, 'Distinctio ex cumque fugiat sit eaque.', 'Dignissimos iusto fuga velit nihil autem.', '7', 'et', 614, 'public/storage/files/file_2.txt', '2024-03-13 19:07:58', '2024-03-13 19:07:58'),
	(3, 'Ipsum accusamus qui quod expedita asperiores consequuntur at quia.', 'Rerum consectetur temporibus maxime dolor consequatur quam in.', '6', 'laudantium', 272, 'public/storage/files/file_3.txt', '2024-03-13 19:07:58', '2024-03-13 19:07:58');

-- Listage de la structure de table carmaintain. asset_bundles_device
CREATE TABLE IF NOT EXISTS `asset_bundles_device` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `asset_bundles_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_bundles_device_asset_bundles_id_foreign` (`asset_bundles_id`),
  KEY `asset_bundles_device_device_id_foreign` (`device_id`),
  CONSTRAINT `asset_bundles_device_asset_bundles_id_foreign` FOREIGN KEY (`asset_bundles_id`) REFERENCES `asset_bundles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `asset_bundles_device_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE
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
  KEY `comments_device_id_foreign` (`device_id`),
  CONSTRAINT `comments_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.comments : ~0 rows (environ)

-- Listage de la structure de table carmaintain. connections
CREATE TABLE IF NOT EXISTS `connections` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `connection_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate` decimal(20,1) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `installationdate` date DEFAULT NULL,
  `vehicle_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `review_id` bigint unsigned DEFAULT NULL,
  `comment_id` bigint unsigned DEFAULT NULL,
  `schedules_id` bigint unsigned DEFAULT NULL,
  `purchase_id` bigint unsigned DEFAULT NULL,
  `report_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `connections_device_id_foreign` (`device_id`),
  KEY `connections_vehicle_id_foreign` (`vehicle_id`),
  KEY `connections_user_id_foreign` (`user_id`),
  KEY `connections_review_id_foreign` (`review_id`),
  KEY `connections_comment_id_foreign` (`comment_id`),
  KEY `connections_schedules_id_foreign` (`schedules_id`),
  KEY `connections_purchase_id_foreign` (`purchase_id`),
  KEY `connections_report_id_foreign` (`report_id`),
  CONSTRAINT `connections_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_report_id_foreign` FOREIGN KEY (`report_id`) REFERENCES `reports` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_schedules_id_foreign` FOREIGN KEY (`schedules_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_vehicle_id_foreign` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.connections : ~0 rows (environ)

-- Listage de la structure de table carmaintain. contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.contacts : ~0 rows (environ)

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
  KEY `plan` (`plan`),
  CONSTRAINT `dashboards_plan_foreign` FOREIGN KEY (`plan`) REFERENCES `payment_plans` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.dashboards : ~0 rows (environ)

-- Listage de la structure de table carmaintain. devices
CREATE TABLE IF NOT EXISTS `devices` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `serial_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `installation_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.devices : ~10 rows (environ)
INSERT INTO `devices` (`id`, `serial_number`, `type`, `price`, `created_at`, `updated_at`, `installation_date`) VALUES
	(1, 'aut', 'et', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1973-10-22'),
	(2, 'quia', 'et', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1982-01-03'),
	(3, 'repellat', 'ipsa', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '2000-02-19'),
	(4, 'labore', 'possimus', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1974-07-13'),
	(5, 'aperiam', 'aut', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1994-04-20'),
	(6, 'blanditiis', 'similique', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '2022-02-08'),
	(7, 'distinctio', 'cumque', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1973-05-18'),
	(8, 'libero', 'dolore', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '2016-02-26'),
	(9, 'ut', 'soluta', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '2016-06-30'),
	(10, 'et', 'nihil', NULL, '2024-03-13 19:09:39', '2024-03-13 19:09:39', '1983-05-23');

-- Listage de la structure de table carmaintain. device_usages
CREATE TABLE IF NOT EXISTS `device_usages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `usage_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `device_usages_user_id_foreign` (`user_id`),
  KEY `device_usages_device_id_foreign` (`device_id`),
  CONSTRAINT `device_usages_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE,
  CONSTRAINT `device_usages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.device_usages : ~0 rows (environ)

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
  KEY `jobs_user_id_foreign` (`user_id`),
  CONSTRAINT `jobs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.jobs : ~0 rows (environ)

-- Listage de la structure de table carmaintain. migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.migrations : ~21 rows (environ)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2024_03_01_00000_create_contacts_table', 1),
	(2, '2024_03_02_00000_create_devices_table', 1),
	(3, '2024_03_03_00000_create_payment_plans_table', 1),
	(4, '2024_03_04_00000_create_personal_access_tokens_table', 1),
	(5, '2024_03_05_00000_create_services_table', 1),
	(6, '2024_03_06_00000_create_users_table', 1),
	(7, '2024_03_07_00000_create_vehicles_table', 1),
	(8, '2024_03_08_00000_create_wish_lists_table', 1),
	(9, '2024_03_11_00000_create_asset_bundles_table', 1),
	(10, '2024_03_13_10_create_asset_bundles_device_table', 1),
	(11, '2024_03_13_11_create_comments_table', 1),
	(12, '2024_03_13_13_create_device_usages_table', 2),
	(13, '2024_03_13_14_create_jobs_table', 2),
	(14, '2024_03_13_15_create_payment_plan_service_table', 2),
	(15, '2024_03_13_16_create_payment_plan_user_table', 2),
	(16, '2024_03_13_17_create_purchases_table', 2),
	(17, '2024_03_13_18_create_reports_table', 2),
	(18, '2024_03_13_19_create_reviews_table', 2),
	(19, '2024_03_13_20_create_schedules_table', 2),
	(20, '2024_03_13_22_create_connections_table', 2),
	(21, '2024_03_13_9_create_addon_requests_table', 2);

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
	(4, 'Basic Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47'),
	(5, 'Standard Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47'),
	(6, 'Premium Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47');

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
  `payment_plan_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payment_plan_user_user_id_unique` (`user_id`),
  KEY `payment_plan_user_payment_plan_id_foreign` (`payment_plan_id`),
  CONSTRAINT `payment_plan_user_payment_plan_id_foreign` FOREIGN KEY (`payment_plan_id`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE,
  CONSTRAINT `payment_plan_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_user : ~2 rows (environ)
INSERT INTO `payment_plan_user` (`id`, `payment_plan_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(1, 6, 5, '2024-03-06 22:35:42', '2024-03-06 22:35:43'),
	(21, 5, 10, NULL, NULL);

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
  KEY `purchases_user_id_foreign` (`user_id`),
  KEY `purchases_device_id_foreign` (`device_id`),
  CONSTRAINT `purchases_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE,
  CONSTRAINT `purchases_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.purchases : ~0 rows (environ)

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
  `description` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reports_user_id_foreign` (`user_id`),
  CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reports : ~0 rows (environ)

-- Listage de la structure de table carmaintain. reviews
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `device_id` bigint unsigned DEFAULT NULL,
  `rate` decimal(2,1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_device_id_foreign` (`device_id`),
  CONSTRAINT `reviews_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reviews : ~0 rows (environ)

-- Listage de la structure de table carmaintain. schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `purchase_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schedules_user_id_foreign` (`user_id`),
  KEY `schedules_purchase_id_foreign` (`purchase_id`),
  CONSTRAINT `schedules_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE,
  CONSTRAINT `schedules_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.schedules : ~2 rows (environ)
INSERT INTO `schedules` (`id`, `title`, `description`, `start_date`, `end_date`, `user_id`, `purchase_id`, `created_at`, `updated_at`) VALUES
	(1, 'Sample Schedule 1', 'This is a sample schedule.', '2022-02-27', '2022-03-05', NULL, NULL, '2024-03-13 19:07:33', '2024-03-13 19:07:33'),
	(2, 'Sample Schedule 2', 'Another sample schedule.', '2022-03-06', '2022-03-12', NULL, NULL, '2024-03-13 19:07:33', '2024-03-13 19:07:33');

-- Listage de la structure de table carmaintain. services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.services : ~9 rows (environ)
INSERT INTO `services` (`id`, `name`, `description`, `route`, `created_at`, `updated_at`) VALUES
	(1, 'Basic Maintenance Tracking', 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.', 'basic-maintenance', '2024-02-15 18:31:37', '2024-02-15 18:31:37'),
	(4, 'Car Analytics', 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.', 'car-analytics', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(5, 'Connected Services', 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.', 'connected-services', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(7, 'Full Maintenance Suite', 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.', 'full-maintenance-suite', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(8, 'Customizable Maintenance Schedules', 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.', 'customizable-maintenance-schedules', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(10, 'Priority Customer Support', 'Experience top-notch customer support with our priority service for any queries or assistance you may need.', 'priority-customer-support', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(11, 'Advanced Maintenance Reports', 'Access detailed reports on your car\'s maintenance history and performance, helping you make informed decisions.', 'advanced-maintenance-reports', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(14, 'Coinsystem', 'exp engagement', 'coin-system', '2024-03-08 12:05:07', '2024-03-08 12:05:07'),
	(15, 'JobApplications', 'list of client, and employees application for role, action, features', 'application-list', '2024-03-09 15:22:41', '2024-03-09 15:22:42');

-- Listage de la structure de table carmaintain. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.vehicles : ~10 rows (environ)
INSERT INTO `vehicles` (`id`, `make`, `model`, `year`, `license_plate`, `created_at`, `updated_at`) VALUES
	(1, 'O\'Conner, Kuhn and Goldner', 'est', 1977, 'XZOTZSQ', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(2, 'Stracke-Ebert', 'consequatur', 1975, 'HKVGKIX', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(3, 'Herzog-Upton', 'et', 1975, 'VWOXKNZ', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(4, 'Luettgen Group', 'ipsa', 1989, 'I8UABTG', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(5, 'Leannon-Wintheiser', 'quasi', 2004, 'UL0L4C0', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(6, 'Waters Inc', 'saepe', 2009, 'TA1CGA8', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(7, 'Hayes-Nicolas', 'aperiam', 1995, 'YEWOT8W', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(8, 'Conroy-Davis', 'mollitia', 2015, 'PWQ02ML', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(9, 'Harvey, Morissette and McGlynn', 'ipsam', 1976, '6U47RWP', '2024-03-13 19:10:07', '2024-03-13 19:10:07'),
	(10, 'Raynor Ltd', 'nihil', 1992, 'OJBU10E', '2024-03-13 19:10:07', '2024-03-13 19:10:07');

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
