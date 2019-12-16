package com.cognizant.trainingmicroservice.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.trainingmicroservice.exception.EndDateException;
import com.cognizant.trainingmicroservice.exception.MentorSkillAlreadyException;
import com.cognizant.trainingmicroservice.exception.StartDateException;
import com.cognizant.trainingmicroservice.model.MentorSkills;
import com.cognizant.trainingmicroservice.model.Mentors;
import com.cognizant.trainingmicroservice.model.Skill;
import com.cognizant.trainingmicroservice.model.Users;
import com.cognizant.trainingmicroservice.model.training;
import com.cognizant.trainingmicroservice.repository.MentorRepository;
import com.cognizant.trainingmicroservice.repository.UserRepository;
import com.cognizant.trainingmicroservice.repository.mentorskillsRepository;
import com.cognizant.trainingmicroservice.repository.traningRepository;

@Service
public class traningService {

	@Autowired
	private traningRepository trainingRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MentorRepository mentorRepository;
	@Autowired
	private mentorskillsRepository mentorskillsrepository;

	public void addTrainingRequest(@Valid training training) throws StartDateException, EndDateException {
		List<training> trainingListMentor = trainingRepository.findAllByMentor(training.getMentor());
		List<training> trainingListUser = trainingRepository.findAllByUser(training.getUser());
		for(training existingTraining:trainingListMentor){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateException("Starting Date Collides with an existing training of Mentor");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateException("Ending Date Collides with an existing training of Mentor");
					}
				}
			}
		}
		for(training existingTraining:trainingListUser){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateException("Starting Date Collides with an existing training of User");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateException("Ending Date Collides with an existing training of User");
					}
				}
			}
		}
		trainingRepository.save(training);
	}
	public void editStatus(@Valid training training) {
		trainingRepository.save(training);
	}
	@Transactional
	public List<training> getIncompleteTraining(String userName) {
		Users user = userRepository.findByUserName(userName);
		Mentors mentor = mentorRepository.findByUser(user);
		List<training> trainingList = trainingRepository.findAllByMentor(mentor);
		List<training> pendingTrainingList = new ArrayList<training>();
		for(training training:trainingList){
			if(training.getStatus().equals("Request Pending")){
				pendingTrainingList.add(training);
			}
		}
		return pendingTrainingList;
	}
	public void addSkillLogin(@Valid Skill skill, String userName, float yearsExperience, float selfRating) throws MentorSkillAlreadyException {
		Users user = userRepository.findByUserName(userName);
		Mentors mentor = mentorRepository.findByUser(user);
		List<MentorSkills> mentorExistingSkills = mentorskillsrepository.findAllByMentor(mentor);
		for(MentorSkills mentorExistingSkill:mentorExistingSkills){
			if(mentorExistingSkill.getSkill().getName().matches(skill.getName())){
				throw new MentorSkillAlreadyException("This skill exists for this mentor");
			}
		}
		MentorSkills mentorSkill = new MentorSkills();
		mentorSkill.setMentor(mentor);
		mentorSkill.setSelfRating(selfRating);
		mentorSkill.setYearsOfExperience(yearsExperience);
		mentorSkill.setSkill(skill);
		mentorskillsrepository.save(mentorSkill);
	}
}
