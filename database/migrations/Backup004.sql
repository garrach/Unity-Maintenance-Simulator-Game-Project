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
  KEY `addon_requests_device_id_foreign` (`device_id`),
  KEY `addon_requests_user_id_foreign` (`user_id`),
  CONSTRAINT `addon_requests_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `addon_requests_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.addon_requests : ~17 rows (environ)
INSERT INTO `addon_requests` (`id`, `created_at`, `updated_at`, `user_id`, `device_id`) VALUES
	(40, '2024-03-27 22:54:29', '2024-03-27 22:54:29', 13, 31),
	(41, '2024-03-28 00:35:04', '2024-03-28 00:35:04', 13, 31),
	(42, '2024-03-28 00:35:11', '2024-03-28 00:35:11', 13, 30),
	(43, '2024-03-28 00:35:17', '2024-03-28 00:35:17', 13, 32),
	(44, '2024-03-28 00:35:22', '2024-03-28 00:35:22', 13, 32),
	(45, '2024-03-28 00:35:28', '2024-03-28 00:35:28', 13, 33),
	(46, '2024-03-28 00:35:33', '2024-03-28 00:35:33', 13, 34),
	(47, '2024-03-28 00:35:38', '2024-03-28 00:35:38', 13, 36),
	(48, '2024-03-28 00:35:44', '2024-03-28 00:35:44', 13, 37),
	(49, '2024-03-28 00:35:49', '2024-03-28 00:35:49', 13, 30),
	(50, '2024-03-28 00:35:55', '2024-03-28 00:35:55', 13, 31),
	(51, '2024-03-28 00:36:01', '2024-03-28 00:36:01', 13, 30),
	(52, '2024-03-28 00:36:06', '2024-03-28 00:36:06', 13, 32),
	(53, '2024-03-28 21:33:23', '2024-03-28 21:33:23', 14, 34),
	(54, '2024-04-14 09:45:59', '2024-04-14 09:45:59', 13, 30),
	(55, '2024-04-14 09:46:23', '2024-04-14 09:46:23', 13, 31),
	(56, '2024-04-14 09:46:59', '2024-04-14 09:46:59', 13, 32),
	(57, '2024-04-14 09:47:25', '2024-04-14 09:47:25', 13, 33),
	(58, '2024-04-14 09:47:53', '2024-04-14 09:47:53', 13, 34),
	(59, '2024-04-14 09:48:12', '2024-04-14 09:48:12', 13, 37),
	(60, '2024-04-24 00:57:01', '2024-04-24 00:57:01', 12, 31);

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

-- Listage des données de la table carmaintain.asset_bundles : ~2 rows (environ)
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.comments : ~6 rows (environ)

-- Listage de la structure de table carmaintain. connections
CREATE TABLE IF NOT EXISTS `connections` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `connection_id` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate` decimal(20,1) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `installationdate` date DEFAULT NULL,
  `vehicle_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `review_id` bigint unsigned DEFAULT NULL,
  `comment_id` bigint unsigned DEFAULT NULL,
  `schedules_id` bigint unsigned DEFAULT NULL,
  `purchase_id` bigint unsigned DEFAULT NULL,
  `report_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `connections_vehicle_id_foreign` (`vehicle_id`),
  KEY `connections_user_id_foreign` (`user_id`),
  KEY `connections_review_id_foreign` (`review_id`),
  KEY `connections_schedules_id_foreign` (`schedules_id`),
  KEY `connections_comment_id_foreign` (`comment_id`),
  KEY `connections_device_id_foreign` (`device_id`),
  KEY `connections_purchase_id_foreign` (`purchase_id`),
  KEY `connections_report_id_foreign` (`report_id`),
  CONSTRAINT `connections_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `connections_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `connections_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `connections_report_id_foreign` FOREIGN KEY (`report_id`) REFERENCES `reports` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `connections_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_schedules_id_foreign` FOREIGN KEY (`schedules_id`) REFERENCES `schedules` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `connections_vehicle_id_foreign` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.connections : ~0 rows (environ)
