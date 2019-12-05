package com.mod.MentorMicroservice.Service;

import java.util.List;

import com.mod.MentorMicroservice.Model.MentorModel;

public interface MentorServiceInterface {

	public MentorModel saveMentor(MentorModel mentorData);
	public boolean isMentorAlreadyExist(String email);
	public MentorModel mentorAuthenticate(String email, String password);
	public List<MentorModel> getAllMentors();
	public MentorModel getMentorById(Long uId);
}
