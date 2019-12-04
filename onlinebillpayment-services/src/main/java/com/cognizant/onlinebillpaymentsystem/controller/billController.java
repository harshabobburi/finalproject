package com.cognizant.onlinebillpaymentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.onlinebillpaymentsystem.model.Bill;
import com.cognizant.onlinebillpaymentsystem.repository.BillRepository;
import com.cognizant.onlinebillpaymentsystem.service.billdetailsservice;

@RestController
@RequestMapping("/billpayments")
public class billController {

	
	@Autowired
	BillRepository billrepository;
	
	@Autowired
	billdetailsservice billDetailsService;
		
	@GetMapping()
	public List<Bill> getBill() {
		return (billrepository.getBill());
	}
	
	@GetMapping("/{bill}")
	public List<Bill> getUserBill(@PathVariable String bill){
		return billrepository.getUserBill(bill);
	}
	

	
}
