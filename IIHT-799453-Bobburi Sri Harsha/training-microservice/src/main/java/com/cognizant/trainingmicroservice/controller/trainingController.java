package com.cognizant.trainingmicroservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.trainingmicroservice.exception.EndDateException;
import com.cognizant.trainingmicroservice.exception.MentorSkillAlreadyException;
import com.cognizant.trainingmicroservice.exception.StartDateException;
import com.cognizant.trainingmicroservice.model.Skill;
import com.cognizant.trainingmicroservice.model.training;
import com.cognizant.trainingmicroservice.service.traningService;

@RestController
@CrossOrigin
@RequestMapping("/addTrainingRequest")
public class trainingController {

	@Autowired
	private traningService trainingService;
	
	@PostMapping
	public void addTrainingRequest(@RequestBody @Valid training training) throws StartDateException, EndDateException {
		trainingService.addTrainingRequest(training);
	}
	@GetMapping("/getIncompleteTraining/{userName}")
	public List<training> getIncompleteTraining(@PathVariable String userName) {
		return trainingService.getIncompleteTraining(userName);
	}
	
	@PostMapping("/editStatus")
	public void editStatus(@RequestBody @Valid training training){
		trainingService.editStatus(training);
	}
	@PostMapping("/addSkilllogin/{userName}/{yearsExperience}/{selfRating}")
	public void addSkillLogin(@RequestBody @Valid Skill skill, @PathVariable String userName, @PathVariable float yearsExperience, @PathVariable float selfRating) throws MentorSkillAlreadyException{
		trainingService.addSkillLogin(skill,userName,yearsExperience,selfRating);
	}
}
