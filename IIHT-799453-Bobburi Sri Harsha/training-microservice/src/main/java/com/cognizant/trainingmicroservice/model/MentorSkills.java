package com.cognizant.trainingmicroservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name="mentor_skill")
public class MentorSkills {
	
	@Id
	@Column(name="mns_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@ManyToOne
	@JoinColumn(name="mns_mn_id")
	@NotNull
	private Mentors mentor;
	@ManyToOne
	@JoinColumn(name="ms_skill_id")
	@NotNull
	private Skill skill;
	@NotNull
	@Column(name="mns_self_rating")
	private float selfRating;
	@NotNull
	@Column(name="mns_years_of_experience")
	private float yearsOfExperience;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Mentors getMentor() {
		return mentor;
	}
	public void setMentor(Mentors mentor) {
		this.mentor = mentor;
	}
	public Skill getSkill() {
		return skill;
	}
	public void setSkill(Skill skill) {
		this.skill = skill;
	}
	public float getSelfRating() {
		return selfRating;
	}
	public void setSelfRating(float selfRating) {
		this.selfRating = selfRating;
	}
	public float getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	@Override
	public String toString() {
		return "MentorSkills [id=" + id + ", mentor=" + mentor + ", skill=" + skill + ", selfRating=" + selfRating
				+ ", yearsOfExperience=" + yearsOfExperience + "]";
	}

}
