package com.cognizant.onlinebillpaymentsystem.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.onlinebillpaymentsystem.model.Bill;
import com.cognizant.onlinebillpaymentsystem.repository.BillRepository;
@Service
public class billdetailsservice {

	@Autowired
	BillRepository billrepository;

	public void addBillpayment(@Valid Bill newBill) {
		
		Bill bill = billrepository.findById(newBill.getBill_id());		
		billrepository.save(newBill);

	}

}
