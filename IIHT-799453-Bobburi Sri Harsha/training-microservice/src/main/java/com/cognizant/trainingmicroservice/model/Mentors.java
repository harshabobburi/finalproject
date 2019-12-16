package com.cognizant.trainingmicroservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name="mentor")
public class Mentors {

	@Id
	@Column(name="mn_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@NotNull
	@Column(name="linkedin_url")
	private String linkedinUrl;
	@NotNull
	@Column(name="years_of_experience")
	private Float yearsOfExperience;
	@NotNull
	@Column(name="mn_timeslot")
	@Size(max=11,min=11)
	private String timeslot;
	@NotNull
	@OneToOne
	@JoinColumn(name="mn_us_id")
	private Users user;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getLinkedinUrl() {
		return linkedinUrl;
	}
	public void setLinkedinUrl(String linkedinUrl) {
		this.linkedinUrl = linkedinUrl;
	}
	public Float getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(Float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	public String getTimeslot() {
		return timeslot;
	}
	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Mentors [id=" + id + ", linkedinUrl=" + linkedinUrl + ", yearsOfExperience=" + yearsOfExperience
				+ ", timeslot=" + timeslot + ", user=" + user + "]";
	}
	
}
