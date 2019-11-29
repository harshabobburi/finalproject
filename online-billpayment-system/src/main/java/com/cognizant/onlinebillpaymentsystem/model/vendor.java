package com.cognizant.onlinebillpaymentsystem.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "vendor")
public class vendor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vn_id")
	private int id;
	@NotNull
	@Column(name = "vn_name")
	private String vendor_name;
	@NotNull
	@Column(name = "vn_reg_no")
	private String registration_no;
	
	@NotNull
	@Column(name = "vn_type")
	private String vendor_type;
	
	@NotNull
	@Column(name = "vn_address")
	private String address;
	
	@NotNull
	@Column(name = "vn_country")
	private String country;
	
	@NotNull
	@Column(name = "vn_state")
	private String state;
	
	@NotNull
	@Column(name = "vn_email")
	private String vendor_email;
	
	@NotNull
	@Column(name = "vn_contact")
	private long contact_number;
	
	@NotNull
	@Column(name = "vn_website")
	private String website;

	@NotNull
	@Column(name = "vn_cert_issue_date")
	private Date certificate_issue_date;
	
	@NotNull
	@Column(name = "vn_certificate_validity")
	private Date cert_validity_date;
	
	@NotNull
	@Column(name = "vn_year")
	private int year_establishment;
	
	@NotNull
	@Column(name = "vn_payment")
	private String payment_gateway;
	@NotNull
	@Column(name="vn_username")
	private String username;
	@NotNull
	@Column(name="vn_password")
	private String password;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "vn_role", joinColumns = @JoinColumn(name = "vnr_vn_id"), inverseJoinColumns = @JoinColumn(name = "vnr_ro_id"))
	private List<Role> roles;
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	 private List<Bill> bills;
	

//	public List<Bill> getBills() {
//		return bills;
//	}

	public void setBills(List<Bill> bills) {
		this.bills = bills;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVendor_name() {
		return vendor_name;
	}

	public void setVendor_name(String vendor_name) {
		this.vendor_name = vendor_name;
	}

	public String getRegistration_no() {
		return registration_no;
	}

	public void setRegistration_no(String registration_no) {
		this.registration_no = registration_no;
	}

	public String getVendor_type() {
		return vendor_type;
	}

	public void setVendor_type(String vendor_type) {
		this.vendor_type = vendor_type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getVendor_email() {
		return vendor_email;
	}

	public void setVendor_email(String vendor_email) {
		this.vendor_email = vendor_email;
	}

	public long getContact_number() {
		return contact_number;
	}

	public void setContact_number(long contact_number) {
		this.contact_number = contact_number;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Date getCertificate_issue_date() {
		return certificate_issue_date;
	}

	public void setCertificate_issue_date(Date certificate_issue_date) {
		this.certificate_issue_date = certificate_issue_date;
	}

	public Date getCert_validity_date() {
		return cert_validity_date;
	}

	public void setCert_validity_date(Date cert_validity_date) {
		this.cert_validity_date = cert_validity_date;
	}

	public int getYear_establishment() {
		return year_establishment;
	}

	public void setYear_establishment(int year_establishment) {
		this.year_establishment = year_establishment;
	}

	public String getPayment_gateway() {
		return payment_gateway;
	}

	public void setPayment_gateway(String payment_gateway) {
		this.payment_gateway = payment_gateway;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
		return "vendor [id=" + id + ", vendor_name=" + vendor_name + ", registration_no=" + registration_no
				+ ", vendor_type=" + vendor_type + ", address=" + address + ", country=" + country + ", state=" + state
				+ ", vendor_email=" + vendor_email + ", contact_number=" + contact_number + ", website=" + website
				+ ", certificate_issue_date=" + certificate_issue_date + ", cert_validity_date=" + cert_validity_date
				+ ", year_establishment=" + year_establishment + ", payment_gateway=" + payment_gateway + ", username="
				+ username + ", password=" + password + ", roles=" + roles + "]";
	}

	

	
	

}
