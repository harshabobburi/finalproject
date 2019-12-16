package com.cognizant.trainingmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.model.Mentors;
import com.cognizant.trainingmicroservice.model.Users;

public interface MentorRepository extends JpaRepository<Mentors, Long>{
	

//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
	Mentors findBylinkedinUrl(String linkedinUrl);
	Mentors findByUser(Users user);

}
