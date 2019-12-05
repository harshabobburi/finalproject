package com.mod.MentorMicroservice.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="mentor_model")
public class MentorModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mentorId; 
	@NotNull
	private String mentorName;
	@Email
	@NotNull
	private String mentorEmail;
	@NotNull
	private String mentorPassword;
	@NotNull
	private String mentorContactNo;
	@NotNull
	private Integer mentorExperience;
	
	private boolean mentorStatus;
	
	public Integer getMentorExperience() {
		return mentorExperience;
	}
	public void setMentorExperience(Integer mentorExperience) {
		this.mentorExperience = mentorExperience;
	}
	public Long getMentorId() {
		return mentorId;
	}
	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}
	public String getMentorName() {
		return mentorName;
	}
	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}
	public String getMentorEmail() {
		return mentorEmail;
	}
	public void setMentorEmail(String mentorEmail) {
		this.mentorEmail = mentorEmail;
	}
	public String getMentorPassword() {
		return mentorPassword;
	}
	public void setMentorPassword(String mentorPassword) {
		this.mentorPassword = mentorPassword;
	}
	public String getMentorContactNo() {
		return mentorContactNo;
	}
	public void setMentorContactNo(String mentorContactNo) {
		this.mentorContactNo = mentorContactNo;
	}
	public boolean isMentorStatus() {
		return mentorStatus;
	}
	public void setMentorStatus(boolean mentorStatus) {
		this.mentorStatus = mentorStatus;
	}

	
	public MentorModel(Long mentorId, @NotNull String mentorName, @Email @NotNull String mentorEmail,
			@NotNull String mentorPassword, @NotNull String mentorContactNo, @NotNull Integer mentorExperience,
			boolean mentorStatus) {
		super();
		this.mentorId = mentorId;
		this.mentorName = mentorName;
		this.mentorEmail = mentorEmail;
		this.mentorPassword = mentorPassword;
		this.mentorContactNo = mentorContactNo;
		this.mentorExperience = mentorExperience;
		this.mentorStatus = mentorStatus;
	}
	@Override
	public String toString() {
		return "MentorModel [mentorId=" + mentorId + ", mentorName=" + mentorName + ", mentorEmail=" + mentorEmail
				+ ", mentorPassword=" + mentorPassword + ", mentorContactNo=" + mentorContactNo + ", mentorExperience="
				+ mentorExperience + ", mentorStatus=" + mentorStatus + "]";
	}
	public MentorModel() {}
	
	
	
	
}
