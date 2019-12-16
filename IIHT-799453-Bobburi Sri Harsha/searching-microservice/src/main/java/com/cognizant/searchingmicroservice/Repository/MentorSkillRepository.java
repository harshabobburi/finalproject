package com.cognizant.searchingmicroservice.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.searchingmicroservice.model.MentorSkills;
import com.cognizant.searchingmicroservice.model.Skill;

public interface MentorSkillRepository extends JpaRepository<MentorSkills, Long> {
	
	List<MentorSkills> findAllBySkill(Skill skill);
}
