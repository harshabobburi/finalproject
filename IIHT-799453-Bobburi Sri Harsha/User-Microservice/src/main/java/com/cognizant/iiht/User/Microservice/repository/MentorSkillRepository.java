package com.cognizant.iiht.User.Microservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.iiht.User.Microservice.model.MentorSkills;
import com.cognizant.iiht.User.Microservice.model.Mentors;

public interface MentorSkillRepository extends JpaRepository<MentorSkills, Long> {
	
	List<MentorSkills> findAllByMentor(Mentors mentor);
}
