package com.cognizant.searchingmicroservice.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.searchingmicroservice.Repository.MentorSkillRepository;
import com.cognizant.searchingmicroservice.model.MentorSkills;
import com.cognizant.searchingmicroservice.model.Skill;

@Service
public class searchservice {
	
	@Autowired
	private MentorSkillRepository mentorSkillRepository;

	@Transactional
	public List<MentorSkills> searchmentor(@Valid Skill skills) {
		return mentorSkillRepository.findAllBySkill(skills);
	}

}