INSERT INTO `connections` (`id`, `device_id`, `created_at`, `updated_at`, `connection_id`, `rate`, `name`, `installationdate`, `vehicle_id`, `user_id`, `review_id`, `comment_id`, `schedules_id`, `purchase_id`, `report_id`) VALUES
	(3, 34, '2024-04-25 16:06:17', '2024-04-25 16:06:17', NULL, NULL, 'ClientAccount: Touch Screen Entertainment System AC ControlzC. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(4, 30, '2024-04-25 16:07:52', '2024-04-25 16:07:52', NULL, NULL, 'ClientAccount: Boss stereo speakers. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(5, 31, '2024-04-25 16:07:56', '2024-04-25 16:07:56', NULL, NULL, 'ClientAccount: Speedmeters Display Dash Monitor. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(6, 32, '2024-04-25 16:08:00', '2024-04-25 16:08:00', NULL, NULL, 'ClientAccount: Samsung Super Fast Dual Car Charger. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(7, 32, '2024-04-25 16:08:04', '2024-04-25 16:08:04', NULL, NULL, 'ClientAccount: Samsung Super Fast Dual Car Charger. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(8, 32, '2024-04-25 16:08:08', '2024-04-25 16:08:08', NULL, NULL, 'ClientAccount: Samsung Super Fast Dual Car Charger. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(9, 37, '2024-04-25 16:08:13', '2024-04-25 16:08:13', NULL, NULL, 'ClientAccount: Rearview Camera. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL),
	(10, 37, '2024-04-25 16:08:18', '2024-04-25 16:08:18', NULL, NULL, 'ClientAccount: Rearview Camera. Connected', '2024-04-25', 11, NULL, NULL, NULL, NULL, NULL, NULL);

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
  CONSTRAINT `dashboards_plan_foreign` FOREIGN KEY (`plan`) REFERENCES `payment_plans` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `connectorType` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `includedComponents` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mountingType` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.devices : ~7 rows (environ)
INSERT INTO `devices` (`id`, `serial_number`, `type`, `price`, `created_at`, `updated_at`, `installation_date`, `image`, `connectorType`, `color`, `includedComponents`, `mountingType`) VALUES
	(30, 'BE920WCPA', 'Boss stereo speakers', NULL, '2024-03-24 18:24:48', '2024-03-24 18:24:48', '2024-03-24', 'storage/images/lL7rWhpwF9SkHq8EuzuLTNget0USa4w97YsU5ftp.jpg', 'Speaker Wire Terminals', 'white', 'Speaker Units, Speaker Enclosures, Wiring Harness, Mounting Hardware', 'car'),
	(31, 'B0C4HK7QLW', 'Speedmeters Display Dash Monitor', NULL, '2024-03-24 18:27:00', '2024-03-24 18:27:00', '2024-03-24', 'storage/images/2ivZzuJ92mI2UOaFyQHaz7tHJNgk8QBhFe0jf6sK.gif', 'Wiring Harness', 'transparent', 'Display Screen, Control Unit, Wiring Harness, Mounting Hardware', 'car'),
	(32, 'L5300XBEGWW', 'Samsung Super Fast Dual Car Charger', NULL, '2024-03-24 18:38:13', '2024-03-24 18:38:13', '2024-03-24', 'storage/images/4E0FP3gj2WKd91j8QIiKuRkUcOKaRD6g4ckXbdN6.jpg', 'USB Type C', 'black', 'Charging Ports: USB ports or other connectors for charging electronic devices such as smartphones, tablets, or other USB-powered devices.', 'car'),
	(33, 'Mercedes W223 S550', 'Car TV Screen Rear Seat Entertainment System', NULL, '2024-03-24 18:42:40', '2024-03-24 18:42:40', '2024-03-24', 'storage/images/jbedcEEEy3iwJMJ2Ct3QvhgSIchWubd7MHUmD4kb.jpg', 'HDMI Input', 'black', 'Display Screen, Audio System, Control Unit, Input Sources, Remote Control', 'car'),
	(34, 'Tesla Model 3 Y', 'Touch Screen Entertainment System AC ControlzC', NULL, '2024-03-24 18:49:33', '2024-03-24 18:49:33', '2024-03-24', 'storage/images/Qh3cvRFbbaXxHbo15cEMcLReGwxA9wKEwin87Cv3.jpg', 'HDMI Input, Wiring Harness', 'gray', 'Display Screen, Audio System, Control Unit, Input Sources, Remote Control', 'car'),
	(36, 'Series 61319241915', 'Window Switch Door Lock Front Driver Side with Mirror Switch', NULL, '2024-03-24 18:56:29', '2024-03-24 18:56:29', '2024-03-24', 'storage/images/EaubL3yrNICNqvQ9ulGYHcyvQakl4tXG5TspxwS6.jpg', 'wiring harness', 'black', 'Window Switches, Door Lock Switch, Mirror Adjustment Controls', 'car'),
	(37, 'Pioneer ND-BC010', 'Rearview Camera', NULL, '2024-03-24 19:25:18', '2024-03-24 19:25:18', '2024-03-24', 'storage/images/OziCK1ryW3sCiGJyOuPQFhnyzHe6mXkK4FlTqVcN.jpg', 'wiring harness', 'black', 'Camera Unit, Wiring Harness, Display Unit, Mounting Hardware', 'car');

-- Listage de la structure de table carmaintain. device_usages
CREATE TABLE IF NOT EXISTS `device_usages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `device_id` bigint unsigned NOT NULL,
  `usage_count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `device_usages_device_id_foreign` (`device_id`),
  KEY `device_usages_user_id_foreign` (`user_id`),
  CONSTRAINT `device_usages_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `device_usages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.device_usages : ~6 rows (environ)
INSERT INTO `device_usages` (`id`, `user_id`, `device_id`, `usage_count`, `created_at`, `updated_at`) VALUES
	(4, 13, 32, 500, '2024-03-28 20:04:50', '2024-04-25 16:08:08'),
	(5, 13, 31, 400, '2024-03-28 20:04:57', '2024-04-25 16:07:56'),
	(6, 13, 30, 400, '2024-03-28 20:05:01', '2024-04-25 16:07:52'),
	(7, 13, 33, 400, '2024-03-28 20:05:11', '2024-04-25 16:03:44'),
	(8, 13, 34, 400, '2024-03-28 20:05:18', '2024-04-25 16:06:17'),
	(9, 13, 36, 100, '2024-03-28 20:05:27', '2024-03-28 20:05:27'),
	(10, 13, 37, 300, '2024-03-28 20:05:38', '2024-04-25 16:08:18');

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
  CONSTRAINT `jobs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.jobs : ~0 rows (environ)

-- Listage de la structure de table carmaintain. migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
	(21, '2024_03_13_9_create_addon_requests_table', 2),
	(22, '2024_03_23_233359_create_userexpcoin_table', 3);

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
  CONSTRAINT `payment_plan_service_payment_plan_id_foreign` FOREIGN KEY (`payment_plan_id`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `payment_plan_service_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_service : ~17 rows (environ)
INSERT INTO `payment_plan_service` (`id`, `payment_plan_id`, `service_id`, `created_at`, `updated_at`) VALUES
	(1, 4, 4, NULL, NULL),
	(5, 5, 5, NULL, NULL),
	(7, 6, 5, NULL, NULL),
	(9, 6, 7, NULL, NULL),
	(10, 6, 8, NULL, NULL),
	(12, 6, 10, NULL, NULL),
	(14, 6, 1, NULL, NULL),
	(15, 5, 7, NULL, NULL),
	(16, 4, 10, NULL, NULL),
	(17, 6, 15, NULL, NULL),
	(18, 6, 16, NULL, NULL),
	(19, 4, 16, NULL, NULL),
	(20, 5, 8, NULL, NULL),
	(21, 4, 1, NULL, NULL),
	(22, 4, 18, NULL, NULL),
	(23, 6, 18, NULL, NULL),
	(24, 5, 18, NULL, NULL),
	(25, 5, 19, NULL, NULL);

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
  CONSTRAINT `payment_plan_user_payment_plan_id_foreign` FOREIGN KEY (`payment_plan_id`) REFERENCES `payment_plans` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `payment_plan_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_user : ~3 rows (environ)
INSERT INTO `payment_plan_user` (`id`, `payment_plan_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(29, 4, 13, NULL, NULL),
	(31, 5, 14, NULL, NULL),
	(45, 4, 12, NULL, NULL);

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
  `position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchases_device_id_foreign` (`device_id`),
  KEY `purchases_user_id_foreign` (`user_id`),
  CONSTRAINT `purchases_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `purchases_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.purchases : ~6 rows (environ)
INSERT INTO `purchases` (`id`, `user_id`, `device_id`, `date`, `stat`, `created_at`, `updated_at`, `position`) VALUES
	(38, 13, 30, '2024-04-14', 1, '2024-04-14 09:45:59', '2024-04-25 15:57:05', '{"position":{"x":0,"y":0,"z":0}}'),
	(39, 13, 31, '2024-04-14', 1, '2024-04-14 09:46:23', '2024-04-25 15:19:42', '{"position":{"x":0,"y":0,"z":0}}'),
	(40, 13, 32, '2024-04-14', 1, '2024-04-14 09:46:59', '2024-04-25 16:08:00', '{"position":{"x":0,"y":0,"z":0}}'),
	(41, 13, 33, '2024-04-14', 1, '2024-04-14 09:47:25', '2024-04-25 16:02:11', '{"position":{"x":0,"y":0,"z":0}}'),
	(42, 13, 34, '2024-04-14', 1, '2024-04-14 09:47:53', '2024-04-25 16:03:51', '{"position":{"x":0,"y":0,"z":0}}'),
	(43, 13, 37, '2024-04-14', 1, '2024-04-14 09:48:12', '2024-04-25 16:08:13', '{"position":{"x":0,"y":0,"z":0}}'),
	(44, 12, 31, '2024-04-24', 0, '2024-04-24 00:57:01', '2024-04-24 00:57:01', '{"position":{"x":0,"y":0,"z":0}}');

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
  CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  CONSTRAINT `reviews_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  KEY `schedules_purchase_id_foreign` (`purchase_id`),
  KEY `schedules_user_id_foreign` (`user_id`),
  CONSTRAINT `schedules_purchase_id_foreign` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `schedules_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.schedules : ~6 rows (environ)
INSERT INTO `schedules` (`id`, `title`, `description`, `start_date`, `end_date`, `user_id`, `purchase_id`, `created_at`, `updated_at`) VALUES
	(40, 'Schedule Device:30', 'Device:Boss stereo speakers', '2024-04-14', '2024-04-17', 13, 38, '2024-04-14 09:45:59', '2024-04-14 09:45:59'),
	(41, 'Schedule Device:31', 'Device:Speedmeters Display Dash Monitor', '2024-04-14', '2024-04-17', 13, 39, '2024-04-14 09:46:23', '2024-04-14 09:46:23'),
	(42, 'Schedule Device:32', 'Device:Samsung Super Fast Dual Car Charger', '2024-04-14', '2024-04-17', 13, 40, '2024-04-14 09:46:59', '2024-04-14 09:46:59'),
	(43, 'Schedule Device:33', 'Device:Car TV Screen Rear Seat Entertainment System', '2024-04-14', '2024-04-17', 13, 41, '2024-04-14 09:47:25', '2024-04-14 09:47:25'),
	(44, 'Schedule Device:34', 'Device:Touch Screen Entertainment System AC ControlzC', '2024-04-14', '2024-04-17', 13, 42, '2024-04-14 09:47:53', '2024-04-14 09:47:53'),
	(45, 'Schedule Device:37', 'Device:Rearview Camera', '2024-04-14', '2024-04-17', 13, 43, '2024-04-14 09:48:12', '2024-04-14 09:48:12'),
	(46, 'Schedule Device:31', 'Device:Speedmeters Display Dash Monitor', '2024-04-24', '2024-04-27', 12, 44, '2024-04-24 00:57:01', '2024-04-24 00:57:01');

-- Listage de la structure de table carmaintain. services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.services : ~9 rows (environ)
INSERT INTO `services` (`id`, `name`, `description`, `route`, `created_at`, `updated_at`) VALUES
	(1, 'Basic Maintenance Tracking', 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.', 'basic-maintenance', '2024-02-15 18:31:37', '2024-02-15 18:31:37'),
	(4, 'Car Analytics', 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.', 'car-analytics', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(5, 'Connected Services', 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.', 'connected-services', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(7, 'Full Maintenance Suite', 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.', 'full-maintenance-suite', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(8, 'Customizable Maintenance Schedules', 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.', 'customizable-maintenance-schedules', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(10, 'Priority Customer Support', 'Experience top-notch customer support with our priority service for any queries or assistance you may need.', 'priority-customer-support', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(14, 'Coinsystem', 'exp engagement', 'coin-system', '2024-03-08 12:05:07', '2024-03-08 12:05:07'),
	(15, 'JobApplications', 'list of client, and employees application for role, action, features', 'application-list', '2024-03-09 15:22:41', '2024-03-09 15:22:42'),
	(16, 'Dashboard', 'user interface Dashboard and elements', 'dashboard', '2024-03-13 22:28:57', '2024-03-13 22:28:58'),
	(18, 'LeaderBoard', 'display users earning points', 'leaderboard', '2024-03-25 20:28:32', '2024-03-25 20:33:09'),
	(19, 'unity data monitoring', 'track unity client services, vehicle, devices', 'data-monitoring', '2024-04-13 19:19:39', '2024-04-13 19:19:39');

-- Listage de la structure de table carmaintain. userexpcoin
CREATE TABLE IF NOT EXISTS `userexpcoin` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `coins` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `FK_userexpcoin_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.userexpcoin : ~3 rows (environ)
INSERT INTO `userexpcoin` (`id`, `created_at`, `updated_at`, `user_id`, `experience`, `coins`) VALUES
	(7, '2024-03-23 22:56:48', '2024-04-25 15:57:05', 12, 30, 30),
	(8, '2024-03-23 22:56:48', '2024-04-14 09:48:12', 13, 200, 200),
	(9, '2024-03-23 22:56:48', '2024-04-25 16:08:18', 14, 370, 370);

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.users : ~2 rows (environ)
INSERT INTO `users` (`id`, `name`, `role`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(12, 'AdminAccount', 'admin', 'garrach76@gmail.com', NULL, '$2y$12$lFcDkrM/JVt39p6Gvanutu2wnttrXdvq24FYVzKvrDJgunwjBOH2q', NULL, '2024-03-19 17:58:29', '2024-03-19 17:58:29'),
	(13, 'ClientAccount', 'client', 'clientaccount@gmail.com', NULL, '$2y$12$qZ4spVJKwAB5RPWQahNIEOF7tKpSIaLG5WVCqNgNxXC7CuCkiefRC', NULL, '2024-03-19 18:04:19', '2024-03-19 18:04:19'),
	(14, 'EmployeeAccount', 'employee', 'employeeaccount@gmail.com', NULL, '$2y$12$PnSJWxZeqIRavH9v0mPbXe.3Kd2/hAvMkc.dkOUh2Js6kYaKllqCa', NULL, '2024-03-21 18:32:29', '2024-03-21 19:11:02');

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.vehicles : ~3 rows (environ)
INSERT INTO `vehicles` (`id`, `make`, `model`, `year`, `license_plate`, `created_at`, `updated_at`) VALUES
	(11, 'Toyota', 'Corolla', 2022, 'ABC123', '2024-03-17 19:52:30', '2024-03-17 19:52:32'),
	(12, 'Honda', 'Accord', 2023, 'DEF456', '2024-03-17 19:52:31', '2024-03-17 19:52:33'),
	(13, 'Ford', 'Mustang', 2024, 'GHI789', '2024-03-17 19:52:35', '2024-03-17 19:52:34');

-- Listage de la structure de table carmaintain. wish_lists
CREATE TABLE IF NOT EXISTS `wish_lists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK_wish_lists_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_wish_lists_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.wish_lists : ~8 rows (environ)
INSERT INTO `wish_lists` (`id`, `title`, `description`, `created_at`, `updated_at`, `user_id`, `device_id`) VALUES
	(3, 'client', 'WishList Item Added', '2024-03-24 19:42:49', '2024-03-24 19:42:49', 13, 30),
	(4, 'client', 'WishList Item Added', '2024-03-24 19:42:56', '2024-03-24 19:42:56', 13, 33),
	(5, 'client', 'WishList Item Added', '2024-03-24 19:43:04', '2024-03-24 19:43:04', 13, 34),
	(6, 'client', 'WishList Item Added', '2024-03-24 19:43:13', '2024-03-24 19:43:13', 13, 37),
	(7, 'admin', 'WishList Item Added', '2024-03-29 20:46:34', '2024-03-29 20:46:34', 12, 37),
	(8, 'admin', 'WishList Item Added', '2024-03-29 20:50:22', '2024-03-29 20:50:22', 12, 30),
	(9, 'employee', 'WishList Item Added', '2024-04-01 16:26:09', '2024-04-01 16:26:09', 14, 33),
	(10, 'employee', 'WishList Item Added', '2024-04-01 16:26:15', '2024-04-01 16:26:15', 14, 31),
	(11, 'employee', 'WishList Item Added', '2024-04-01 16:26:19', '2024-04-01 16:26:19', 14, 37),
	(12, 'employee', 'WishList Item Added', '2024-04-01 16:26:24', '2024-04-01 16:26:24', 14, 34);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
