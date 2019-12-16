package com.cognizant.iiht.User.Microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.iiht.User.Microservice.model.Skill;

public interface skillRepository extends JpaRepository<Skill, Long>{

}
