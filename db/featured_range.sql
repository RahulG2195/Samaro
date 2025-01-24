-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 04, 2024 at 05:09 AM
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
-- Table structure for table `featured_range`
--

CREATE TABLE `featured_range` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `featured_range`
--

INSERT INTO `featured_range` (`id`, `name`, `description`, `image`) VALUES
(1, 'Wood Finish', 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', 'WoodFinishImage.png'),
(2, 'Stone Finish', 'Add a touch of elegance and sophistication with our stunning stone-inspired flooring', 'StoneFinshImage4.png'),
(3, 'Marble Finish', 'Stay tuned for our upcoming collection of luxurious marble-look flooring', 'MarleFinishImage.png'),
(4, 'Ceramic Finish', 'A durable and stylish garden furniture set made for outdoor relaxation.', 'MarleFinishImage.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `featured_range`
--
ALTER TABLE `featured_range`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `featured_range`
--
ALTER TABLE `featured_range`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
