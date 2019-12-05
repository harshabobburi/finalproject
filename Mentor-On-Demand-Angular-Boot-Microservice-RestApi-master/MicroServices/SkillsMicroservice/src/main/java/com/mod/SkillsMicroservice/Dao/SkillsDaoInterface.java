package com.mod.SkillsMicroservice.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mod.SkillsMicroservice.Model.SkillsModel;

@Repository
public interface SkillsDaoInterface extends JpaRepository<SkillsModel, Long> {
	
	public List<SkillsModel> findByMentorId(Long id);
}
