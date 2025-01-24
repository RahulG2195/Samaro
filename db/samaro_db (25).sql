-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 04, 2024 at 03:55 AM
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
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `Id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `resetToken` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`Id`, `username`, `password`, `resetToken`) VALUES
(1, 'user', '$2a$10$ySKjLLYFPmF125bMDtCYWuW39L6NYRqrXRTNiXiq1yaHGmDvznda6', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `basic_info`
--

CREATE TABLE `basic_info` (
  `bi_id` int NOT NULL,
  `comp_logo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile_no_1` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile_no_2` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `facebook_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `insta_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkedin_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `youtube_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_general_ci,
  `map_url` varchar(10255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `comp_footer_logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `twitter_url` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `basic_info`
--

INSERT INTO `basic_info` (`bi_id`, `comp_logo`, `email1`, `email2`, `mobile_no_1`, `mobile_no_2`, `facebook_url`, `insta_url`, `linkedin_url`, `youtube_url`, `address`, `map_url`, `comp_footer_logo`, `twitter_url`) VALUES
(1, 'new_logo.png', 'info@samaro.in', 'export@samaro.in', '+918655984340', '', 'https://www.facebook.com/profile.php?id=100090523595967', 'https://www.instagram.com/samaroflooring/', 'https://www.linkedin.com/in/samaro-flooring-b9966a269', 'https://www.youtube.com/@sapne6070', '5th Floor, Vilco Centre, Subhash Road, Opp. Garware, Vile Parle East, Mumbai-400057, Maharashtra, India', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7540.094382095063!2d72.84777128831631!3d19.105585566319924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5th%20Floor%2C%20Vilco%20Centre%2C%20Subhash%20Road%2C%20Opp.%20Garware%2C%20Vile%20Parle%20East%2C%20Mumbai-400057%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1720672315092!5m2!1sen!2sin', 'logo.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `id` int NOT NULL,
  `icons` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `titles` varchar(255) NOT NULL,
  `sequence` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`id`, `icons`, `titles`, `sequence`) VALUES
(1, 'dust-free.png', 'DUST FREE INSTALLATION', 2),
(2, 'scratch.png', 'SCRATCH RESISTANT', 2),
(3, '1-DayInstallation-01-01-01.webp', '1-DAY INSTALLATION', 1),
(4, 'waterproof.png', '100% WATERPROOF', 3),
(5, 'stain-protection.png', 'STAIN PROTECTION', 3),
(6, 'termite.png', 'TERMITE PROOF', 4),
(7, 'glue-free.png', 'GLUE FREE APPLICATION', 5),
(8, 'fire-resistant.png', 'FIRE RESISTANT', 6),
(9, 'durability.png', 'DURABLE', 7),
(10, 'recyclable.png', '100% RECYCLABLE', 8),
(11, 'WeatherProof-01.webp', 'WEATHER PROOF', 9),
(17, '10YearsWarranty-01.webp', '10 YEARS WARRANTY', 10);

-- --------------------------------------------------------

--
-- Table structure for table `benefits_slider`
--

