package com.cognizant.trainingmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {

}
