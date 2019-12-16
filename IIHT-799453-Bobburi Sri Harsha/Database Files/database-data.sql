-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: mentorondemand
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `mn_id` bigint(10) NOT NULL AUTO_INCREMENT,
  `linkedin_url` varchar(100) NOT NULL,
  `years_of_experience` float(2,1) NOT NULL,
  `mn_timeslot` varchar(11) NOT NULL,
  `mn_us_id` bigint(10) NOT NULL,
  PRIMARY KEY (`mn_id`),
  UNIQUE KEY `mentor_linkedin_url_UNIQUE` (`linkedin_url`),
  KEY `user_idx` (`mn_us_id`),
  CONSTRAINT `user` FOREIGN KEY (`mn_us_id`) REFERENCES `user` (`us_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES (36,'rain',5.0,'10:00-12:00',70),(37,'fsfsfsf',5.0,'14:00-16:00',71),(38,'jvhvsjhvsjvjhvjh',5.0,'17:00-19:00',72),(39,'sbsbs',5.0,'10:00-12:00',73),(40,'aaaaa',5.0,'14:00-16:00',74),(41,'gvhvjhv',5.0,'17:00-19:00',75),(42,'aaaaaaaaaaaaaa',5.0,'14:00-16:00',76),(43,'rohith@linkedin.com',5.0,'14:00-16:00',77);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor_skill`
--

DROP TABLE IF EXISTS `mentor_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor_skill` (
  `mns_id` bigint(11) NOT NULL AUTO_INCREMENT,
  `mns_mn_id` bigint(11) NOT NULL,
  `ms_skill_id` bigint(11) NOT NULL,
  `mns_self_rating` float(2,1) NOT NULL,
  `mns_years_of_experience` float(2,1) NOT NULL,
  PRIMARY KEY (`mns_id`),
  KEY `Mentor_idx` (`mns_mn_id`),
  KEY `Skill_idx` (`ms_skill_id`),
  CONSTRAINT `Mentor` FOREIGN KEY (`mns_mn_id`) REFERENCES `mentor` (`mn_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Skill` FOREIGN KEY (`ms_skill_id`) REFERENCES `skill` (`skill_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor_skill`
--

LOCK TABLES `mentor_skill` WRITE;
/*!40000 ALTER TABLE `mentor_skill` DISABLE KEYS */;
INSERT INTO `mentor_skill` VALUES (18,42,3,5.0,5.0),(19,43,1,5.0,5.0);
/*!40000 ALTER TABLE `mentor_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill` (
  `skill_id` bigint(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(45) NOT NULL,
  `skill_toc` varchar(45) DEFAULT NULL,
  `skill_prerequisite` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  KEY `prerequisite_idx` (`skill_prerequisite`),
  CONSTRAINT `skill_prerequisite` FOREIGN KEY (`skill_prerequisite`) REFERENCES `skill` (`skill_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,'JAVA',NULL,NULL),(2,'PHP',NULL,NULL),(3,'SPRING',NULL,NULL),(4,'JWT',NULL,NULL);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training` (
  `tr_id` bigint(10) NOT NULL AUTO_INCREMENT,
  `tr_user_id` bigint(10) NOT NULL,
  `tr_mentor_id` bigint(10) NOT NULL,
  `tr_skill_id` bigint(10) NOT NULL,
  `tr_status` varchar(20) NOT NULL,
  `tr_progress` int(11) NOT NULL,
  `tr_rating` float(2,1) DEFAULT NULL,
  `tr_start_date` date NOT NULL,
  `tr_end_date` date NOT NULL,
  PRIMARY KEY (`tr_id`),
  UNIQUE KEY `tr_id_UNIQUE` (`tr_id`),
  KEY `Mentor_Training_idx` (`tr_mentor_id`),
  KEY `Skill_Training_idx` (`tr_skill_id`),
  KEY `User_Training_idx` (`tr_user_id`),
  CONSTRAINT `Mentor_Training` FOREIGN KEY (`tr_mentor_id`) REFERENCES `mentor` (`mn_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Skill_Training` FOREIGN KEY (`tr_skill_id`) REFERENCES `skill` (`skill_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `User_Training` FOREIGN KEY (`tr_user_id`) REFERENCES `user` (`us_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
INSERT INTO `training` VALUES (2,78,43,1,'Accepted',0,0.0,'2019-12-11','2019-12-20'),(3,78,42,3,'Accepted',0,0.0,'2019-12-11','2019-12-25'),(4,78,43,1,'Accepted',0,0.0,'2019-12-11','2019-12-14'),(5,78,43,1,'Denied',0,0.0,'2019-12-12','2019-12-25'),(6,78,43,1,'Accepted',0,0.0,'2019-12-12','2019-12-26'),(7,78,43,1,'Accepted',0,0.0,'2019-12-13','2019-12-28'),(8,78,43,1,'Accepted',0,0.0,'2019-12-12','2019-12-28');
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `us_id` bigint(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(75) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `contact_number` bigint(10) NOT NULL,
  `role` varchar(6) NOT NULL,
  `reset_password` tinyint(1) NOT NULL DEFAULT '0',
  `reset_password_date` date DEFAULT NULL,
  `active` bit(1) DEFAULT NULL,
  `confirmed_sign_up` bit(1) DEFAULT NULL,
  PRIMARY KEY (`us_id`),
  UNIQUE KEY `user_id_UNIQUE` (`us_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (70,'rain','$2a$10$0.A9gRHrbWy30D2EA8P6QeMSWuXDtQWAmK88.MwZY0jMUjrBmg.3u','nanana','nanana',7412589631,'Mentor',0,NULL,'\0','\0'),(71,'hardik','$2a$10$MUvvmrItcgpYPL5uvN.8Ledk8.xij.3VmyfS2q0JayGhldFsNt58y','mzmzmzm','mamzmam',7412589632,'Mentor',0,NULL,'\0','\0'),(72,'gud','$2a$10$KyJZUJcZqSmwtQp8ZK1lhOwwXqm5XXbp1DH2k6RM56hU8P9wwWuwa','jajhajaj','jaajajaj',7412589631,'Mentor',0,NULL,'\0','\0'),(73,'bgfd','$2a$10$nLOxKlaELFPx9xvC7rEWcuPtLC0rEybWL9W/IPCqIRU/uC79YcNDC','babab','bababab',5524532241,'Mentor',0,NULL,'\0','\0'),(74,'pawan','$2a$10$lIXSujyUXWDQFm6UIobmZeJy1rScbR6TDXP8cV9YLG5Ph0uZswlVy','GAHAHAH','ahahaha',4563256485,'Mentor',0,NULL,'\0','\0'),(75,'gbagagag','$2a$10$zQZpserXxGXydePs8LuKLOFaEgCqH2pJwgLM31fvXAaDyUbzHlEuG','gagagaga','gagaga',7412589632,'Mentor',0,NULL,'\0','\0'),(76,'gagag','$2a$10$X0iBdsVn.L3WOASoGrR5kODKo6DV6fKt2yEvYNvG5n.RR2u1IHp5a','agag','gaga',1236547896,'Mentor',0,NULL,'\0','\0'),(77,'rohith','$2a$10$X0iBdsVn.L3WOASoGrR5kODKo6DV6fKt2yEvYNvG5n.RR2u1IHp5a','hahah','hahah',1236985239,'Mentor',0,NULL,'\0','\0'),(78,'harsha','$2a$10$X0iBdsVn.L3WOASoGrR5kODKo6DV6fKt2yEvYNvG5n.RR2u1IHp5a','jajba','bjabaj',9567546353,'User',0,NULL,'\0','\0'),(79,'harshabobburi','$2a$10$7XH1Git993RYvdL5C4UuHeI.HJoDSXEA6IXEtn6yjKH4u6FAcZ88e','harsha','bobburi',9567546353,'User',0,NULL,'\0','\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-11 13:52:49
