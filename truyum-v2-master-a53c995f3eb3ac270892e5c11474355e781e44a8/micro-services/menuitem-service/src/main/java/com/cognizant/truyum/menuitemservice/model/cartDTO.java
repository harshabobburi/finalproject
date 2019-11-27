package com.cognizant.truyum.menuitemservice.model;
import java.util.List;
public class cartDTO {
	
	private List<MenuItem> menuItemList;
	private double total;

	
	
	public List<MenuItem> getMenuItemList() {
		return menuItemList;
	}

	public void setMenuItemList(List<MenuItem> menuItemList) {
		this.menuItemList = menuItemList;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public cartDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
public cartDTO(List<MenuItem> menuItemList, double total) {
		super();
		this.menuItemList = menuItemList;
		this.total = total;
	}

//
//	public Set<MenuItem> getCartItems() {
//		return cartItems;
//	}
//
//	public void setCartItems(Set<MenuItem> cartItems) {
//		this.cartItems = cartItems;
//	}
//
//	public double getTotal() {
//		return total;
//	}
//
//	public void setTotal(double total) {
//		this.total = total;
//	}
//
//
//
//
////	public cartDTO(List<MenuItem> cartItems, double total) {
////		super();
////		this.cartItems = cartItems;
////		this.total = total;
////	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		cartDTO other = (cartDTO) obj;
		if (menuItemList == null) {
			if (other.menuItemList != null)
				return false;
		} else if (!menuItemList.equals(other.menuItemList))
			return false;
		if (Double.doubleToLongBits(total) != Double.doubleToLongBits(other.total))
			return false;
		return true;
	}

}
