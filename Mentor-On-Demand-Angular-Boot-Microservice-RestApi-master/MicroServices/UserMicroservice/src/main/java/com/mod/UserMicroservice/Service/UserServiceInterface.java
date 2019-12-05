package com.mod.UserMicroservice.Service;

import java.util.List;

import com.mod.UserMicroservice.Model.UserModel;


public interface UserServiceInterface {
	
	public UserModel saveUser(UserModel userData);
	public boolean userAlreadyExist(String userEmail);
	public UserModel userLogin(String email, String password);
	public List<UserModel> getAllUsers();
}
