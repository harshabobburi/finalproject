package com.mod.MentorMicroservice.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mod.MentorMicroservice.Model.MentorModel;

@Repository
public interface MentorDaoInterface extends JpaRepository<MentorModel, Long> {
		
	public MentorModel findByMentorEmail(String email);
	public MentorModel findByMentorEmailAndMentorPassword(String email,String password);
	public MentorModel findByMentorId(Long uId);
}
