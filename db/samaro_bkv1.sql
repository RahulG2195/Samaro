-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: samaro_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adminlogin`
--

DROP TABLE IF EXISTS `adminlogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminlogin` (
  `Id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `resetToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminlogin`
--

LOCK TABLES `adminlogin` WRITE;
/*!40000 ALTER TABLE `adminlogin` DISABLE KEYS */;
INSERT INTO `adminlogin` VALUES (1,'user','$2a$10$ySKjLLYFPmF125bMDtCYWuW39L6NYRqrXRTNiXiq1yaHGmDvznda6',NULL);
/*!40000 ALTER TABLE `adminlogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `basic_info`
--

DROP TABLE IF EXISTS `basic_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_info` (
  `bi_id` int NOT NULL,
  `comp_logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile_no_1` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile_no_2` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `facebook_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `insta_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `linkedin_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `youtube_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `map_url` varchar(10255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `comp_footer_logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `twitter_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`bi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_info`
--

LOCK TABLES `basic_info` WRITE;
/*!40000 ALTER TABLE `basic_info` DISABLE KEYS */;
INSERT INTO `basic_info` VALUES (1,'new_logo.png','info@samaro.in','export@samaro.in','+918655984340','','https://www.facebook.com/profile.php?id=100090523595967','https://www.instagram.com/samaroflooring/','https://www.linkedin.com/in/samaro-flooring-b9966a269','https://www.youtube.com/@sapne6070','5th Floor, Vilco Centre, Subhash Road, Opp. Garware, Vile Parle East, Mumbai-400057, Maharashtra, India','https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7540.094382095063!2d72.84777128831631!3d19.105585566319924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5th%20Floor%2C%20Vilco%20Centre%2C%20Subhash%20Road%2C%20Opp.%20Garware%2C%20Vile%20Parle%20East%2C%20Mumbai-400057%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1720672315092!5m2!1sen!2sin','White logo-01.png','');
/*!40000 ALTER TABLE `basic_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `benefits`
--

DROP TABLE IF EXISTS `benefits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `benefits` (
  `id` int NOT NULL AUTO_INCREMENT,
  `icons` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `titles` varchar(255) NOT NULL,
  `sequence` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benefits`
--

LOCK TABLES `benefits` WRITE;
/*!40000 ALTER TABLE `benefits` DISABLE KEYS */;
INSERT INTO `benefits` VALUES (1,'dust-free.png','DUST FREE INSTALLATION',2),(2,'scratch.png','SCRATCH RESISTANT',2),(3,'1-DayInstallation-01-01-01.webp','1-DAY INSTALLATION',1),(4,'waterproof.png','100% WATERPROOF',3),(5,'stain-protection.png','STAIN PROTECTION',3),(6,'termite.png','TERMITE PROOF',4),(7,'glue-free.png','GLUE FREE APPLICATION',5),(8,'fire-resistant.png','FIRE RESISTANT',6),(9,'durability.png','DURABLE',7),(10,'recyclable.png','100% RECYCLABLE',8),(11,'WeatherProof-01.webp','WEATHER PROOF',9),(17,'10YearsWarranty-01.webp','10 YEARS WARRANTY',10);
/*!40000 ALTER TABLE `benefits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `benefits_slider`
--

DROP TABLE IF EXISTS `benefits_slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `benefits_slider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benefits_slider`
--

LOCK TABLES `benefits_slider` WRITE;
/*!40000 ALTER TABLE `benefits_slider` DISABLE KEYS */;
INSERT INTO `benefits_slider` VALUES (1,'ClickCoreTilesImage copy.webp','ClickCore Tiles Benefits');
/*!40000 ALTER TABLE `benefits_slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `build_home`
--

DROP TABLE IF EXISTS `build_home`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `build_home` (
  `id` int NOT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(10255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature1_icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature1_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature2_icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature2_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature3_icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `feature3_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `build_home`
--

LOCK TABLES `build_home` WRITE;
/*!40000 ALTER TABLE `build_home` DISABLE KEYS */;
INSERT INTO `build_home` VALUES (1,'Your Dream Space Begins with the Right Floor','Imagine stepping onto floors that feel as good as they look, in your home or at your workplace. At Samaro, we believe in creating spaces that invite you to unwind, create, and connect. Our flooring solutions are designed to enhance your lifestyle, providing comfort, style, and peace of mind, whether you\'re relaxing at home or working in a professional environment. Discover the difference Samaro can make in your residential or commercial projects.','Group 29194.svg','1-Day Installation','Durability-01.png','Unmatched Durability','StylishDesigns-01.png','Stylish Designs');
/*!40000 ALTER TABLE `build_home` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cat_status` int NOT NULL DEFAULT '1',
  `cat_added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'SPC',1,'2024-05-30 06:52:56'),(2,'LVT',1,'2024-05-30 06:52:56');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certifications`
--

DROP TABLE IF EXISTS `certifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logo` varchar(2555) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certifications`
--

LOCK TABLES `certifications` WRITE;
/*!40000 ALTER TABLE `certifications` DISABLE KEYS */;
INSERT INTO `certifications` VALUES (36,'Certificate_logo_Sticker-12.png'),(37,'Certificate_logo_Sticker-11.png'),(38,'Certificate_logo_Sticker-08.png'),(39,'Certificate_logo_Sticker-07.png'),(40,'Certificate_logo_Sticker-09.png'),(42,'Certificate_logo_Sticker-10 (2).png');
/*!40000 ALTER TABLE `certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clrCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Beige','Mask Group 286.png',1),(2,'Dark Brown','Mask Group 287.png',1),(3,'Grey','Mask Group 289.png',1),(4,'Dark grey','Mask Group 290.png',1),(5,'Light grey','Mask Group 291.png',1),(6,'Brown','Mask Group 292.png',1),(7,'Light brown','Mask Group 290.png',1),(8,'Light Beige','Mask Group 299.png',1);
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dimensions`
--

DROP TABLE IF EXISTS `dimensions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dimensions` (
  `id` int NOT NULL,
  `plank_sizes_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_sizes_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `plank_sizes_image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `plank_thickness_main_image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_1_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_2_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_image_3_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank_thickness_size_range_3` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dimensions`
--

LOCK TABLES `dimensions` WRITE;
/*!40000 ALTER TABLE `dimensions` DISABLE KEYS */;
INSERT INTO `dimensions` VALUES (1,'Our Popular Plank Size','Explore endless possibilities with our popular plank sizes, curated for diverse tastes. From versatile widths to exquisite lengths, our selection ensures the perfect fit, seamlessly blending style and functionality. Transform your space with excellence as you choose from our acclaimed plank sizes, setting new standards in flooring.','d1.png','Plank Thickness & Wear Layer','Discover the Perfect Balance of Optimal strength and Style','d2.png','Group 28285.svg','LVT: 1.5mm to 3mm','Group 28287.svg','SPC: 3.5mm to 8mm','Group 28289.svg','WEAR LAYER: 0.1mm to 0.7mm','2024-06-19 09:55:46','2024-07-08 09:09:28');
/*!40000 ALTER TABLE `dimensions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `download_center`
--

DROP TABLE IF EXISTS `download_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `download_center` (
  `dc_id` int NOT NULL AUTO_INCREMENT,
  `dc_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dc_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pdf` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` int DEFAULT '1',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Badgetitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`dc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `download_center`
--

LOCK TABLES `download_center` WRITE;
/*!40000 ALTER TABLE `download_center` DISABLE KEYS */;
INSERT INTO `download_center` VALUES (2,'Brochure','Type 2','Brochure.png','LVT Brochure 1.5mm (1).pdf',1,'2024-06-24 01:35:52','SPC Tuscany'),(3,'Installation Guide','Type 3','Installation Guide banner.png','Samara flooring product installation guide.docx',1,'2024-06-24 01:35:52','Installation'),(4,'Warranty','Type 16','Residential Warranty banner.png','Samaro Flooring Warranty - Residential final revised (1).pdf',1,'2024-06-24 01:35:52','Warrenty'),(5,'Brochure','Type 2','Brochure.png','LVT brochure 4 page (1).pdf',1,'2024-06-24 01:35:52','SPC Sicillian'),(7,'Warranty','type 16','Commercial Warranty banner.png','Samaro Flooring Warranty - Commercial final updated commercial (1).pdf',1,'2024-08-26 10:41:13','Warranty');
/*!40000 ALTER TABLE `download_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `featured_range`
--

DROP TABLE IF EXISTS `featured_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `featured_range` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `featured_range`
--

LOCK TABLES `featured_range` WRITE;
/*!40000 ALTER TABLE `featured_range` DISABLE KEYS */;
INSERT INTO `featured_range` VALUES (1,'Wood Finish','Experience the natural beauty and warmth of wood with our realistic wood-look flooring','WoodFinishImage.png'),(2,'Stone Finish','Add a touch of elegance and sophistication with our stunning stone-inspired flooring','TCM571-1.jpg'),(3,'Marble coming soon','Stay tuned for our upcoming collection of luxurious marble-look flooring',NULL),(4,'Ceramic Finish','A durable and stylish garden furniture set made for outdoor relaxation.','MarleFinishImage.png');
/*!40000 ALTER TABLE `featured_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floor_explorer`
--

DROP TABLE IF EXISTS `floor_explorer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floor_explorer` (
  `id` int NOT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sub_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `button` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ply_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tab_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floor_explorer`
--

LOCK TABLES `floor_explorer` WRITE;
/*!40000 ALTER TABLE `floor_explorer` DISABLE KEYS */;
INSERT INTO `floor_explorer` VALUES (1,'How to choose my perfect floor?','FLOOREXPLORER','Let our Floor Explorer be your compass to the perfect floor. We\'re here to guide your big decision with expertise and cares!\r\n\r\n','START THE FLOOREXPLOORER','/FindYourMatch','ply.png','tab.png');
/*!40000 ALTER TABLE `floor_explorer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imageName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
INSERT INTO `gallery` VALUES (37,'2 (20).webp','2024-07-08 09:48:48'),(38,'1 (2).webp','2024-07-08 10:01:42'),(39,'1 (3).webp','2024-07-08 10:01:42'),(41,'1 (5).webp','2024-07-08 10:01:42'),(42,'1 (6).webp','2024-07-08 10:01:42'),(43,'1 (7).webp','2024-07-08 10:01:42'),(44,'1 (8).webp','2024-07-08 10:01:42'),(45,'1 (9).webp','2024-07-08 10:01:42'),(46,'1 (10).webp','2024-07-08 10:01:42'),(47,'1 (11).webp','2024-07-08 10:01:42'),(48,'1 (12).webp','2024-07-08 10:01:42'),(50,'1 (14).webp','2024-07-08 10:01:43'),(51,'1 (15).webp','2024-07-08 10:01:43'),(54,'1 (13).webp','2024-07-08 10:01:43'),(55,'1 (14).webp','2024-07-08 10:01:43'),(57,'2 (2).webp','2024-07-08 10:01:43'),(58,'2 (3).webp','2024-07-08 10:01:43'),(59,'2 (4).webp','2024-07-08 10:01:43'),(60,'2 (5).webp','2024-07-08 10:01:43'),(61,'2 (20).webp','2024-07-08 10:03:37'),(62,'2 (19).webp','2024-07-08 10:03:37'),(63,'2 (18).webp','2024-07-08 10:03:38'),(65,'2 (16).webp','2024-07-08 10:03:38'),(66,'2 (15).webp','2024-07-08 10:03:38'),(67,'2 (14).webp','2024-07-08 10:03:38'),(68,'2 (14).webp','2024-07-08 10:03:38'),(71,'2 (11).webp','2024-07-08 10:03:38'),(75,'2 (9).webp','2024-07-08 10:03:38');
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `herobanner`
--

DROP TABLE IF EXISTS `herobanner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `herobanner` (
  `banner_id` int NOT NULL AUTO_INCREMENT,
  `banner_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `banner_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `button_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `banner_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobileBanner_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `herobanner`
--

LOCK TABLES `herobanner` WRITE;
/*!40000 ALTER TABLE `herobanner` DISABLE KEYS */;
INSERT INTO `herobanner` VALUES (1,'Home page','Premium Quality SPC & LVT flooring.','/product/All','Discover all our floors','Group 28041.png,banner.jpg','homeMobile banner.png'),(2,'Premium quality SPC flooring','High-quality LVT flooring.','/downloadCenter','BROCHURE & DOWNLOAD CENTER','Samaro-Halfnhalf-banner.jpg','Group 29096.png'),(3,'contact us page','We’re Here to Help','/#','Home -> Contact','Mask Group 218.png','Group 28545.png'),(4,'Get to know our SPC Collection','True to natures design. With its elegance and authenticity, it is almost impossible to distinguish Capture from real wood. Our high-quality floors are the result of refined craftmanship and innovation. That is why you cannot miss out on our Capture laminate floors.','/product/All','Discover Spc Flooring','Mask Group 265.png','mobimg.png');
/*!40000 ALTER TABLE `herobanner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `news_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int DEFAULT '1',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
INSERT INTO `newsletter` VALUES (1,'New Launch','picture.png','Seven tips to help you to get better flooring design & concept','2024-06-19 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(2,'Product Knowledge','picture@2x.png','Seven tips to help you to get better flooring design & concept','2024-06-19 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(3,'Events','picture@2x.png','Seven tips to help you to get better flooring design & concept','2024-06-19 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(4,'New Launch','picture.png','Seven tips to help you to get better flooring design & concept','2024-06-19 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(5,'New Launch','picture.png','Seven tips to help you to get better flooring design & concept','2024-07-07 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(6,'New Launch','picture.png','Seven tips to help you to get better flooring design & concept','2024-07-07 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(7,'Product Knowledge','picture.png','Seven tips to help you to get better flooring design & concept','2024-07-07 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1),(8,'Events','picture.png','Seven tips to help you to get better flooring design & concept','2024-07-07 18:30:00','Anand Kashyap','Samaro- Building Lifestyle_Why samaro Banner.mp4',1);
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cat_id` int NOT NULL,
  `prod_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `seo_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prod_catalogue` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `variation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `place` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thikness` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `layer` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_images` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prod_image2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `prod_finish` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_spiece` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `no_of_groves` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `m2pack` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plank` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prod_status` int NOT NULL DEFAULT '1',
  `added_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `colorId` int DEFAULT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Hickory smoke',1,'SAM0008','Hickory_smoke','TUSCANY','Wood','Beige','[\"Bedroom\",\"Hallway\",\"Childrensroom\"]','4 mm','4','Resize_TCM369-5layout.png','SAM0008- Hickory smoke INSTALLATION.webp','','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','','(23.7 sqft)','10',1,'2024-05-30 06:52:09',1),(2,'Raven',1,'SAM0013','Raven','TUSCANY','Wood','Dark brown','[]','5 mm','4','Resize_TCM213-8layout.png','SAM0013- Raven INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',2),(3,'Ginger Gold',2,'SAM0017','Ginger-Gold','TUSCANY','Wood','Dark brown','[]','6 mm','4','Resize_TCM310-1layout.png','SAM0017- Ginger gold INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',2),(4,'Ash Grey',1,'SAM0024','Ash-Grey','TUSCANY','Wood','Grey','[]','7 mm','4','Resize_TCM320-48layout.png','SAM0024 - Ash grey INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',3),(5,'Ash wood',1,'SAM0025','Ash-wood','TUSCANY','Wood','Light brown','[]','8 mm','4','Resize_TCM468-30layout.png','SAM0025 Ash wood INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',7),(6,'Pebble',1,'SAM0029','Pebble','TUSCANY','Wood','Dark grey','[]','9 mm','4','Resize_TCM320-47layout.png','SAM0029 - Pebble INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',4),(7,'Raw Honey',2,'SAM0031','Raw-Honey','TUSCANY','Wood','Beige','[]','10 mm','4','Resize_TCM243-8layout.png','SAM0031 - Raw honey INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',1),(8,'Cherry Wood',1,'SAM0034','Cherry-Wood','TUSCANY','Wood','Dark brown','Dining room','11 mm','4','SAM0034 - Cherry wood INSTALLATION.webp','SAM0034 - Cherry wood INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',2),(9,'Copper Sand',1,'SAM0038','Copper-Sand','TUSCANY','Wood','brown','[]','12 mm','4','Resize_TCM544-9layout.png','SAM0038 - Copper sand INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',6),(10,'Casper Grey',1,'SAM501','Casper-Grey','TUSCANY','Wood','beige','Hallway','13 mm','4','SAM501 - Casper grey WITHOIUT INSTALLATION.webp','SAM501 - Casper grey INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',1),(11,'Vintage Oak',1,'SAM504','Vintage-Oak','TUSCANY','Wood','brown','[]','14 mm','4','Resize_LQ0611-1Layout.png','SAM504 -Vintage oak INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',6),(12,'Chester Hills',1,'SAM0529','Chester-Hills','TUSCANY','Stone','brown','Kitchen','15 mm','4','SAM0529 - chester hills WITHOUT INSTALLATION.webp','SAM0529 - chester hills INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',6),(13,'Swiss Light',1,'502','Swiss-Light','SICILIAN','Stone','Dark Grey','Living room','16 mm','4','502 - Swiss light WITHOUT INSTALLATION.webp','502 - Swiss light WITHOUT INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',4),(14,'Maplewood',1,'505','Maplewood','SICILIAN','Stone','Light Grey','Living room','17 mm','4','505 - maplewood WITHOUT INSTALLATION.webp','505 - maplewood INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',5),(15,'Teak Finish',1,'522','Teak-Finish','SICILIAN','Wood','light brown','[]','18 mm','4','Resize_026-3.png','522 - Teak finish INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',7),(16,'Oakfield',1,'523','Oakfield','SICILIAN','Wood','light brown','[]','19 mm','4','Resize_UP33076-11Layout.png','523 - Oakfield INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',7),(17,'Sol Butter',1,'524','Sol-Butter','SICILIAN','Marble','Beige','[]','20 mm','4','Resize_UP33099-3Layout.png','524 - Sol butter INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',1),(18,'Cedar Hollow',1,'526','Cedar-Hollow','SICILIAN','Marble','Light Brown','[]','21 mm','4','Resize_3108-1layout.png','526 - Cedar hollow WITH INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',7),(19,'Oak Natural',1,'527','Oak-Natural','SICILIAN','Wood','brown','[]','22 mm','4','Resize_6014-1layout.png','527 - Oak natural INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',6),(20,'Ashford',1,'528','Ashford','SICILIAN','Wood','light beige','[]','23 mm','4','Resize_33103-007layout.png','528 - Ashford INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',8),(21,'Walnut Oak',1,'532','Walnut-Oak','SICILIAN','Wood','dark brown','[]','24 mm','4','Resize_907-1layout.png','532 - Walnut oak INSTALLATION.webp','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-05-30 06:52:09',2),(29,'Mountain Brown',2,'0002','Mountain_Brown','SICILIAN','Wood','Dark brown','[\"Hallway\"]','21 mm','4','Resize_LVT_0_LVT 0002 Mountain Brown.png','Resize_LVT_0_LVT 0002 Mountain Brown.png','Classic wood, modern oak & rough hand-craped wood','22','modern oak and rough hand-craped wood','','(23.7 sqft)','10',1,'2024-10-16 08:23:49',2),(30,'Caramella',2,'LVT 0003','Caramella','wood','Wood','caramel','[\"Living room\"]','21 mm','4','Resize_LVT_0_LVT 0003 Caramella.png','Resize_LVT_0_LVT 0003 Caramella.png','Classic wood, modern oak & rough hand-craped wood','(23.7 sqft)','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-10-16 08:26:29',NULL),(31,'Coyote',2,'LVT0006','Coyote','wood','Wood','Coyote','[\"Childrensroom\"]','21 mm','4','Resize_LVT_0_LVT 0006 Coyote.png','Resize_LVT_0_LVT 0006 Coyote.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-10-16 08:28:25',NULL),(32,'Raven Rock',2,'LVT0007','Raven_Rock','wood','Wood','Grey','[\"Office\"]','21 mm','4','Resize_LVT_0_LVT 0007 Raven Rock.png','Resize_LVT_0_LVT 0007 Raven Rock.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-10-16 08:29:51',3),(33,'Hickory Smoke',2,'LVT0008','Hickory_Smoke','TUSCANY','Wood','smoke','[\"Childrensroom\",\"Hallway\"]','21 mm','4','Resize_LVT_0_LVT 0008 Hickory Smoke.png','Resize_LVT_0_LVT 0008 Hickory Smoke.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4 grooves','(23.7 sqft)','10',1,'2024-10-16 08:31:35',NULL),(34,'Concrete Fog',2,'LVT0018','Concrete_Fog','wood','Wood','black','[\"Hallway\"]','21 mm','4','Resize_LVT_0_LVT 0018 Concrete Fog.png','Resize_LVT_0_LVT 0018 Concrete Fog.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:34:01',NULL),(35,'Ashwood',2,'LVT0025','Ashwood','wood','Wood','Grey','[\"Dining room\"]','21 mm','4','Resize_LVT_0_LVT 0025 Ashwood.png','Resize_LVT_0_LVT 0025 Ashwood.png','Classic wood, modern oak & rough hand-craped wood','','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:35:31',3),(36,'Pavement Storm',2,'LVT0026','Pavement_Storm','SICILIAN','Marble','Grey','[\"Childrensroom\"]','6 mm','4','Resize_LVT_0_LVT 0026 Pavement Storm.png','Resize_LVT_0_LVT 0026 Pavement Storm.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:36:59',3),(37,'Peach Thunder',2,'LVT0027','Peach_Thunder','wood','Wood','peach','[\"Bathroom\"]','21 mm','4','Resize_LVT_0_LVT 0027 Peach Thunder.png','Resize_LVT_0_LVT 0027 Peach Thunder.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:38:35',NULL),(38,'Grey Sage',2,'LVT0028','Grey_Sage','SICILIAN','Wood','Grey','[\"Kitchen\"]','21 mm','4','Resize_LVT_0_LVT 0028 Grey Sage.png','Resize_LVT_0_LVT 0028 Grey Sage.png','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:39:52',3),(39,'Mountain Brown (Light)',2,'SAM0002','Mountain_Brown_(Light)','wood','Wood','brown','[\"Kitchen\"]','21 mm','4','Resize_LVT_0_SAM 0002 Light.png','SAM 0002 Dark.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:53:00',6),(40,'Mountain Brown (Dark)',2,'SAM 0002','Mountain_Brown_(Light)','wood','Wood','brown','[\"Kitchen\"]','21 mm','4','Resize_LVT_0_LVT 0002 Mountain Brown.png','SAM 0002 Light.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:54:48',6),(41,'Clay Oak',2,'SAM 0037','Clay_Oak','Grey','Wood','Grey','[\"Dining room\"]','21 mm','4','Resize_LVT_0_SAM 0037.png','SAM 0037.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:57:10',3),(42,'Natural Wood',2,'SAM 0039','Natural_Wood','wood','Wood','brown','[\"Kitchen\"]','21 mm','4','Resize_LVT_0_SAM 0039.png','SAM 0039.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:58:37',6),(43,'European Oak',2,'SAM 0040','European_Oak','wood','Wood','brown','[\"Childrensroom\"]','21 mm','4','Resize_LVT_0_SAM 0040.png','SAM 0040.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 08:59:49',6),(44,'Cinamon Wood',2,'SAM 0042','Cinamon_Wood','wood','Wood','brown','[\"Bedroom\"]','21 mm','','Resize_LVT_0_SAM 0042.png','SAM 0042.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 09:01:00',6),(45,'Canyon Brown',2,'SAM 0043','Canyon_Brown','wood','Wood','brown','[\"Childrensroom\"]','21 mm','4','Resize_LVT_0_SAM 0043.png','SAM 0043.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 09:02:07',6),(46,'Hickory Brown',2,'SAM 0044','Hickory_Brown','wood','Wood','Beige','[\"Dining room\"]','21 mm','4','Resize_LVT_0_SAM 0044.png','SAM 0044.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 09:02:59',1),(47,'Beach Gold',2,'SAM 0045','Beach_Gold','TUSCANY','Wood','Dark brown','[\"Childrensroom\"]','21 mm','4','Resize_LVT_0_SAM 0043 copy 2.png','SAM 0045.jpg','Classic wood, modern oak & rough hand-craped wood','Plank 7.13 x 48.03 inches','modern oak and rough hand-craped wood','4','(23.7 sqft)','10',1,'2024-10-16 09:03:56',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`samaro_user`@`localhost`*/ /*!50003 TRIGGER `trg_update_colorId` BEFORE INSERT ON `products` FOR EACH ROW BEGIN
    DECLARE v_colorId INT;
    
    SELECT id INTO v_colorId
    FROM color
    WHERE LOWER(clrCode) = LOWER(NEW.color)
    LIMIT 1;

    SET NEW.colorId = v_colorId;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `spaces`
--

DROP TABLE IF EXISTS `spaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spaces` (
  `id` int NOT NULL,
  `commercial_images` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `residential_images` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spaces`
--

LOCK TABLES `spaces` WRITE;
/*!40000 ALTER TABLE `spaces` DISABLE KEYS */;
INSERT INTO `spaces` VALUES (1,'1.jpg,2.jpg,Mask Group 127.png,1 (1).webp,2 (20).webp','Mask Group 12.png,Mask Group 128.png,1.jpg,2 (5).webp');
/*!40000 ALTER TABLE `spaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeline`
--

DROP TABLE IF EXISTS `timeline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timeline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` varchar(4) NOT NULL,
  `title` text NOT NULL,
  `icon` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeline`
--

LOCK TABLES `timeline` WRITE;
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` VALUES (1,'1952','NATIONAL PLASTICS FOUNDED A RICH LEGACY OF 70+ YEARS','fa-building'),(2,'2019','Samaro Founded','fa-briefcase'),(3,'2020','STARTED PRODUCTION WITH 2 EXTRUDERS & 1 HOMAG PROFILING MACHINE','fa-cogs'),(4,'2021','ADDED 1 MORE EXTRUSION LINE','fa-plus-circle'),(5,'2022','MOVED TO A 30 ACRE PRODUCTION FACILITY ','fa-map-signs'),(6,'2023','ADDED 5 EXTRUDERS & 2 HOMAG PROFILE LINES','fa-tools'),(7,'2024','ADDED 3 MORE LINES + 1 HOMAG LINE','fa-rocket'),(8,'2024','INDIA\'S LARGEST MANUFACTURER & EXPORTER OF SPC FLOORING','fa-globe');
/*!40000 ALTER TABLE `timeline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vision_mission`
--

DROP TABLE IF EXISTS `vision_mission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vision_mission` (
  `id` int NOT NULL,
  `type` enum('Vision','Mission') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `subpoints` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vision_mission`
--

LOCK TABLES `vision_mission` WRITE;
/*!40000 ALTER TABLE `vision_mission` DISABLE KEYS */;
INSERT INTO `vision_mission` VALUES (1,'Vision','Vision','We aim to be a global leader in building materials, setting new standards in innovation and design. From homes to commercial spaces, our goal is to create products that inspire, endure, and elevate spaces for generations.','vision.png','2024-06-19 04:54:26','2024-10-01 06:40:05'),(2,'Mission','Mission','At Samaro Flooring, we create flooring solutions that combine style, comfort, and sustainability. Using cutting-edge technology and eco-friendly materials, we aim to enhance every space while contributing to a more sustainable future in building materials.','mission.png','2024-06-19 04:54:26','2024-10-01 06:40:19');
/*!40000 ALTER TABLE `vision_mission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `whysamaro_benifits`
--

DROP TABLE IF EXISTS `whysamaro_benifits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `whysamaro_benifits` (
  `id` int NOT NULL,
  `point_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `subpoints` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `whysamaro_benifits`
--

LOCK TABLES `whysamaro_benifits` WRITE;
/*!40000 ALTER TABLE `whysamaro_benifits` DISABLE KEYS */;
INSERT INTO `whysamaro_benifits` VALUES (1,'Manufacturing','Blend materials for durability., Layer vinyl for stability., Added texture for realism., Cut for precise fit., Apply protective finish.','Group 28879.svg','2024-06-19 09:18:15','2024-07-08 08:28:01'),(2,'Product Performance','Resilience: Withstands scratches and impacts., 100% Water Resistance: Ideal for moisture-prone areas., Stability: Maintains shape in different temperatures., Easy Care: Requires minimal cleaning effort., Longevity: Designed for lasting performance.','Group 28880.svg','2024-06-19 09:18:15','2024-07-08 08:28:01'),(3,'Quality Assurance','International Standards Compliance: Meets quality benchmarks., Material Inspection: Rigorously checks raw materials., Production Oversight: Constant monitoring during manufacturing., Quality Testing: Thorough assessment of finished products., Feedback Integration: Incorporates customer input for improvement.','Group 28877.svg','2024-06-19 09:18:15','2024-07-08 08:28:01'),(4,'lnnovating','Sustainable Materials: Eco-friendly exploration., Innovative Designs: Developing reusable and renewable material with new design and shades., Smart Integration: Technological functionality., Custom Solutions: Tailored options., Enhanced Performance: Focus on durability.','Group 28883.svg','2024-06-19 09:18:15','2024-07-08 08:28:01');
/*!40000 ALTER TABLE `whysamaro_benifits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `whysamaro_download_center`
--

DROP TABLE IF EXISTS `whysamaro_download_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `whysamaro_download_center` (
  `id` int NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `button_text` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `button_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `whysamaro_download_center`
--

LOCK TABLES `whysamaro_download_center` WRITE;
/*!40000 ALTER TABLE `whysamaro_download_center` DISABLE KEYS */;
INSERT INTO `whysamaro_download_center` VALUES (1,'2.png','Download Center','Check out our Download Center to easily find all our PDFs and resources about our flooring products.','BROCHURE & DOWNLOAD CENTER','/downloadedCenter');
/*!40000 ALTER TABLE `whysamaro_download_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `whysamaro_video`
--

DROP TABLE IF EXISTS `whysamaro_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `whysamaro_video` (
  `id` int NOT NULL,
  `heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `video` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `whysamaro_video`
--

LOCK TABLES `whysamaro_video` WRITE;
/*!40000 ALTER TABLE `whysamaro_video` DISABLE KEYS */;
INSERT INTO `whysamaro_video` VALUES (1,'The amazing JOURNEY of','At Samaro Flooring, we draw from over 70+ years of manufacturing expertise in the plastic\r\nprocessing industry to craft innovative, high-quality flooring solutions. In 2019, we embarked on a\r\nnew journey to redefine the flooring market with our SPC and LVT products. In just three years,\r\nwe’ve rapidly become India’s largest manufacturer in this sector.\r\n\r\nOur success is powered by a relentless commitment to innovation, quality, and sustainability. Our\r\nstate-of-the-art facility in Gujarat, with an annual capacity of over 15 million square meters,\r\nenables us to meet the diverse needs of both residential and commercial spaces across the\r\ncountry. Whether it’s creating warm, inviting homes or robust, stylish commercial environments,\r\nSamaro Flooring is trusted to deliver excellence at every step.','Samaro- About us Page1.mp4','logo.png','2024-06-19 03:50:02','2024-09-25 05:55:27');
/*!40000 ALTER TABLE `whysamaro_video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-01 15:02:14
