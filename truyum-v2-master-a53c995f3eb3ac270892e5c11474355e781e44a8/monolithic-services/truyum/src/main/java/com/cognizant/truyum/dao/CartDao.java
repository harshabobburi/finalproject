package com.cognizant.truyum.dao;

import com.cognizant.truyum.model.cartDTO;

public interface CartDao {
	
	public void addCartItem(String userName, long menuItemId);
	public cartDTO getAllCartItems(String userName);
	public void removeCartItem(String userName, long menuItemId);
}
