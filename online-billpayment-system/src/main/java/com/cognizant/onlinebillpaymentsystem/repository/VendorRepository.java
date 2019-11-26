package com.cognizant.onlinebillpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.onlinebillpaymentsystem.model.vendor;

public interface VendorRepository extends CrudRepository<vendor, Integer>{

	vendor findByUsername(String username);
	
	@Query("From vendor")
	List<vendor> getVendor();
}
