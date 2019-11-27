package com.cognizant.truyum.menuitemservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.truyum.menuitemservice.model.MenuItem;
import com.cognizant.truyum.menuitemservice.repository.MenuItemRepository;

@Service
public class MenuItemService {
	
//	@Autowired
//	public MenuItem menuitemdao;
	
	@Autowired
	public MenuItemRepository menuitemrepository;
	
	public List<MenuItem> getMenuItemListCustomer()
	{
		return menuitemrepository.getMenuItemListCustomer();
	}
	
	public List<MenuItem> getMenuItemListAdmin()
	{
		List<MenuItem> list = new ArrayList<MenuItem>();
	     menuitemrepository.findAll().forEach(list::add);
	     return list;
	}
	
	public MenuItem getMenuItem(long id)
	{
		Optional<MenuItem> result = menuitemrepository.findById(id);
	
		MenuItem menuItem = result.get();
			 return menuItem;

		
		
	}
	public void modifyMenuItem(MenuItem menuItem)
	{
		menuitemrepository.save(menuItem);
	}
}
