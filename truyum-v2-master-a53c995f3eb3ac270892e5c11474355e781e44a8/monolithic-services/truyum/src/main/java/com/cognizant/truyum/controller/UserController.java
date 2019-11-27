package com.cognizant.truyum.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.truyum.exception.UserAlreadyExistsException;
import com.cognizant.truyum.model.Users;
import com.cognizant.truyum.security.AppUserDetailsService;

@RestController

@RequestMapping("/users")
public class UserController {
	@Autowired
	private InMemoryUserDetailsManager inMemoryUserDetailsManager;
	@Autowired
	private AppUserDetailsService appuserdetailsservice;
//	@PostMapping
//	public boolean signup(@RequestBody @Valid Users user) throws UserAlreadyExistsException
//	{
//		if(inMemoryUserDetailsManager.userExists(user.getUsername())){
//			return false;
//		}
//		else{
//			inMemoryUserDetailsManager.createUser(User.withUsername(user.getUsername())
//	            .password(new BCryptPasswordEncoder()
//	            .encode(user.getPassword()))
//	            .roles("USER").build());
//			return true;
//		}
//	}
	@PostMapping
	public boolean signup(@RequestBody @Valid Users user) 
	{

			return appuserdetailsservice.signup(user);
		
	}
	
	
	
	

}
