package com.mod.UserMicroservice.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.mod.UserMicroservice.Model.UserModel;
import com.mod.UserMicroservice.Service.UserServiceInterface;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserServiceInterface userServiceInterface;
	
	//Registering a new user
	@PostMapping("/addUser")
	public ResponseEntity<UserModel> addUser(@RequestBody UserModel userData) throws ParseException {
		boolean userExist = userServiceInterface.userAlreadyExist(userData.getUserEmailId());
		if(userExist) {
			System.out.println("User already exist");
			return new ResponseEntity<UserModel>(userData, HttpStatus.CONFLICT);
		}else {
			UserModel savedUserData = userServiceInterface.saveUser(userData);
			return new ResponseEntity<UserModel>(savedUserData,HttpStatus.ACCEPTED);
		}
	}
	
	//Logging in new user
	@PostMapping("/login")
	public ResponseEntity<UserModel> loginUser(@RequestBody UserModel user){
		UserModel userData = userServiceInterface.userLogin(user.getUserEmailId(), user.getUserPassword());
		if(userData!=null){
			return new ResponseEntity<UserModel>(userData,HttpStatus.ACCEPTED);
		}else {
			return new ResponseEntity<UserModel>(userData,HttpStatus.NOT_FOUND);
		}
	}
	
	@PatchMapping("/updatePassword")
	public ResponseEntity<UserModel> updatePassword(@RequestBody UserModel userData){
		return new ResponseEntity<UserModel>(userServiceInterface.saveUser(userData), HttpStatus.OK);
	}
	
	
}
