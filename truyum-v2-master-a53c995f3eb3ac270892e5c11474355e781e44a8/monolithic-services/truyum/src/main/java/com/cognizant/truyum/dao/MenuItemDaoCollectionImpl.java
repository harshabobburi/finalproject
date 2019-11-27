package com.cognizant.truyum.dao;
import java.text.ParseException;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.truyum.model.MenuItem;


@Repository
public class MenuItemDaoCollectionImpl implements MenuItemDao {
	
	private static List<MenuItem> menuItemList;
	public MenuItemDaoCollectionImpl()
	{
		if(menuItemList==null)
		{
			ApplicationContext context = new ClassPathXmlApplicationContext("truyum.xml");
			menuItemList = (ArrayList<MenuItem>)context.getBean("menuItem");

		}
	}
	public List<MenuItem> getMenuItemListAdmin()
	{
		return menuItemList;
		
	}
	
	@Override
	public List<MenuItem> getMenuItemListCustomer() {
		List<MenuItem> menuItemListCustomer = new ArrayList<MenuItem>();
		
		Calendar cal = Calendar.getInstance();
		Date d = cal.getTime();
		Date d1 = new Date();
		
		SimpleDateFormat f1 = new SimpleDateFormat("dd/MM/yyyy");
		String s1 = f1.format(d);
		try{
			d1 = f1.parse(s1);
			
		}catch (ParseException e)
		{
			e.printStackTrace();
		}
		
		Iterator<MenuItem> itr = menuItemList.iterator();
		
		while(itr.hasNext()){
			MenuItem i = (MenuItem) itr.next();
			if(i.isActive() && (d1.after(i.getDateOfLaunch()))) {
				menuItemListCustomer.add(i);
			}
		}
		return menuItemListCustomer;
	}
	@Override
	public void modifyMenuItem(MenuItem menuItem) {
		
        for(int i=0;i<menuItemList.size();i++){
        	MenuItem m1 = menuItemList.get(i);
        	if(menuItem.getId()==m1.getId()) {
        		menuItemList.remove(i);
        		menuItemList.add(menuItem);
        	}
        }
	}
		
	
	@Override
	public MenuItem getMenuItem(long menuItemId) {
		
		for(MenuItem o1:menuItemList)
		{
			if(o1.getId()==menuItemId)
			{
				return o1;
			}
		}
		return null;
	}
	
	

}