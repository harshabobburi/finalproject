package com.cognizant.searchingmicroservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.searchingmicroservice.model.MentorSkills;
import com.cognizant.searchingmicroservice.model.Skill;
import com.cognizant.searchingmicroservice.service.searchservice;

@RestController
@RequestMapping("/search")
public class searchController {

	@Autowired
	private searchservice searchservice;
	
	@PostMapping
	public List<MentorSkills> searchmentor(@RequestBody @Valid Skill skills)
	
	{
		return searchservice.searchmentor(skills);
	}
}
