-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2024 at 09:31 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `samaro_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `vision_mission`
--

CREATE TABLE `vision_mission` (
  `id` int NOT NULL,
  `type` enum('Vision','Mission') COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `subpoints` text COLLATE utf8mb4_general_ci,
  `logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vision_mission`
--

INSERT INTO `vision_mission` (`id`, `type`, `title`, `subpoints`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'Vision', 'Vision', 'We dream of a future where Samaro Flooring is the first name that comes to mind when you think about transforming any space—whether it’s the warmth of your living room, the buzz of your office, or the elegance of a hotel suite. Our goal is to craft floors that not only complement the character of your space but also last through all of life’s moments, big and small.', 'vision.png', '2024-06-19 04:54:26', '2024-09-03 06:53:35'),
(2, 'Mission', 'Mission', 'At Samaro Flooring, we’re all about making spaces feel just right. Our mission is simple: to create flooring that not only looks amazing but also feels like home, no matter where you are. We combine the latest technology with sustainable materials and thoughtful design to ensure that every step you take on a Samaro floor is one of comfort, confidence, and satisfaction. Because we believe your floors should do more than just cover space—they should enhance your life.', 'mission.png', '2024-06-19 04:54:26', '2024-09-03 06:53:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vision_mission`
--
ALTER TABLE `vision_mission`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
