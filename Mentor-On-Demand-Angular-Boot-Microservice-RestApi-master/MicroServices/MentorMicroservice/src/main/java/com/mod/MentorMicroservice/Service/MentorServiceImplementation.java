package com.mod.MentorMicroservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mod.MentorMicroservice.Dao.MentorDaoInterface;
import com.mod.MentorMicroservice.Model.MentorModel;

@Service
public class MentorServiceImplementation implements MentorServiceInterface {
	
	@Autowired
	MentorDaoInterface mentorDao;
	
	@Override
	public MentorModel saveMentor(MentorModel mentorData) {
		return mentorDao.save(mentorData);
	}

	@Override
	public boolean isMentorAlreadyExist(String email) {
		if(mentorDao.findByMentorEmail(email)==null)
			return false;
		else
			return true;
	}
	
	public MentorModel mentorAuthenticate(String email,String password) {
		return mentorDao.findByMentorEmailAndMentorPassword(email, password);
	}
	
	public List<MentorModel> getAllMentors(){
		return mentorDao.findAll();
	}

	public MentorModel getMentorById(Long uId) {
		return mentorDao.findByMentorId(uId);
	}

}
