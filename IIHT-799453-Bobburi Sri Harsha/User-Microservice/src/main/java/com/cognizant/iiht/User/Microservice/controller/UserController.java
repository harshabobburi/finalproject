package com.cognizant.iiht.User.Microservice.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.iiht.User.Microservice.exception.UserAlreadyExistsException;
import com.cognizant.iiht.User.Microservice.model.Users;
import com.cognizant.iiht.User.Microservice.repository.UserRepository;
import com.cognizant.iiht.User.Microservice.service.AppUserDetailsService;

@RestController

@RequestMapping("/users")
public class UserController {

	@Autowired
	private AppUserDetailsService appuserdetailsservice;
	@Autowired
	private UserRepository userRepository;
//	@GetMapping
//	public List<Users> getUsers() {
//
//		return (userRepository.getUser());
//
//	}
	@GetMapping("/findUser/{userName}")
	public Users getAllSkills(@PathVariable String userName) {
		return appuserdetailsservice.getUserByUserName(userName);
	}
	
	
	@PostMapping
	public void signup(@RequestBody @Valid Users user) throws UserAlreadyExistsException
	{

			appuserdetailsservice.signup(user);
		
	}
	
	
	
	

}
