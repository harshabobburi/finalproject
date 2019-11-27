package com.cognizant.truyum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.truyum.model.MenuItem;
import com.cognizant.truyum.security.AppUserDetailsService;
import com.cognizant.truyum.service.MenuItemService;

@RestController
@RequestMapping("/menu-items")
public class MenuItemController {
	
	@Autowired
	public MenuItemService menuitemservice;
	
//	@Autowired
//	public InMemoryUserDetailsManager inMemoryUserDetailsManager;
	@Autowired
	public AppUserDetailsService appserdetailsservice;
	
	
	@GetMapping
	public List<MenuItem> getAllMenuItems()
	{
//		return menuitemservice.getMenuItemListCustomer();
		Authentication authentication = 
				SecurityContextHolder.getContext().getAuthentication();
				String user = authentication.getName();
				if(!user.equalsIgnoreCase("anonymousUser")){
//					System.out.println(user);
				UserDetails userDetails = appserdetailsservice.loadUserByUsername(user);
				String role = userDetails.getAuthorities().toArray()[0].toString();
				
				if(role.equalsIgnoreCase("ADMIN"))
				{
//					System.out.println(hi)
					return menuitemservice.getMenuItemListAdmin();
				}
				else 
				{
					return menuitemservice.getMenuItemListCustomer();}
				}
				else
					return menuitemservice.getMenuItemListCustomer();
	}
    @GetMapping("/{id}")
    public MenuItem getMenuItem(@PathVariable long id)
	{
		return menuitemservice.getMenuItem(id);
	}
   
	@PutMapping("/{id}")
	public void modifyMenuItem(@RequestBody MenuItem menuItem)
	{
		menuitemservice.modifyMenuItem(menuItem);
	}

}
