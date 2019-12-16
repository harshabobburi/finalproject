package com.cognizant.trainingmicroservice.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.trainingmicroservice.entity.Mentor;
import com.cognizant.trainingmicroservice.entity.Training;
import com.cognizant.trainingmicroservice.entity.User;
import com.cognizant.trainingmicroservice.exception.EndDateCoincideException;
import com.cognizant.trainingmicroservice.exception.StartDateCoincideException;
import com.cognizant.trainingmicroservice.repository.MentorRepository;
import com.cognizant.trainingmicroservice.repository.TrainingRepository;
import com.cognizant.trainingmicroservice.repository.UserRepository;

@Service
public class TrainingService {

	
	@Autowired
	private TrainingRepository trainingRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private MentorRepository mentorRepository;
	
	@Transactional
	public List<Training> getIncompleteTraining(String userName) {
		User user = userRepository.findByUserName(userName).get();
		Mentor mentor = mentorRepository.findByUser(user);
		List<Training> trainingList = trainingRepository.findAllByMentor(mentor);
		List<Training> pendingTrainingList = new ArrayList<Training>();
		for(Training training:trainingList){
			if(training.getStatus().equals("Request Pending")){
				pendingTrainingList.add(training);
			}
		}
		return pendingTrainingList;
	}
	
	public void addTrainingRequest(@Valid Training training) throws StartDateCoincideException, EndDateCoincideException {
		List<Training> trainingListMentor = trainingRepository.findAllByMentor(training.getMentor());
		List<Training> trainingListUser = trainingRepository.findAllByUser(training.getUser());
		for(Training existingTraining:trainingListMentor){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateCoincideException("Start Date Coincides with an existing approved training of Mentor");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateCoincideException("End Date Coincides with an existing approved training of Mentor");
					}
				}
			}
		}
		for(Training existingTraining:trainingListUser){
			if(existingTraining.getStatus().equals("Approved")){
				if(training.getStartDate().after(existingTraining.getStartDate()) || training.getStartDate().equals(existingTraining.getStartDate())){
					if(training.getStartDate().before(existingTraining.getEndDate()) || training.getStartDate().equals(existingTraining.getEndDate())){
						throw new StartDateCoincideException("Start Date Coincides with an existing approved training of User");
					}
				}
				else if(training.getEndDate().after(existingTraining.getStartDate()) || training.getEndDate().equals(existingTraining.getStartDate())){
					if(training.getEndDate().before(existingTraining.getEndDate()) || training.getEndDate().equals(existingTraining.getEndDate())){
						throw new EndDateCoincideException("End Date Coincides with an existing approved training of User");
					}
				}
			}
		}
		trainingRepository.save(training);
	}

	public void editStatus(@Valid Training training) {
		trainingRepository.save(training);
	}
}
