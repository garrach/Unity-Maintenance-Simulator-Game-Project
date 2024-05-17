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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.addon_requests : ~0 rows (environ)

-- Listage de la structure de table carmaintain. asset_bundles
CREATE TABLE IF NOT EXISTS `asset_bundles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `version` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` bigint unsigned DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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

-- Listage de la structure de table carmaintain. asset_bundles_user
CREATE TABLE IF NOT EXISTS `asset_bundles_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `asset_bundles_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_bundles_user_user_id_foreign` (`user_id`),
  KEY `asset_bundle_id` (`asset_bundles_id`) USING BTREE,
  CONSTRAINT `asset_bundles_user_asset_bundle_id_foreign` FOREIGN KEY (`asset_bundles_id`) REFERENCES `asset_bundles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `asset_bundles_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.asset_bundles_user : ~0 rows (environ)

-- Listage de la structure de table carmaintain. client_inboxs
CREATE TABLE IF NOT EXISTS `client_inboxs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `sender_id` bigint unsigned NOT NULL,
  `recipient_id` bigint unsigned NOT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `client_inboxs_sender_id_foreign` (`sender_id`),
  KEY `client_inboxs_recipient_id_foreign` (`recipient_id`),
  CONSTRAINT `client_inboxs_recipient_id_foreign` FOREIGN KEY (`recipient_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `client_inboxs_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.client_inboxs : ~12 rows (environ)

-- Listage de la structure de table carmaintain. comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  `text` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_device_id_foreign` (`device_id`),
  CONSTRAINT `comments_device_id_foreign` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.comments : ~5 rows (environ)
INSERT INTO `comments` (`id`, `created_at`, `updated_at`, `device_id`, `text`) VALUES
	(10, '2024-04-29 17:46:09', '2024-04-29 17:46:09', 31, 'elegent'),
	(11, '2024-05-11 19:15:44', '2024-05-11 19:15:44', 32, NULL),
	(12, '2024-05-11 19:15:48', '2024-05-11 19:15:48', 32, NULL),
	(13, '2024-05-11 19:17:52', '2024-05-11 19:17:52', 32, 'fast charge'),
	(14, '2024-05-11 19:18:51', '2024-05-11 19:18:51', 33, 'cool Entertainment'),
	(15, '2024-05-12 01:19:48', '2024-05-12 01:19:48', 34, NULL);

-- Listage de la structure de table carmaintain. connections
CREATE TABLE IF NOT EXISTS `connections` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `device_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `connection_id` bigint DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.connections : ~15 rows (environ)

-- Listage de la structure de table carmaintain. contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.contacts : ~0 rows (environ)

-- Listage de la structure de table carmaintain. dashboards
CREATE TABLE IF NOT EXISTS `dashboards` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `element` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `actions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `serial_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `installation_date` date DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `connectorType` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `includedComponents` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mountingType` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.devices : ~7 rows (environ)
INSERT INTO `devices` (`id`, `serial_number`, `type`, `price`, `created_at`, `updated_at`, `installation_date`, `image`, `connectorType`, `color`, `includedComponents`, `mountingType`) VALUES
	(30, 'BE920WCPA', 'Boss stereo speakers', NULL, '2024-03-24 18:24:48', '2024-03-24 18:24:48', '2024-03-24', 'storage/images/lL7rWhpwF9SkHq8EuzuLTNget0USa4w97YsU5ftp.jpg', 'Speaker Wire Terminals', 'white', 'Speaker Units, Speaker Enclosures, Wiring Harness, Mounting Hardware', 'car'),
	(31, 'B0C4HK7QLW', 'Speedmeters Display Dash Monitor', NULL, '2024-03-24 18:27:00', '2024-03-24 18:27:00', '2024-03-24', 'storage/images/2ivZzuJ92mI2UOaFyQHaz7tHJNgk8QBhFe0jf6sK.gif', 'Wiring Harness', 'transparent', 'Display Screen, Control Unit, Wiring Harness, Mounting Hardware', 'car'),
	(32, 'L5300XBEGWW', 'Samsung Super Fast Dual Car Charger', NULL, '2024-03-24 18:38:13', '2024-03-24 18:38:13', '2024-03-24', 'storage/images/4E0FP3gj2WKd91j8QIiKuRkUcOKaRD6g4ckXbdN6.jpg', 'USB Type C', 'black', 'Charging Ports: USB ports or other connectors for charging electronic devices such as smartphones, tablets, or other USB-powered devices.', 'car'),
	(33, 'Mercedes W223 S550', 'Car TV Screen Rear Seat Entertainment System', NULL, '2024-03-24 18:42:40', '2024-03-24 18:42:40', '2024-03-24', 'storage/images/jbedcEEEy3iwJMJ2Ct3QvhgSIchWubd7MHUmD4kb.jpg', 'HDMI Input', 'black', 'Display Screen, Audio System, Control Unit, Input Sources, Remote Control', 'car'),
	(34, 'Tesla Model 3 Y', 'Touch Screen Entertainment System AC ControlzC', NULL, '2024-03-24 18:49:33', '2024-03-24 18:49:33', '2024-03-24', 'storage/images/Qh3cvRFbbaXxHbo15cEMcLReGwxA9wKEwin87Cv3.jpg', 'HDMI Input, Wiring Harness', 'gray', 'Display Screen, Audio System, Control Unit, Input Sources, Remote Control', 'car'),
	(36, 'Series 61319241915', 'Window Switch Door Lock Front Driver Side with Mirror Switch', NULL, '2024-03-24 18:56:29', '2024-03-24 18:56:29', '2024-03-24', 'storage/images/EaubL3yrNICNqvQ9ulGYHcyvQakl4tXG5TspxwS6.jpg', 'wiring harness', 'black', 'Window Switches, Door Lock Switch, Mirror Adjustment Controls', 'car'),
	(37, 'Pioneer ND-BC010', 'Rearview Camera', NULL, '2024-03-24 19:25:18', '2024-03-24 19:25:18', '2024-03-24', 'storage/images/OziCK1ryW3sCiGJyOuPQFhnyzHe6mXkK4FlTqVcN.jpg', 'wiring harness', 'black', 'Camera Unit, Wiring Harness, Display Unit, Mounting Hardware', 'car'),
	(43, 'XiaoMi Yi II 4K', 'GoPro Camera', NULL, '2024-05-16 17:39:08', '2024-05-16 17:39:08', '2024-05-16', 'public/images/gwwYDmyWYVEXDOlqdfSMHeeqAgAp3nWIbOOJniMp.jpg', NULL, NULL, NULL, NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.device_usages : ~7 rows (environ)

-- Listage de la structure de table carmaintain. jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `resume` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `approval` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_user_id_foreign` (`user_id`),
  CONSTRAINT `jobs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.jobs : ~6 rows (environ)
INSERT INTO `jobs` (`id`, `title`, `description`, `resume`, `hash`, `approval`, `created_at`, `updated_at`, `user_id`) VALUES
	(1, 'Job Application: EmployeeAccount002', 'Name: EmployeeAccount002\nEmail: employeeaccount02@gmail.com\nPhone: +216 25 147 369\nCover Letter: Cover Letter 1: Front-End Developer\r\n    Dear [Hiring Manager name],\r\n    \r\n    I am writing to express my keen interest in the Front-End Developer position advertised on [Platform where you saw the job posting]. With [Number] years of experience crafting user-friendly and visually appealing web applications, I possess the skills and passion to contribute significantly to your team.\r\n    \r\n    In my previous role at [Previous company name], I played a key role in developing a new e-commerce platform.  I implemented a responsive design framework (e.g., Bootstrap) ensuring seamless user experience across different devices, resulting in a 15% increase in mobile conversions.  My expertise lies in HTML, CSS, JavaScript, and front-end frameworks like React or Angular.  I\'m also proficient in tools like Git and browser developer tools for efficient development and debugging.\r\n    \r\n    Highly motivated and results-oriented, I thrive on creating intuitive and visually engaging user interfaces.  I excel at collaboration, working effectively with designers and back-end developers to bring projects to life.  I possess a strong problem-solving ability and a constant desire to learn new technologies to stay ahead of the curve.\r\n    \r\n    My portfolio, which you can access at [Link to your portfolio], showcases a selection of my web development projects.  My resume, attached for your review, provides further details on my skills and experience.  Thank you for your time and consideration.  I look forward to discussing my qualifications further and learning more about this exciting opportunity.', 'resumes/Gv6ufgPjTOFBI2Ks1w12jWMyxrH60q62G5odgazI.pdf', '$2y$12$.QS2lchv1oVF30tGXJlNpuJFSvi28wAgDDnw4bB99vtoRT/IdSNn.', NULL, '2024-05-16 23:59:35', '2024-05-16 23:59:35', 5);

-- Listage de la structure de table carmaintain. migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.migrations : ~2 rows (environ)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2024_04_28_154730_create_password_resets_table', 1),
	(2, '2024_04_29_113911_create_client_inbox_table', 2);

-- Listage de la structure de table carmaintain. password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.password_resets : ~0 rows (environ)

-- Listage de la structure de table carmaintain. password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_reset_tokens_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.password_reset_tokens : ~0 rows (environ)
INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
	('garrach76@gmail.com', '$2y$12$7Wpc547/mNZYJEFlSfFT6.8OI4Rq5hwkZ.kZMv964UddlDSljSS1i', '2024-04-28 14:12:01');

-- Listage de la structure de table carmaintain. payment_plans
CREATE TABLE IF NOT EXISTS `payment_plans` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plans : ~3 rows (environ)
INSERT INTO `payment_plans` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(4, 'Client Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47'),
	(5, 'Employee Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47'),
	(6, 'Admin Plan', '2024-02-15 17:48:47', '2024-02-15 17:48:47');

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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_service : ~18 rows (environ)
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
	(20, 5, 8, NULL, NULL),
	(21, 4, 1, NULL, NULL),
	(22, 4, 18, NULL, NULL),
	(23, 6, 18, NULL, NULL),
	(24, 5, 18, NULL, NULL),
	(25, 5, 19, NULL, NULL),
	(26, 5, 1, NULL, NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.payment_plan_user : ~7 rows (environ)
INSERT INTO `payment_plan_user` (`id`, `payment_plan_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(1, 4, 1, NULL, NULL),
	(2, 4, 2, NULL, NULL),
	(3, 4, 3, NULL, NULL),
	(4, 4, 4, NULL, NULL),
	(8, 5, 5, NULL, NULL);

-- Listage de la structure de table carmaintain. personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.purchases : ~15 rows (environ)

-- Listage de la structure de table carmaintain. reports
CREATE TABLE IF NOT EXISTS `reports` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `application_status` int DEFAULT NULL,
  `application_date` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `job` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `reports_user_id_foreign` (`user_id`),
  CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reports : ~8 rows (environ)

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.reviews : ~5 rows (environ)
INSERT INTO `reviews` (`id`, `device_id`, `rate`, `created_at`, `updated_at`) VALUES
	(15, 31, 4.0, '2024-04-29 17:46:08', '2024-04-29 17:46:08'),
	(16, 32, 3.0, '2024-05-11 19:15:46', '2024-05-11 19:15:46'),
	(17, 32, 3.0, '2024-05-11 19:15:50', '2024-05-11 19:15:50'),
	(18, 32, NULL, '2024-05-11 19:17:54', '2024-05-11 19:17:54'),
	(19, 33, 5.0, '2024-05-11 19:18:53', '2024-05-11 19:18:53'),
	(20, 34, 3.0, '2024-05-12 01:19:50', '2024-05-12 01:19:50');

-- Listage de la structure de table carmaintain. schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.schedules : ~2 rows (environ)

-- Listage de la structure de table carmaintain. services
CREATE TABLE IF NOT EXISTS `services` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `route` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.services : ~11 rows (environ)
INSERT INTO `services` (`id`, `name`, `description`, `route`, `created_at`, `updated_at`) VALUES
	(1, 'Basic Maintenance Tracking', 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.', 'basic-maintenance', '2024-02-15 18:31:37', '2024-02-15 18:31:37'),
	(4, 'Car Analytics', 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.', 'car-analytics', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(5, 'Connected Services', 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.', 'connected-services', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(7, 'Full Maintenance Suite', 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.', 'full-maintenance-suite', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(8, 'Customizable Maintenance Schedules', 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.', 'customizable-maintenance-schedules', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(10, 'Priority Customer Support', 'Experience top-notch customer support with our priority service for any queries or assistance you may need.', 'priority-customer-support', '2024-02-15 18:48:47', '2024-02-15 18:48:47'),
	(14, 'Coinsystem', 'exp engagement', 'coin-system', '2024-03-08 12:05:07', '2024-03-08 12:05:07'),
	(15, 'JobApplications', 'list of client, and employees application for role, action, features', 'application-list', '2024-03-09 15:22:41', '2024-03-09 15:22:42'),
	(18, 'LeaderBoard', 'display users earning points', 'leaderboard', '2024-03-25 20:28:32', '2024-03-25 20:33:09'),
	(19, 'Unity Data Monitoring', 'track unity client services, vehicle, devices', 'data-monitoring', '2024-04-13 19:19:39', '2024-04-13 19:19:39');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.userexpcoin : ~13 rows (environ)
INSERT INTO `userexpcoin` (`id`, `created_at`, `updated_at`, `user_id`, `experience`, `coins`) VALUES
	(1, '2024-05-16 23:49:10', '2024-05-16 23:49:10', 1, 0, 0),
	(2, '2024-05-16 23:50:50', '2024-05-16 23:50:50', 2, 0, 0),
	(3, '2024-05-16 23:52:22', '2024-05-16 23:52:22', 3, 0, 0),
	(4, '2024-05-16 23:53:42', '2024-05-16 23:53:42', 4, 0, 0),
	(5, '2024-05-16 23:56:12', '2024-05-16 23:56:12', 5, 0, 0);

-- Listage de la structure de table carmaintain. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.users : ~13 rows (environ)
INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'AdminAccount', 'garrach76@gmail.com', 'admin', NULL, '$2y$12$6vOeAStTzg5TiFt/dbDpZe.DDkaaqJ9MzE0TZEYNR.L2IWo6FMyyW', NULL, '2024-05-16 23:49:10', '2024-05-16 23:49:10'),
	(2, 'ClientAccount001', 'user1@example.com', 'client', NULL, '$2y$12$MO.Ptq68ZF0/Ve9d6mBe2OC42EXAHStIy45ayLs6I.LrWv0FmUYo.', NULL, '2024-05-16 23:50:49', '2024-05-16 23:50:49'),
	(3, 'ClientAccount002', 'user2@example.com', 'client', NULL, '$2y$12$q7B39axYDSIIzE7bwfrkZ.z8IdaX8K7vm4FA88BX9e0XmRIma29sO', NULL, '2024-05-16 23:52:22', '2024-05-16 23:52:22'),
	(4, 'EmployeeAccount001', 'employeeaccount@gmail.com', 'client', NULL, '$2y$12$ZIk17A/WgUpbIrFdPOY5let2HhMhgJkxG4lNnrgaWVrMXg/bnHZoq', NULL, '2024-05-16 23:53:41', '2024-05-16 23:53:41'),
	(5, 'EmployeeAccount002', 'employeeaccount02@gmail.com', 'employee', NULL, '$2y$12$uj60xIjozvW1jBFUyrk5Q.rI31L2tuUxLIa/MCSBElCzP5opAhSTG', NULL, '2024-05-16 23:56:12', '2024-05-17 00:19:04');

-- Listage de la structure de table carmaintain. vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `make` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int NOT NULL,
  `license_plate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=215 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.vehicles : ~3 rows (environ)
INSERT INTO `vehicles` (`id`, `make`, `model`, `year`, `license_plate`, `created_at`, `updated_at`) VALUES
	(11, 'Toyota', 'Corolla', 2022, 'ABC123', '2024-03-17 19:52:30', '2024-03-17 19:52:32'),
	(12, 'Honda', 'Accord', 2023, 'DEF456', '2024-03-17 19:52:31', '2024-03-17 19:52:33'),
	(13, 'Ford', 'Mustang', 2024, 'GHI789', '2024-03-17 19:52:35', '2024-03-17 19:52:34'),
	(214, 'Mercedes', 'Mercedes-Benz S-Class S500', 2021, '12222222222222222', '2024-05-16 17:46:11', '2024-05-16 17:46:11');

-- Listage de la structure de table carmaintain. wish_lists
CREATE TABLE IF NOT EXISTS `wish_lists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `device_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `FK_wish_lists_devices` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_wish_lists_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table carmaintain.wish_lists : ~5 rows (environ)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
