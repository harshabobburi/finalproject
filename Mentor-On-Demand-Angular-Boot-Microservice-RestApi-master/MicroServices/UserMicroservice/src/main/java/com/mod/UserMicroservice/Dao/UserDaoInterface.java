package com.mod.UserMicroservice.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mod.UserMicroservice.Model.UserModel;

@Repository
public interface UserDaoInterface extends JpaRepository<UserModel, Long> {
	
	public UserModel findByUserEmailId(String userEmail);
	public UserModel findByUserEmailIdAndUserPassword(String email,String password);
}
