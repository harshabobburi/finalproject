package com.mod.UserMicroservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.UserMicroservice.Dao.UserDaoInterface;
import com.mod.UserMicroservice.Model.UserModel;

@Service
public class UserService implements UserServiceInterface {

	@Autowired
	UserDaoInterface userDao;
	
	@Override
	public UserModel saveUser(UserModel userData) {
		userData.setUserStatus(false);
		return userDao.save(userData);
	}

	@Override
	public boolean userAlreadyExist(String userEmail) {
		if(userDao.findByUserEmailId(userEmail)!=null)
			return true;
		else
			return false;
	}

	@Override
	public UserModel userLogin(String email, String password) {
		return userDao.findByUserEmailIdAndUserPassword(email, password);
	}

	@Override
	public List<UserModel> getAllUsers() {
		return userDao.findAll();
	}


}
