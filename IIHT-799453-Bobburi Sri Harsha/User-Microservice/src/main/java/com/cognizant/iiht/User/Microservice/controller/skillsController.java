package com.cognizant.iiht.User.Microservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.iiht.User.Microservice.model.Skill;
import com.cognizant.iiht.User.Microservice.service.skillservices;

@RestController
public class skillsController {

	@Autowired
	private skillservices skillservices;
	
	@GetMapping("/skills")
	public List<Skill> getallskills()
	{
		return skillservices.getallskills();
	}
}
