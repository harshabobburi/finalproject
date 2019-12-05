package com.mod.UserMicroservice.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="user_model")
public class UserModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	@NotNull
	private String userName;
	@Email
	@NotNull
	private String userEmailId;
	@NotNull
	private String userPassword;
	@NotNull
	private String userContactNo;
	@NotNull
	private String userDob;
	@NotNull
	@Column(columnDefinition="tinyint(1) default 1")
	private boolean userStatus=false;
	
	public UserModel() {}
	public Long getUserId() {
		return userId;
	}
	public boolean isUserStatus() {
		return userStatus;
	}
	public void setUserStatus(boolean userStatus) {
		this.userStatus = userStatus;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmailId() {
		return userEmailId;
	}
	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserContactNo() {
		return userContactNo;
	}
	public void setUserContactNo(String userContactNo) {
		this.userContactNo = userContactNo;
	}
	public String getUserDob() {
		return userDob;
	}
	public void setUserDob(String userDob) {
		this.userDob = userDob;
	}
	
	@Override
	public String toString() {
		return "UserModel [userId=" + userId + ", userName=" + userName + ", userEmailId=" + userEmailId
				+ ", userPassword=" + userPassword + ", userContactNo=" + userContactNo + ", userDob=" + userDob
				+ ", userStatus=" + userStatus + "]";
	}
	public UserModel(Long userId, @NotNull String userName, @Email @NotNull String userEmailId,
			@NotNull String userPassword, @NotNull String userContactNo, @NotNull String userDob,
			@NotNull Boolean userStatus) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmailId = userEmailId;
		this.userPassword = userPassword;
		this.userContactNo = userContactNo;
		this.userDob = userDob;
		this.userStatus = userStatus;
	}
	
}
