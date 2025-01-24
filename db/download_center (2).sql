-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2025 at 07:37 AM
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
-- Table structure for table `download_center`
--

CREATE TABLE `download_center` (
  `dc_id` int NOT NULL,
  `dc_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dc_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pdf` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '1',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Badgetitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `download_center`
--

INSERT INTO `download_center` (`dc_id`, `dc_category`, `dc_type`, `imgurl`, `pdf`, `status`, `date`, `Badgetitle`) VALUES
(1, 'LookBook', 'lookbook', 'Look Book.jpg', 'Look Book.pdf', 1, '2025-01-24 07:07:24', 'lookbook'),
(2, 'Brochure', 'Tuscany', 'Tuscany Collection.png', 'Tuscany Collection.pdf', 1, '2024-06-24 01:35:52', 'Tuscany'),
(3, 'Brochure', 'Sicilian', 'Sicilian Collection.png', 'Sicilian Collection.pdf', 1, '2024-06-24 01:35:52', 'Sicilian'),
(4, 'Brochure', 'Herringbone', 'Herringbone Collection-01.jpg', 'Herringbone Collection.pdf', 1, '2024-06-24 01:35:52', 'Herringbone'),
(5, 'Brochure', 'Elysian', 'Elysian Collection.jpg', 'Elysian Collection.pdf', 1, '2024-06-24 01:35:52', 'Elysian'),
(7, 'Brochure', 'Midnight Grain', 'Midnight Grain Collection.jpg', 'Midnight Grain Collection.pdf', 1, '2024-08-26 10:41:13', 'Midnight Grain'),
(9, 'Brochure', 'Marble', 'Marble Collection-01.jpg', 'Marble Collection.pdf', 1, '2025-01-24 06:52:14', 'Marble'),
(10, 'Installation Guide', 'installation', 'Installation SPC Final-01.png', 'Installation SPC Final.pdf', 1, '2025-01-24 06:57:40', 'installation'),
(11, 'Warranty', 'residential', 'Warranty v3 Residential-01.jpg', 'Warranty v3 Residential.pdf', 1, '2025-01-24 06:58:34', 'residential'),
(12, 'Warranty', 'commercial', 'Warranty v3 Commercial-01.jpg', 'Warranty v3 Commercial.pdf', 1, '2025-01-24 06:58:59', 'commercial');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `download_center`
--
ALTER TABLE `download_center`
  ADD PRIMARY KEY (`dc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `download_center`
--
ALTER TABLE `download_center`
  MODIFY `dc_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
