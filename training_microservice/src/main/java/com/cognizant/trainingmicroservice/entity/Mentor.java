package com.cognizant.trainingmicroservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="mentor")
public class Mentor {

	@Id
	@Column(name="mentor_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@NotNull
	private long id;
	@NotNull
	@Column(name="mentor_linkedin_url")
	private String linkedinURL;
	@NotNull
	@Column(name="mentor_years_of_experience")
	private float yearsOfExperience;
	@NotNull
	@Column(name="mentor_timeslot")
	@Size(max=11,min=11)
	private String timeslot;
	@NotNull
	@OneToOne
	@JoinColumn(name="mentor_user_id")
	private User user;
	@NotNull
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getLinkedinURL() {
		return linkedinURL;
	}
	public void setLinkedinURL(String linkedinURL) {
		this.linkedinURL = linkedinURL;
	}
	public float getYearsOfExperience() {
		return yearsOfExperience;
	}
	public void setYearsOfExperience(float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}
	public String getTimeslot() {
		return timeslot;
	}
	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Mentor [id=" + id + ", linkedinURL=" + linkedinURL + ", yearsOfExperience=" + yearsOfExperience
				+ ", timeslot=" + timeslot + ", user=" + user + "]";
	}
}
