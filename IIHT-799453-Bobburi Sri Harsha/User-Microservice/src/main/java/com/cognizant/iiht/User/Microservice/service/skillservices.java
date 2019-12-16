package com.cognizant.iiht.User.Microservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.iiht.User.Microservice.model.Skill;
import com.cognizant.iiht.User.Microservice.repository.skillRepository;

@Service
public class skillservices {

	@Autowired
	private skillRepository skillRepository;
	
	@Transactional
	public List<Skill> getallskills()
	{
		return skillRepository.findAll();
	}
}
