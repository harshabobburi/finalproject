-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mentorondemand
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mentorondemand
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mentorondemand` DEFAULT CHARACTER SET utf8 ;
USE `mentorondemand` ;

-- -----------------------------------------------------
-- Table `mentorondemand`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentorondemand`.`user` (
  `us_id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(75) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `contact_number` BIGINT(10) NOT NULL,
  `role` VARCHAR(6) NOT NULL,
  `reset_password` TINYINT(1) NOT NULL DEFAULT '0',
  `reset_password_date` DATE NULL DEFAULT NULL,
  `active` BIT(1) NULL DEFAULT NULL,
  `confirmed_sign_up` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`us_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`us_id` ASC),
  UNIQUE INDEX `user_name_UNIQUE` (`user_name` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentorondemand`.`mentor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentorondemand`.`mentor` (
  `mn_id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `linkedin_url` VARCHAR(100) NOT NULL,
  `years_of_experience` FLOAT(2,1) NOT NULL,
  `mn_timeslot` VARCHAR(11) NOT NULL,
  `mn_us_id` BIGINT(10) NOT NULL,
  PRIMARY KEY (`mn_id`),
  UNIQUE INDEX `mentor_linkedin_url_UNIQUE` (`linkedin_url` ASC),
  INDEX `user_idx` (`mn_us_id` ASC),
  CONSTRAINT `user`
    FOREIGN KEY (`mn_us_id`)
    REFERENCES `mentorondemand`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 44
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentorondemand`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentorondemand`.`skill` (
  `skill_id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(45) NOT NULL,
  `skill_toc` VARCHAR(45) NULL DEFAULT NULL,
  `skill_prerequisite` BIGINT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  INDEX `prerequisite_idx` (`skill_prerequisite` ASC),
  CONSTRAINT `skill_prerequisite`
    FOREIGN KEY (`skill_prerequisite`)
    REFERENCES `mentorondemand`.`skill` (`skill_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentorondemand`.`mentor_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentorondemand`.`mentor_skill` (
  `mns_id` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `mns_mn_id` BIGINT(11) NOT NULL,
  `ms_skill_id` BIGINT(11) NOT NULL,
  `mns_self_rating` FLOAT(2,1) NOT NULL,
  `mns_years_of_experience` FLOAT(2,1) NOT NULL,
  PRIMARY KEY (`mns_id`),
  INDEX `Mentor_idx` (`mns_mn_id` ASC),
  INDEX `Skill_idx` (`ms_skill_id` ASC),
  CONSTRAINT `Mentor`
    FOREIGN KEY (`mns_mn_id`)
    REFERENCES `mentorondemand`.`mentor` (`mn_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Skill`
    FOREIGN KEY (`ms_skill_id`)
    REFERENCES `mentorondemand`.`skill` (`skill_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mentorondemand`.`training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mentorondemand`.`training` (
  `tr_id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `tr_user_id` BIGINT(10) NOT NULL,
  `tr_mentor_id` BIGINT(10) NOT NULL,
  `tr_skill_id` BIGINT(10) NOT NULL,
  `tr_status` VARCHAR(20) NOT NULL,
  `tr_progress` INT(11) NOT NULL,
  `tr_rating` FLOAT(2,1) NULL DEFAULT NULL,
  `tr_start_date` DATE NOT NULL,
  `tr_end_date` DATE NOT NULL,
  PRIMARY KEY (`tr_id`),
  UNIQUE INDEX `tr_id_UNIQUE` (`tr_id` ASC),
  INDEX `Mentor_Training_idx` (`tr_mentor_id` ASC),
  INDEX `Skill_Training_idx` (`tr_skill_id` ASC),
  INDEX `User_Training_idx` (`tr_user_id` ASC),
  CONSTRAINT `Mentor_Training`
    FOREIGN KEY (`tr_mentor_id`)
    REFERENCES `mentorondemand`.`mentor` (`mn_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Skill_Training`
    FOREIGN KEY (`tr_skill_id`)
    REFERENCES `mentorondemand`.`skill` (`skill_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `User_Training`
    FOREIGN KEY (`tr_user_id`)
    REFERENCES `mentorondemand`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
