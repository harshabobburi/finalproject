package com.cognizant.searchingmicroservice.model;

import java.sql.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="user")
public class Users {

	@Id
	@Column(name="us_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;
	@NotNull
	@Column(name="user_name")
	private String userName;
	@NotNull
	@Column(name="password")
	private String password;
	@NotNull
	@Column(name="first_name")
	private String firstName;
	@NotNull
	@Column(name="last_name")
	private String lastName;
	
	@Positive(message = "contact Number Should be Positive Number")
	@NotNull
	@Column(name="contact_number")
	private Long contactNumber;
//	@NotNull
//	@Column(name="reg_code")
//	private String regCode;
	@NotNull
	@Column(name="role")
	private String role = null;
//	@NotNull
//	@Column(name="linkedin_url")
//	private String linkedinUrl = null;
//	@NotNull
//	@Column(name="years_of_experience")
//	private Float yearsOfExperience;
	@Column(name = "active")
//	@NotNull
	private Boolean active = false;
	@Column(name = "confirmed_signUp")
//	@NotNull
	private Boolean confirmedSignUp = false;
	@Column(name = "reset_password")
//	@NotNull
	private Boolean resetPassword = false;
	@Column(name = "reset_password_date")
//	@NotNull
	private Date resetPasswordDate;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public Boolean getConfirmedSignUp() {
		return confirmedSignUp;
	}
	public void setConfirmedSignUp(Boolean confirmedSignUp) {
		this.confirmedSignUp = confirmedSignUp;
	}
	public Boolean getResetPassword() {
		return resetPassword;
	}
	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}
	public Date getResetPasswordDate() {
		return resetPasswordDate;
	}
	public void setResetPasswordDate(Date resetPasswordDate) {
		this.resetPasswordDate = resetPasswordDate;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", userName=" + userName + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", contactNumber=" + contactNumber + ", role=" + role + ", active="
				+ active + ", confirmedSignUp=" + confirmedSignUp + ", resetPassword=" + resetPassword
				+ ", resetPasswordDate=" + resetPasswordDate + "]";
	}
	
	
}