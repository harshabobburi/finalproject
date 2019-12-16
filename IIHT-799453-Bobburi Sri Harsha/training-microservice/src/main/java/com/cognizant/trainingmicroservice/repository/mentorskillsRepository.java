package com.cognizant.trainingmicroservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.model.MentorSkills;
import com.cognizant.trainingmicroservice.model.Mentors;

public interface mentorskillsRepository extends JpaRepository<MentorSkills, Long> {
	
	List<MentorSkills> findAllByMentor(Mentors mentor);

}
