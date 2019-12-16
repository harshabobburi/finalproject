package com.cognizant.trainingmicroservice.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="user")
public class User {

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	private long id;
	@NotNull
	@Column(name="user_name")
	@Size(max=45,min=10)
	private String userName;
	@Column(name="user_password")
	@Size(max=75,min=3)
	@NotNull
	private String password;
	@Column(name="user_first_name")
	@Size(max=45,min=3)
	@NotNull
	private String firstName;
	@Column(name="user_last_name")
	@Size(max=45,min=3)
	@NotNull
	private String lastName;
	@Column(name="user_contact_number")
	@Size(max=10,min=10)
	@NotNull
	private String contactNumber;
	@Column(name="user_role")
	@Size(max=6,min=6)
	@NotNull
	private String role;
	@Column(name="user_reset_password")
	@NotNull
	private boolean resetPassword = false;
	@Column(name="user_reset_password_date")
	private Date resetPasswordDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
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
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public boolean isResetPassword() {
		return resetPassword;
	}
	public void setResetPassword(boolean resetPassword) {
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
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", contactNumber=" + contactNumber + ", role=" + role + ", resetPassword="
				+ resetPassword + ", resetPasswordDate=" + resetPasswordDate + "]";
	}
	public User(){}
	public User(@NotNull long id, @NotNull @Size(max = 45, min = 10) String userName,
			@Size(max = 75, min = 3) @NotNull String password, @Size(max = 45, min = 3) @NotNull String firstName,
			@Size(max = 45, min = 3) @NotNull String lastName, @Size(max = 10, min = 10) @NotNull String contactNumber,
			@Size(max = 6, min = 6) @NotNull String role, @NotNull boolean resetPassword, Date resetPasswordDate) {
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.role = role;
		this.resetPassword = resetPassword;
		this.resetPasswordDate = resetPasswordDate;
	}
}
