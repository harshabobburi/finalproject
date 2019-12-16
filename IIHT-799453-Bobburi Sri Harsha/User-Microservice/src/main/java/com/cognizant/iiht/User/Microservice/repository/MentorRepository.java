package com.cognizant.iiht.User.Microservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.iiht.User.Microservice.model.Mentors;

public interface MentorRepository extends JpaRepository<Mentors, Long>{
	

//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
//	Optional<Mentors> findBylinkedinUrl(String linkedinUrl);
	
	Mentors findBylinkedinUrl(String linkedinUrl);

}
