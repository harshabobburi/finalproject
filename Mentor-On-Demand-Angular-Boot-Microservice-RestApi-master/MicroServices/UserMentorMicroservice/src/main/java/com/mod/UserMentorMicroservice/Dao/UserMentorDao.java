package com.mod.UserMentorMicroservice.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mod.UserMentorMicroservice.Model.UserMentorModel;

@Repository
public interface UserMentorDao extends JpaRepository<UserMentorModel, Long> {
	
	public UserMentorModel findByUserIdAndMentorIdAndSkillId(Long uId, Long mId, Long sId);
	public List<UserMentorModel> findByUserId(Long uId);
	public List<UserMentorModel> findByMentorId(Long mId);
}
