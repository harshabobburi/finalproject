package com.cognizant.onlinebillpaymentsystem.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.onlinebillpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.model.Users;
import com.cognizant.onlinebillpaymentsystem.repository.UserRepository;
import com.cognizant.onlinebillpaymentsystem.service.AppUserDetailsService;

@RestController

@RequestMapping("/users")
public class UserController {
//	@Autowired
//	private InMemoryUserDetailsManager inMemoryUserDetailsManager;
	@Autowired
	private AppUserDetailsService appuserdetailsservice;
	@Autowired
	private UserRepository userRepository;
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
	@GetMapping
	public List<Users> getUsers() {

		return (userRepository.getUser());

	}
	@PostMapping
	public void signup(@RequestBody @Valid Users user) throws UserAlreadyExistsException
	{

			appuserdetailsservice.signup(user);
		
	}
	
	
	
	

}
