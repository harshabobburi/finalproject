package com.cognizant.iiht.User.Microservice.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.iiht.User.Microservice.exception.LinkedinurlAlreadyexistsException;
import com.cognizant.iiht.User.Microservice.exception.MentorskillsAlreadyexistsException;
import com.cognizant.iiht.User.Microservice.model.MentorSkills;
import com.cognizant.iiht.User.Microservice.model.Mentors;
import com.cognizant.iiht.User.Microservice.model.Users;
import com.cognizant.iiht.User.Microservice.repository.MentorRepository;
import com.cognizant.iiht.User.Microservice.repository.MentorSkillRepository;
import com.cognizant.iiht.User.Microservice.repository.UserRepository;

@Service
public class MentorsService {
	@Autowired
	private MentorRepository mentorrepository;
	
	@Autowired
	private UserRepository userrepository;
	
	@Autowired
	private MentorSkillRepository mentorskillsrepository;
	
	@Transactional
	public void addmentordetails(@Valid Mentors addmentors) throws LinkedinurlAlreadyexistsException {
		Users user = userrepository.findByUserName(addmentors.getUser().getUserName());
		addmentors.setUser(user);
		if(mentorrepository.findBylinkedinUrl(addmentors.getLinkedinUrl()) != null){
			throw new LinkedinurlAlreadyexistsException();
		}
		mentorrepository.save(addmentors);
	}
	
	@Transactional
	public void addmentorskills(MentorSkills mentorSkillsdetails){
		Mentors mentor = mentorrepository.findBylinkedinUrl(mentorSkillsdetails.getMentor().getLinkedinUrl());
	
		mentorSkillsdetails.setMentor(mentor);
		List<MentorSkills> mentorskills = mentorskillsrepository.findAllByMentor(mentor);
		mentorskillsrepository.save(mentorSkillsdetails);
	}

}
