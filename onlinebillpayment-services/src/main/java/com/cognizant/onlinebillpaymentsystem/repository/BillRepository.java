package com.cognizant.onlinebillpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.onlinebillpaymentsystem.model.Bill;

public interface BillRepository extends JpaRepository<Bill, Integer> {


	Bill findById(int bill_id);
	
	@Query("From Bill")
	List<Bill> getBill();
	
	@Query("SELECT u.bills from Users u WHERE u.userid=?1")
	List<Bill> getUserBill(String id);
	
	

}
