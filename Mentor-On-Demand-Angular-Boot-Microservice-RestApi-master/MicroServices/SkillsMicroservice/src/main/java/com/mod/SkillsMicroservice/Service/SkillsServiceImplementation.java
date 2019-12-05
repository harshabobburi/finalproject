package com.mod.SkillsMicroservice.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mod.SkillsMicroservice.Dao.SkillsDaoInterface;
import com.mod.SkillsMicroservice.Model.SkillsModel;

@Service
public class SkillsServiceImplementation implements SkillsServiceInteferface{

	@Autowired
	SkillsDaoInterface skillDao;
	
	@Override
	public SkillsModel saveSkill(SkillsModel skilldata) {
		return skillDao.save(skilldata);
	}

	@Override
	public List<SkillsModel> getMentorSkills(Long id) {
		return skillDao.findByMentorId(id);
	}

}
