package com.mod.UserMentorMicroservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.UserMentorMicroservice.Dao.UserMentorDao;
import com.mod.UserMentorMicroservice.Model.UserMentorModel;

@Service
public class UserMentorServiceImplementation implements UserMentorServiceInterface {

	@Autowired
	private UserMentorDao userMentorDao;
	
	@Override
	public UserMentorModel saveproposal(UserMentorModel userMentorData) {
		if(userMentorDao.findByUserIdAndMentorIdAndSkillId(userMentorData.getUserId(), userMentorData.getMentorId()
				, userMentorData.getSkillId())==null)
			return userMentorDao.save(userMentorData);
		else
			return null;
	}

	@Override
	public List<UserMentorModel> getUserConnection(Long uId) {
		return userMentorDao.findByUserId(uId);
	}

	@Override
	public List<UserMentorModel> getMentorConnection(Long mId) {
		return userMentorDao.findByMentorId(mId);
	}

}
