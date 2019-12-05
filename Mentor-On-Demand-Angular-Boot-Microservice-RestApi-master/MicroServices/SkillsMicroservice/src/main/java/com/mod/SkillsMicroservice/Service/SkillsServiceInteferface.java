package com.mod.SkillsMicroservice.Service;

import java.util.List;

import com.mod.SkillsMicroservice.Model.SkillsModel;

public interface SkillsServiceInteferface {
	
	public SkillsModel saveSkill(SkillsModel skilldata);
	public List<SkillsModel> getMentorSkills(Long id);
}
