package com.cognizant.trainingmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.entity.Mentor;
import com.cognizant.trainingmicroservice.entity.User;

public interface MentorRepository extends JpaRepository<Mentor, Long> {

	Mentor findByUser(User user);

}
