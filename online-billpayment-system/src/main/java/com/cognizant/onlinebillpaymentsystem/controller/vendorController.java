package com.cognizant.onlinebillpaymentsystem.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;
import com.cognizant.onlinebillpaymentsystem.service.vendorDetailService;

@RestController
@RequestMapping("/")
public class vendorController {
	
	@Autowired
	vendorDetailService vendordetailservice;
	
	@Autowired
	VendorRepository vendorrepository;
	
	
	@GetMapping("vendors")
	public List<vendor> getvendor() {

		return (vendorrepository.getVendor());

	}
	@PostMapping("vendors")
	public boolean vendorsignup(@RequestBody @Valid vendor user) 
	{

			return vendordetailservice.vendorsignup(user);
		
	}
	

}
