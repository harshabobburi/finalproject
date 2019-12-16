package com.cognizant.trainingmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.entity.Mentor_Skills;

public interface MentorSkillRepository extends JpaRepository<Mentor_Skills, Long> {
	

}
