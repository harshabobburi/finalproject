package com.cognizant.trainingmicroservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.entity.Mentor;
import com.cognizant.trainingmicroservice.entity.Training;
import com.cognizant.trainingmicroservice.entity.User;

public interface TrainingRepository extends JpaRepository<Training, Long> {

	List<Training> findAllByMentor(Mentor mentor);

	List<Training> findAllByUser(User user);

}
