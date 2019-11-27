package com.cognizant.truyum.menuitemservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.cognizant.truyum.menuitemservice.model.MenuItem;
import com.cognizant.truyum.menuitemservice.model.Users;
import com.cognizant.truyum.menuitemservice.model.cartDTO;
import com.cognizant.truyum.menuitemservice.repository.MenuItemRepository;
import com.cognizant.truyum.menuitemservice.repository.UserRepository;
@Service
public class CartService {
	
//	@Autowired
//	public  CartDao cartdao;
	
	@Autowired
	public MenuItemRepository menuitemrepository;
	@Autowired
	public UserRepository userrepository;
	
	
	
	
	public void addCartItem(String userName, long menuItemId)
	{
		Users user = userrepository.findByUsername(userName);
		user.getMenuItems().add(menuitemrepository.findById(menuItemId).get());
		userrepository.save(user);
		
	}
	public cartDTO getAllCartItems(String userName) 
	{

		List<MenuItem> list = userrepository.getMenuItems(userName);
		if(list==null || list.size()==0)
		{
			return new cartDTO(list,0);
		}
		double total=userrepository.getCartTotal(userName);
		
		cartDTO dto = new cartDTO(list,total);
		return dto;
	}
	
//	public void removeCartItem(String userName, long menuItemId)
//	{
//		cartdao.removeCartItem(userName, menuItemId);
//	}
	
	public void removeCartItem(String username,long menuItemId){
		
		Users users=userrepository.findByUsername(username);
		List<MenuItem> ma=users.getMenuItems();
		MenuItem m=menuitemrepository.findById(menuItemId).get();
		

		ma.remove(m);
		users.setMenuItems(ma);
		userrepository.save(users);
		
		 } 

}
