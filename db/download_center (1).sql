-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 27, 2024 at 10:36 AM
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
  `dc_category` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `dc_type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `imgurl` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pdf` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '1',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Badgetitle` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `download_center`
--

INSERT INTO `download_center` (`dc_id`, `dc_category`, `dc_type`, `imgurl`, `pdf`, `status`, `date`, `Badgetitle`) VALUES
(2, 'Brochure', 'Type 2', 'Brochure.png', 'LVT Brochure 1.5mm (1).pdf', 1, '2024-06-24 01:35:52', 'SPC Tuscany'),
(3, 'Installation Guide', 'Type 3', 'Installation Guide banner.png', 'Samara flooring product installation guide.docx', 1, '2024-06-24 01:35:52', 'Installation'),
(4, 'Warranty', 'Type 16', 'Residential Warranty banner.png', 'Samaro Flooring Warranty - Residential final revised (1).pdf', 1, '2024-06-24 01:35:52', 'Warrenty'),
(5, 'Brochure', 'Type 2', 'Brochure.png', 'LVT brochure 4 page (1).pdf', 1, '2024-06-24 01:35:52', 'SPC Sicillian'),
(7, 'Warranty', 'type 16', 'Commercial Warranty banner.png', 'Samaro Flooring Warranty - Commercial final updated commercial (1).pdf', 1, '2024-08-26 10:41:13', 'Warranty');

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
  MODIFY `dc_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
