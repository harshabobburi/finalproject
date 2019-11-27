package com.cognizant.truyum.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.truyum.model.MenuItem;
@Repository
public interface MenuItemRepository extends CrudRepository<MenuItem, Long>{

	@Query("From MenuItem m where m.active=1 and m.DateOfLaunch<CURDATE()")
	List<MenuItem> getMenuItemListCustomer();

	MenuItem getOne(Long movieItemId);

	

	
}
