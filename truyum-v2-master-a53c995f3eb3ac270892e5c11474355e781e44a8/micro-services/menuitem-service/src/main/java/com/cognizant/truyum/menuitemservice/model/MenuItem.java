package com.cognizant.truyum.menuitemservice.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
@Entity
@Table(name="menu_item")
public class MenuItem {
	@Id
	@Column(name="me_id")
	private long id;
	@Column(name="me_name")
	private String name;
	@Column(name="me_price")
	private float price;
	@Column(name="me_active")
	private boolean active;
	@Column(name="me_date_of_launch")
	private Date DateOfLaunch;
	@Column(name="me_category")
	private String category;
	@Column(name="me_free_delivery")
	private boolean freedelivery;
	@Column(name="me_image")
	private String image;
	
	@ManyToMany
    @JoinTable(name = "cart",
        joinColumns = @JoinColumn(name = "ct_pr_id"), 
        inverseJoinColumns = @JoinColumn(name = "ct_us_id"))
private List<Users> users;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}

	
	public Date getDateOfLaunch() {
		return DateOfLaunch;
	}
	public void setDateOfLaunch(Date dateOfLaunch) {
		DateOfLaunch = dateOfLaunch;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public boolean isFreedelivery() {
		return freedelivery;
	}
	public void setFreedelivery(boolean freedelivery) {
		this.freedelivery = freedelivery;
	}
	
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}

	public MenuItem(long id, String name, float price, boolean active, Date dateOfLaunch, String category,
			boolean freedelivery, String image) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.active = active;
		DateOfLaunch = dateOfLaunch;
		this.category = category;
		this.freedelivery = freedelivery;
		this.image = image;
	}
	public MenuItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "MenuItem [id=" + id + ", name=" + name + ", price=" + price + ", active=" + active + ", DateOfLaunch="
				+ DateOfLaunch + ", category=" + category + ", freedelivery=" + freedelivery + ", image=" + image + "]";
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MenuItem other = (MenuItem) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	

	
}