package com.mod.UserMentorMicroservice.Service;

import java.util.List;

import com.mod.UserMentorMicroservice.Model.UserMentorModel;

public interface UserMentorServiceInterface {
	
	public UserMentorModel saveproposal(UserMentorModel userMentorData);
	public List<UserMentorModel> getUserConnection(Long id);
	public List<UserMentorModel> getMentorConnection(Long id);
}
