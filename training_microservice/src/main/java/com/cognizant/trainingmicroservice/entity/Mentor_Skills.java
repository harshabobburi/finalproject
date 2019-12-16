package com.cognizant.trainingmicroservice.entity;

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
public class Mentor_Skills {

	@Id
	@Column(name="ms_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@NotNull
	private long id;
	@ManyToOne
	@JoinColumn(name="ms_mentor_id")
	@NotNull
	private Mentor mentor;
	@ManyToOne
	@JoinColumn(name="ms_skill_id")
	@NotNull
	private Skill skill;
	@NotNull
	@Column(name="ms_self_rating")
	private float selfRating;
	@NotNull
	@Column(name="ms_years_of_experience")
	private float yearsOfExperience;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Mentor getMentor() {
		return mentor;
	}
	public void setMentor(Mentor mentor) {
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
		return "Mentor_Skills [id=" + id + ", mentor=" + mentor + ", skill=" + skill + ", selfRating=" + selfRating
				+ ", yearsOfExperience=" + yearsOfExperience + "]";
	}
	
}
