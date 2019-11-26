package com.cognizant.onlinebillpaymentsystem.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="user")
public class Users {

	@Id
	@Column(name="us_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id;
	@NotNull
	@Column(name="us_firstname")
	private String firstname;
	@NotNull
	@Column(name="us_lastname")
	private String lastname;
	@NotNull
	@Column(name="us_age")
	private int Age;
	@NotNull
	@Column(name="us_gender")
	private String gender;
	@NotNull
	@Column(name="us_contact")
	private String contact;
	@NotNull
	@Column(name="us_pannumber")
	private String pannumber;
	@NotNull
	@Column(name="us_aadharnumber")
	private String aadharnumber;
	@NotNull
	@Column(name="us_userid")
	private String userid;
	@NotNull
	@Column(name="us_password")
	private String password;
	
	
//	@ManyToMany
//    @JoinTable(name = "cart",
//        joinColumns = @JoinColumn(name = "ct_us_id"), 
//        inverseJoinColumns = @JoinColumn(name = "ct_pr_id"))
// private List<MenuItem> menuItems;
// 
 @JsonIgnore
 @ManyToMany
    @JoinTable(name = "user_role",
        joinColumns = @JoinColumn(name = "ur_us_id"), 
        inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
 private List<Role> roles;


public int getId() {
	return id;
}


public void setId(int id) {
	this.id = id;
}


public String getFirstname() {
	return firstname;
}


public void setFirstname(String firstname) {
	this.firstname = firstname;
}


public String getLastname() {
	return lastname;
}


public void setLastname(String lastname) {
	this.lastname = lastname;
}


public int getAge() {
	return Age;
}


public void setAge(int age) {
	Age = age;
}


public String getGender() {
	return gender;
}


public void setGender(String gender) {
	this.gender = gender;
}


public String getContact() {
	return contact;
}


public void setContact(String contact) {
	this.contact = contact;
}

public String getPannumber() {
	return pannumber;
}


public void setPannumber(String pannumber) {
	this.pannumber = pannumber;
}


public String getAadharnumber() {
	return aadharnumber;
}


public void setAadharnumber(String aadharnumber) {
	this.aadharnumber = aadharnumber;
}


public String getUserid() {
	return userid;
}


public void setUserid(String userid) {
	this.userid = userid;
}


public String getPassword() {
	return password;
}


public void setPassword(String password) {
	this.password = password;
}


public List<Role> getRoles() {
	return roles;
}


public void setRoles(List<Role> roles) {
	this.roles = roles;
}


@Override
public String toString() {
	return "Users [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", Age=" + Age + ", gender="
			+ gender + ", contact=" + contact + ", pannumber=" + pannumber + ", aadharnumber=" + aadharnumber
			+ ", userid=" + userid + ", password=" + password + ", roles=" + roles + "]";
}




	
	
	
	
	
	
	
	
	
	
	
}
