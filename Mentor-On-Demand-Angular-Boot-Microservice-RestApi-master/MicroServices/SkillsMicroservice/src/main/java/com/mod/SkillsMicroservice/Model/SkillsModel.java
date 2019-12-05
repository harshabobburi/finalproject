package com.mod.SkillsMicroservice.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="skill_Model")
public class SkillsModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long skillId;
	
	@NotNull
	private Long mentorId;
	
	@NotNull
	private String skillName;

	private int skillDuration;
	
	private boolean videoMaterial;
	
	private boolean notesMaterial;
	
	private boolean liveVideos;
	
	private boolean doubtSession;

	public int getSkillDuration() {
		return skillDuration;
	}

	public void setSkillDuration(int skillDuration) {
		this.skillDuration = skillDuration;
	}

	public boolean isVideoMaterial() {
		return videoMaterial;
	}

	public void setVideoMaterial(boolean videoMaterial) {
		this.videoMaterial = videoMaterial;
	}

	public boolean isNotesMaterial() {
		return notesMaterial;
	}

	public void setNotesMaterial(boolean notesMaterial) {
		this.notesMaterial = notesMaterial;
	}

	public boolean isLiveVideos() {
		return liveVideos;
	}

	public void setLiveVideos(boolean liveVideos) {
		this.liveVideos = liveVideos;
	}

	public boolean isDoubtSession() {
		return doubtSession;
	}

	public void setDoubtSession(boolean doubtSession) {
		this.doubtSession = doubtSession;
	}

	public Long getSkillId() {
		return skillId;
	}

	public void setSkillId(Long skillId) {
		this.skillId = skillId;
	}

	public Long getMentorId() {
		return mentorId;
	}

	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	@Override
	public String toString() {
		return "SkillsModel [skillId=" + skillId + ", mentorId=" + mentorId + ", skillName=" + skillName
				+ ", skillDuration=" + skillDuration + ", videoMaterial=" + videoMaterial + ", notesMaterial="
				+ notesMaterial + ", liveVideos=" + liveVideos + ", doubtSession=" + doubtSession + "]";
	}

	public SkillsModel(Long skillId, @NotBlank Long mentorId, @NotNull String skillName, int skillDuration,
			boolean videoMaterial, boolean notesMaterial, boolean liveVideos, boolean doubtSession) {
		super();
		this.skillId = skillId;
		this.mentorId = mentorId;
		this.skillName = skillName;
		this.skillDuration = skillDuration;
		this.videoMaterial = videoMaterial;
		this.notesMaterial = notesMaterial;
		this.liveVideos = liveVideos;
		this.doubtSession = doubtSession;
	}
	
    public SkillsModel() {
		// TODO Auto-generated constructor stub
	}
	
}
