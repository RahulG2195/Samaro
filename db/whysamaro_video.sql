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
-- Table structure for table `whysamaro_video`
--

CREATE TABLE `whysamaro_video` (
  `id` int NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `whysamaro_video`
--

INSERT INTO `whysamaro_video` (`id`, `heading`, `description`, `video`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'The amazing JOURNEY of', 'At Samaro Flooring, we draw from over 50 years of manufacturing expertise in the plastic\r\nprocessing industry to craft innovative, high-quality flooring solutions. In 2019, we embarked on a\r\nnew journey to redefine the flooring market with our SPC and LVT products. In just three years,\r\nwe’ve rapidly become India’s largest manufacturer in this sector.\r\n\r\nOur success is powered by a relentless commitment to innovation, quality, and sustainability. Our\r\nstate-of-the-art facility in Gujarat, with an annual capacity of over 15 million square meters,\r\nenables us to meet the diverse needs of both residential and commercial spaces across the\r\ncountry. Whether it’s creating warm, inviting homes or robust, stylish commercial environments,\r\nSamaro Flooring is trusted to deliver excellence at every step.', 'Samaro- About us Page1.mp4', 'logo.png', '2024-06-19 03:50:02', '2024-09-03 06:47:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `whysamaro_video`
--
ALTER TABLE `whysamaro_video`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
