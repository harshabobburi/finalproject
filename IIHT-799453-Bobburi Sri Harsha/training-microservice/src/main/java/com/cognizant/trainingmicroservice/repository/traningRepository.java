package com.cognizant.trainingmicroservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.model.Mentors;
import com.cognizant.trainingmicroservice.model.Users;
import com.cognizant.trainingmicroservice.model.training;

public interface traningRepository extends JpaRepository<training, Long>{

	List<training> findAllByMentor(Mentors mentor);

	List<training> findAllByUser(Users user);
}
