-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2024 at 06:29 AM
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
-- Table structure for table `herobanner`
--

CREATE TABLE `herobanner` (
  `banner_id` int NOT NULL,
  `banner_title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `banner_content` text COLLATE utf8mb4_general_ci,
  `banner_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `button_text` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `banner_img` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobileBanner_img` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `herobanner`
--

INSERT INTO `herobanner` (`banner_id`, `banner_title`, `banner_content`, `banner_url`, `button_text`, `banner_img`, `mobileBanner_img`) VALUES
(1, 'Home page', 'Premium Quality SPC & LVT flooring.', '/product/All', 'Discover all our floors', 'Group 28041.png,banner.jpg', 'homeMobile banner.png'),
(2, 'Premium quality SPC flooring', 'High-quality LVT flooring.', '/downloadCenter', 'BROCHURE & DOWNLOAD CENTER', 'Samaro-Halfnhalf-banner.jpg', 'Group 29096.png'),
(3, 'contact us page', 'We’re Here to Help', '/#', 'Home -> Contact', 'Mask Group 218.png', 'Group 28545.png'),
(4, 'Get to know our SPC Collection', 'True to natures design. With its elegance and authenticity, it is almost impossible to distinguish Capture from real wood. Our high-quality floors are the result of refined craftmanship and innovation. That is why you cannot miss out on our Capture laminate floors.', '/product/All', 'Discover Spc Flooring', 'Mask Group 265.png', 'mobimg.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `herobanner`
--
ALTER TABLE `herobanner`
  ADD PRIMARY KEY (`banner_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `herobanner`
--
ALTER TABLE `herobanner`
  MODIFY `banner_id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
