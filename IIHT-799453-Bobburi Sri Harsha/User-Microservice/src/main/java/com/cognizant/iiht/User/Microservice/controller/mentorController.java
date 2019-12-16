package com.cognizant.iiht.User.Microservice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.iiht.User.Microservice.exception.LinkedinurlAlreadyexistsException;
import com.cognizant.iiht.User.Microservice.exception.MentorskillsAlreadyexistsException;
import com.cognizant.iiht.User.Microservice.model.MentorSkills;
import com.cognizant.iiht.User.Microservice.model.Mentors;
import com.cognizant.iiht.User.Microservice.service.MentorsService;

@RestController
@RequestMapping("/mentor")
public class mentorController {

	@Autowired
	private MentorsService mentorsservice;
	
	@PostMapping("/addmentorskills")
	public void addmentorskills(@RequestBody MentorSkills mentors)
	{
		mentorsservice.addmentorskills(mentors);
	}
//	@GetMapping("/mentors")
//	public List<Mentors> getallmentors()
//	{return mentorsservic
//		
//	}
	
	@PostMapping("/addmentordetails")
	public void addmentordetails(@RequestBody @Valid Mentors mentors) throws LinkedinurlAlreadyexistsException
	{
		mentorsservice.addmentordetails(mentors);
	}
}