CREATE TABLE `benefits_slider` (
  `id` int NOT NULL,
  `image` text NOT NULL,
  `heading` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
#1273 - Unknown collation: 'utf8mb4_0900_ai_ci'
--
-- Dumping data for table `benefits_slider`
--

INSERT INTO `benefits_slider` (`id`, `image`, `heading`) VALUES
(1, 'Mask Group 322.png,Mask Group 324.png,Mask Group 325.png,ClickCoreTilesImage copy.webp', 'ClickCore Tiles Benefits');

-- --------------------------------------------------------

--
-- Table structure for table `build_home`
--

CREATE TABLE `build_home` (
  `id` int NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(10255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature1_icon` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature1_title` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature2_icon` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature2_title` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature3_icon` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature3_title` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `build_home`
--

INSERT INTO `build_home` (`id`, `heading`, `description`, `feature1_icon`, `feature1_title`, `feature2_icon`, `feature2_title`, `feature3_icon`, `feature3_title`) VALUES
(1, 'Your Dream Space Begins with the Right Floor', 'Imagine stepping onto floors that feel as good as they look, in your home or at your workplace. At Samaro, we believe in creating spaces that invite you to unwind, create, and connect. Our flooring solutions are designed to enhance your lifestyle, providing comfort, style, and peace of mind, whether you\'re relaxing at home or working in a professional environment. Discover the difference Samaro can make in your residential or commercial projects.', 'Group 29194.svg', '1-Day Installation', 'Durability-01.png', 'Unmatched Durability', 'StylishDesigns-01.png', 'Stylish Designs');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int NOT NULL,
  `cat_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `cat_status` int NOT NULL DEFAULT '1',
  `cat_added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_status`, `cat_added_on`) VALUES
(1, 'SPC', 1, '2024-05-30 06:52:56'),
(2, 'LVT', 1, '2024-05-30 06:52:56');

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int NOT NULL,
  `logo` varchar(2555) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `logo`) VALUES
(19, '7.png'),
(20, '8.png'),
(21, '9.png'),
(22, '5.png'),
(23, '6.png'),
(24, '1.png'),
(26, '3.png'),
(27, '4.png'),
(28, '10.png'),
(29, 'c2.png');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int NOT NULL,
  `clrCode` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `clrCode`, `image`, `status`) VALUES
(1, 'Beige', 'Mask Group 286.png', 1),
(2, 'Dark Brown', 'Mask Group 287.png', 1),
(3, 'Grey', 'Mask Group 289.png', 1),
(4, 'Dark grey', 'Mask Group 290.png', 1),
(5, 'Light grey', 'Mask Group 291.png', 1),
(6, 'Brown', 'Mask Group 292.png', 1),
(7, 'Light brown', 'Mask Group 290.png', 1),
(8, 'Light Beige', 'Mask Group 299.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dimensions`
--

CREATE TABLE `dimensions` (
  `id` int NOT NULL,
  `plank_sizes_heading` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_sizes_description` text COLLATE utf8mb4_general_ci,
  `plank_sizes_image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_heading` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_description` text COLLATE utf8mb4_general_ci,
  `plank_thickness_main_image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_1_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_1` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_2_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_2` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_3_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_3` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dimensions`
--

INSERT INTO `dimensions` (`id`, `plank_sizes_heading`, `plank_sizes_description`, `plank_sizes_image_url`, `plank_thickness_heading`, `plank_thickness_description`, `plank_thickness_main_image_url`, `plank_thickness_image_1_url`, `plank_thickness_size_range_1`, `plank_thickness_image_2_url`, `plank_thickness_size_range_2`, `plank_thickness_image_3_url`, `plank_thickness_size_range_3`, `created_at`, `updated_at`) VALUES
(1, 'Our Popular Plank Size', 'Explore endless possibilities with our popular plank sizes, curated for diverse tastes. From versatile widths to exquisite lengths, our selection ensures the perfect fit, seamlessly blending style and functionality. Transform your space with excellence as you choose from our acclaimed plank sizes, setting new standards in flooring.', 'd1.png', 'Plank Thickness & Wear Layer', 'Discover the Perfect Balance of Optimal strength and Style', 'd2.png', 'Group 28285.svg', 'LVT: 1.5mm to 3mm', 'Group 28287.svg', 'SPC: 3.5mm to 8mm', 'Group 28289.svg', 'WEAR LAYER: 0.1mm to 0.7mm', '2024-06-19 09:55:46', '2024-07-08 09:09:28');

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

-- --------------------------------------------------------

--
-- Table structure for table `featured_range`
--

CREATE TABLE `featured_range` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `featured_range`
--

INSERT INTO `featured_range` (`id`, `name`, `description`, `image`) VALUES
(1, 'Wood Finish', 'Experience the natural beauty and warmth of wood with our realistic wood-look flooring', 'WoodFinishImage.png'),
(2, 'Stone Finish', 'Add a touch of elegance and sophistication with our stunning stone-inspired flooring', 'StoneFinshImage4.png'),
(3, 'Marble Finish', 'Stay tuned for our upcoming collection of luxurious marble-look flooring', 'MarleFinishImage.png'),
(4, 'Ceramic Finish', 'A durable and stylish garden furniture set made for outdoor relaxation.', 'MarleFinishImage.png');

-- --------------------------------------------------------

--
-- Table structure for table `floor_explorer`
--

CREATE TABLE `floor_explorer` (
  `id` int NOT NULL,
  `heading` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sub_heading` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `button` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ply_image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tab_image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `floor_explorer`
--

INSERT INTO `floor_explorer` (`id`, `heading`, `sub_heading`, `description`, `button`, `url`, `ply_image`, `tab_image`) VALUES
(1, 'How to choose my perfect floor?', 'FLOOREXPLORER', 'Let our Floor Explorer be your compass to the perfect floor. We\'re here to guide your big decision with expertise and cares!\r\n\r\n', 'START THE FLOOREXPLOORER', '/FindYourMatch', 'ply.png', 'tab.png');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int NOT NULL,
  `imageName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `imageName`, `created_on`) VALUES
(37, '2 (20).webp', '2024-07-08 09:48:48'),
(38, '1 (2).webp', '2024-07-08 10:01:42'),
(39, '1 (3).webp', '2024-07-08 10:01:42'),
(41, '1 (5).webp', '2024-07-08 10:01:42'),
(42, '1 (6).webp', '2024-07-08 10:01:42'),
(43, '1 (7).webp', '2024-07-08 10:01:42'),
(44, '1 (8).webp', '2024-07-08 10:01:42'),
(45, '1 (9).webp', '2024-07-08 10:01:42'),
(46, '1 (10).webp', '2024-07-08 10:01:42'),
(47, '1 (11).webp', '2024-07-08 10:01:42'),
(48, '1 (12).webp', '2024-07-08 10:01:42'),
(50, '1 (14).webp', '2024-07-08 10:01:43'),
(51, '1 (15).webp', '2024-07-08 10:01:43'),
(54, '1 (13).webp', '2024-07-08 10:01:43'),
(55, '1 (14).webp', '2024-07-08 10:01:43'),
(57, '2 (2).webp', '2024-07-08 10:01:43'),
(58, '2 (3).webp', '2024-07-08 10:01:43'),
(59, '2 (4).webp', '2024-07-08 10:01:43'),
(60, '2 (5).webp', '2024-07-08 10:01:43'),
(61, '2 (20).webp', '2024-07-08 10:03:37'),
(62, '2 (19).webp', '2024-07-08 10:03:37'),
(63, '2 (18).webp', '2024-07-08 10:03:38'),
(65, '2 (16).webp', '2024-07-08 10:03:38'),
(66, '2 (15).webp', '2024-07-08 10:03:38'),
(67, '2 (14).webp', '2024-07-08 10:03:38'),
(68, '2 (14).webp', '2024-07-08 10:03:38'),
(71, '2 (11).webp', '2024-07-08 10:03:38'),
(75, '2 (9).webp', '2024-07-08 10:03:38');

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

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `news_id` int NOT NULL,
  `news_category` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imgurl` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `video` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`news_id`, `news_category`, `imgurl`, `title`, `date`, `author`, `video`, `status`) VALUES
(1, 'New Launch', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-06-19 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(2, 'Product Knowledge', 'picture@2x.png', 'Seven tips to help you to get better flooring design & concept', '2024-06-19 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(3, 'Events', 'picture@2x.png', 'Seven tips to help you to get better flooring design & concept', '2024-06-19 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(4, 'New Launch', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-06-19 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(5, 'New Launch', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-07-07 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(6, 'New Launch', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-07-07 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(7, 'Product Knowledge', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-07-07 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1),
(8, 'Events', 'picture.png', 'Seven tips to help you to get better flooring design & concept', '2024-07-07 18:30:00', 'Anand Kashyap', 'Samaro- Building Lifestyle_Why samaro Banner.mp4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `prod_id` int NOT NULL,
  `prod_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `cat_id` int NOT NULL,
  `prod_code` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `seo_url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `prod_catalogue` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `variation` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `thikness` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `layer` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_images` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prod_image2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `prod_finish` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_size` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_spiece` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `no_of_groves` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `m2pack` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_status` int NOT NULL DEFAULT '1',
  `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `colorId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `prod_name`, `cat_id`, `prod_code`, `seo_url`, `prod_catalogue`, `variation`, `color`, `place`, `thikness`, `layer`, `prod_images`, `prod_image2`, `prod_finish`, `prod_size`, `prod_spiece`, `no_of_groves`, `m2pack`, `plank`, `prod_status`, `added_on`, `colorId`) VALUES
(1, 'Hickory smoke', 1, 'SAM0008', 'Hickory_smoke', 'TUSCANY', 'Wood', 'Beige', '[\"Bedroom\",\"Hallway\",\"Childrensroom\"]', '4 mm', '4', 'SAM0008- Hickory smoke WITHOUT INSTALLATION.webp', 'SAM0008- Hickory smoke INSTALLATION.webp', NULL, 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', NULL, '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 1),
(2, 'Raven', 1, 'SAM0013', 'Raven', 'TUSCANY', 'Wood', 'Dark brown', 'Bathroom', '5 mm', '4', 'SAM0013 -Raven WITHOUT INSTALLATION.webp', 'SAM0013- Raven INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 2),
(3, 'Ginger Gold', 2, 'SAM0017', 'Ginger-Gold', 'TUSCANY', 'Wood', 'Dark brown', 'Bedroom', '6 mm', '4', 'SAM0017- ginger gold  WITHOUT INSTALLATION.webp', 'SAM0017- Ginger gold INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 2),
(4, 'Ash Grey', 1, 'SAM0024', 'Ash-Grey', 'TUSCANY', 'Wood', 'Grey', 'Bedroom', '7 mm', '4', 'SAM0024 - Ash grey WITHOUT INSTALLATION.webp', 'SAM0024 - Ash grey INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 3),
(5, 'Ash wood', 1, 'SAM0025', 'Ash-wood', 'TUSCANY', 'Wood', 'Light brown', 'Children\'s room', '8 mm', '4', 'SAM0025 Ash WOOD WITHOUT INSTALLATION.webp', 'SAM0025 Ash wood INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 7),
(6, 'Pebble', 1, 'SAM0029', 'Pebble', 'TUSCANY', 'Wood', 'Dark grey', 'Children\'s room', '9 mm', '4', 'SAM0029 - Pebble WITHOUT INSTALLATION.webp', 'SAM0029 - Pebble INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 4),
(7, 'Raw Honey', 1, 'SAM0031', 'Raw-Honey', 'TUSCANY', 'Wood', 'Beige', 'Dining room', '10 mm', '4', 'SAM0031 - Raw honey WITHOUT INSTALLATION.webp', 'SAM0031 - Raw honey INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 1),
(8, 'Cherry Wood', 1, 'SAM0034', 'Cherry-Wood', 'TUSCANY', 'Wood', 'Dark brown', 'Dining room', '11 mm', '4', 'SAM0034 - Cherry wood INSTALLATION.webp', 'SAM0034 - Cherry wood INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 2),
(9, 'Copper Sand', 1, 'SAM0038', 'Copper-Sand', 'TUSCANY', 'Wood', 'brown', 'Hallway', '12 mm', '4', 'SAM0038 -Copper sand WITHOUT INSTALLTION.webp', 'SAM0038 - Copper sand INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 6),
(10, 'Casper Grey', 1, 'SAM501', 'Casper-Grey', 'TUSCANY', 'Wood', 'beige', 'Hallway', '13 mm', '4', 'SAM501 - Casper grey WITHOIUT INSTALLATION.webp', 'SAM501 - Casper grey INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 1),
(11, 'Vintage Oak', 1, 'SAM504', 'Vintage-Oak', 'TUSCANY', 'Wood', 'brown', 'Kitchen', '14 mm', '4', 'SAM504 - Vintage oak WITHOUT INSTALLATION.webp', 'SAM504 -Vintage oak INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 6),
(12, 'Chester Hills', 1, 'SAM0529', 'Chester-Hills', 'TUSCANY', 'Stone', 'brown', 'Kitchen', '15 mm', '4', 'SAM0529 - chester hills WITHOUT INSTALLATION.webp', 'SAM0529 - chester hills INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 6),
(13, 'Swiss Light', 1, '502', 'Swiss-Light', 'SICILIAN', 'Stone', 'Dark Grey', 'Living room', '16 mm', '4', '502 - Swiss light WITHOUT INSTALLATION.webp', '502 - Swiss light WITHOUT INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 4),
(14, 'Maplewood', 1, '505', 'Maplewood', 'SICILIAN', 'Stone', 'Light Grey', 'Living room', '17 mm', '4', '505 - maplewood WITHOUT INSTALLATION.webp', '505 - maplewood INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 5),
(15, 'Teak Finish', 1, '522', 'Teak-Finish', 'SICILIAN', 'Wood', 'light brown', 'Office', '18 mm', '4', '522 - Teak finish WITHOUT INSTALLATION.webp', '522 - Teak finish INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 7),
(16, 'Oakfield', 1, '523', 'Oakfield', 'SICILIAN', 'Wood', 'light brown', 'Office', '19 mm', '4', '523 -  oakfield WITHOUT INSTALLATION.webp', '523 - Oakfield INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 7),
(17, 'Sol Butter', 1, '524', 'Sol-Butter', 'SICILIAN', 'Marble', 'Beige', 'Bathroom', '20 mm', '4', '524- Sol butter WITHOUT INSTALLATION.webp', '524 - Sol butter INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 1),
(18, 'Cedar Hollow', 1, '526', 'Cedar-Hollow', 'SICILIAN', 'Marble', 'Light Brown', 'Bedroom', '21 mm', '4', '526 - Cedar hollow WITHOUT INSTALLATION.webp', '526 - Cedar hollow WITH INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 7),
(19, 'Oak Natural', 1, '527', 'Oak-Natural', 'SICILIAN', 'Wood', 'brown', 'Children\'s room', '22 mm', '4', '527 - Oak natural WITHOUT INSTALLATION.webp', '527 - Oak natural INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 6),
(20, 'Ashford', 1, '528', 'Ashford', 'SICILIAN', 'Wood', 'light beige', 'Hallway', '23 mm', '4', '528 - Ashford WITHOUT INSTALLATION.webp', '528 - Ashford INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 8),
(21, 'Walnut Oak', 1, '532', 'Walnut-Oak', 'SICILIAN', 'Wood', 'dark brown', 'Kitchen', '24 mm', '4', '532 - Walnut oak WITHOUT INSTALLATION.webp', '532 - Walnut oak INSTALLATION.webp', 'Classic wood, modern oak & rough hand-craped wood', 'Plank 7.13 x 48.03 inches', 'modern oak and rough hand-craped wood', '4 grooves', '(23.7 sqft)', '10', 1, '2024-05-30 06:52:09', 2),
(22, 'Test12345', 2, '1234', 'Test', 'TUSCANY', 'wood', 'Beige', '[\"Living room\",\"Office\",\"Bathroom\"]', '1', '1', '1 (3).webp,1 (7).webp', '1 (7).webp', '1', '10', '1', '1', '1', '1', 1, '2024-08-01 05:38:49', 1),
(26, 'testing 2nd', 1, '1234', 'testing_2nd', 'TUSCANY', 'wood', 'Beige', '[\"Living room\"]', '1', '1', '1 (7) - Copy.webp,1 (7).webp', '1 (7) - Copy.webp,1 (7).webp', '1', '10', '1', '1', '1', '1', 1, '2024-09-11 06:54:52', 1);

--
-- Triggers `products`
--
DELIMITER $$
CREATE TRIGGER `trg_update_colorId` BEFORE INSERT ON `products` FOR EACH ROW BEGIN
    DECLARE v_colorId INT;
    
    SELECT id INTO v_colorId
    FROM color
    WHERE LOWER(clrCode) = LOWER(NEW.color)
    LIMIT 1;

    SET NEW.colorId = v_colorId;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `spaces`
--

CREATE TABLE `spaces` (
  `id` int NOT NULL,
  `commercial_images` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `residential_images` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `spaces`
--

INSERT INTO `spaces` (`id`, `commercial_images`, `residential_images`) VALUES
(1, '1.jpg,2.jpg,Mask Group 127.png,1 (1).webp,2 (20).webp', 'Mask Group 12.png,Mask Group 128.png,1.jpg,2 (5).webp');

-- --------------------------------------------------------

--
-- Table structure for table `timeline`
--

CREATE TABLE `timeline` (
  `id` int NOT NULL,
  `year` varchar(4) NOT NULL,
  `title` text NOT NULL,
  `icon` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timeline`
--

INSERT INTO `timeline` (`id`, `year`, `title`, `icon`) VALUES
(1, '1952', 'NATIONAL PLASTICS FOUNDED A RICH LEGACY OF 70+ YEARS', 'fa-building'),
(2, '2019', 'Samaro Founded', 'fa-briefcase'),
(3, '2020', 'STARTED PRODUCTION WITH 2 EXTRUDERS & 1 HOMAG PROFILING MACHINE', 'fa-cogs'),
(4, '2021', 'ADDED 1 MORE EXTRUSION LINE', 'fa-plus-circle'),
(5, '2022', 'MOVED TO A 30 ACRE PRODUCTION FACILITY ', 'fa-map-signs'),
(6, '2023', 'ADDED 5 EXTRUDERS & 2 HOMAG PROFILE LINES', 'fa-tools'),
(7, '2024', 'ADDED 3 MORE LINES + 1 HOMAG LINE', 'fa-rocket'),
(8, '2024', 'INDIA\'S LARGEST MANUFACTURER & EXPORTER OF SPC FLOORING', 'fa-globe');

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
(1, 'Vision', 'Vision', 'We aim to be a global leader in building materials, setting new standards in innovation and design. From homes to commercial spaces, our goal is to create products that inspire, endure, and elevate spaces for generations.', 'vision.png', '2024-06-19 04:54:26', '2024-10-01 06:40:05'),
(2, 'Mission', 'Mission', 'At Samaro Flooring, we create flooring solutions that combine style, comfort, and sustainability. Using cutting-edge technology and eco-friendly materials, we aim to enhance every space while contributing to a more sustainable future in building materials.', 'mission.png', '2024-06-19 04:54:26', '2024-10-01 06:40:19');

-- --------------------------------------------------------

--
-- Table structure for table `whysamaro_benifits`
--

CREATE TABLE `whysamaro_benifits` (
  `id` int NOT NULL,
  `point_heading` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `subpoints` text COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `whysamaro_benifits`
--

INSERT INTO `whysamaro_benifits` (`id`, `point_heading`, `subpoints`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'Manufacturing', 'Blend materials for durability., Layer vinyl for stability., Added texture for realism., Cut for precise fit., Apply protective finish.', 'Group 28879.svg', '2024-06-19 09:18:15', '2024-07-08 08:28:01'),
(2, 'Product Performance', 'Resilience: Withstands scratches and impacts., 100% Water Resistance: Ideal for moisture-prone areas., Stability: Maintains shape in different temperatures., Easy Care: Requires minimal cleaning effort., Longevity: Designed for lasting performance.', 'Group 28880.svg', '2024-06-19 09:18:15', '2024-07-08 08:28:01'),
(3, 'Quality Assurance', 'International Standards Compliance: Meets quality benchmarks., Material Inspection: Rigorously checks raw materials., Production Oversight: Constant monitoring during manufacturing., Quality Testing: Thorough assessment of finished products., Feedback Integration: Incorporates customer input for improvement.', 'Group 28877.svg', '2024-06-19 09:18:15', '2024-07-08 08:28:01'),
(4, 'lnnovating', 'Sustainable Materials: Eco-friendly exploration., Innovative Designs: Developing reusable and renewable material with new design and shades., Smart Integration: Technological functionality., Custom Solutions: Tailored options., Enhanced Performance: Focus on durability.', 'Group 28883.svg', '2024-06-19 09:18:15', '2024-07-08 08:28:01');

-- --------------------------------------------------------

--
-- Table structure for table `whysamaro_download_center`
--

CREATE TABLE `whysamaro_download_center` (
  `id` int NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `heading` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `button_text` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `button_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `whysamaro_download_center`
--

INSERT INTO `whysamaro_download_center` (`id`, `image_url`, `heading`, `description`, `button_text`, `button_url`) VALUES
(1, '2.png', 'Download Center', 'Check out our Download Center to easily find all our PDFs and resources about our flooring products.', 'BROCHURE & DOWNLOAD CENTER', '/downloadedCenter');

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
(1, 'The amazing JOURNEY of', 'At Samaro Flooring, we draw from over 70+ years of manufacturing expertise in the plastic\r\nprocessing industry to craft innovative, high-quality flooring solutions. In 2019, we embarked on a\r\nnew journey to redefine the flooring market with our SPC and LVT products. In just three years,\r\nwe’ve rapidly become India’s largest manufacturer in this sector.\r\n\r\nOur success is powered by a relentless commitment to innovation, quality, and sustainability. Our\r\nstate-of-the-art facility in Gujarat, with an annual capacity of over 15 million square meters,\r\nenables us to meet the diverse needs of both residential and commercial spaces across the\r\ncountry. Whether it’s creating warm, inviting homes or robust, stylish commercial environments,\r\nSamaro Flooring is trusted to deliver excellence at every step.', 'Samaro- About us Page1.mp4', 'logo.png', '2024-06-19 03:50:02', '2024-09-25 05:55:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `basic_info`
--
ALTER TABLE `basic_info`
  ADD PRIMARY KEY (`bi_id`);

--
-- Indexes for table `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `benefits_slider`
--
ALTER TABLE `benefits_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `build_home`
--
ALTER TABLE `build_home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dimensions`
--
ALTER TABLE `dimensions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `download_center`
--
ALTER TABLE `download_center`
  ADD PRIMARY KEY (`dc_id`);

--
-- Indexes for table `featured_range`
--
ALTER TABLE `featured_range`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `floor_explorer`
--
ALTER TABLE `floor_explorer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `herobanner`
--
ALTER TABLE `herobanner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `spaces`
--
ALTER TABLE `spaces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timeline`
--
ALTER TABLE `timeline`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vision_mission`
--
ALTER TABLE `vision_mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whysamaro_benifits`
--
ALTER TABLE `whysamaro_benifits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whysamaro_download_center`
--
ALTER TABLE `whysamaro_download_center`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whysamaro_video`
--
ALTER TABLE `whysamaro_video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `benefits`
--
ALTER TABLE `benefits`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `benefits_slider`
--
ALTER TABLE `benefits_slider`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `download_center`
--
ALTER TABLE `download_center`
  MODIFY `dc_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `featured_range`
--
ALTER TABLE `featured_range`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `herobanner`
--
ALTER TABLE `herobanner`
  MODIFY `banner_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `news_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `prod_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `timeline`
--
ALTER TABLE `timeline`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
