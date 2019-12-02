package com.cognizant.onlinebillpaymentsystem;


import static org.junit.Assert.assertEquals;

import java.sql.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cognizant.onlinebillpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.model.Bill;
import com.cognizant.onlinebillpaymentsystem.model.Users;
import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.BillRepository;
import com.cognizant.onlinebillpaymentsystem.repository.UserRepository;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;
import com.cognizant.onlinebillpaymentsystem.service.AppUserDetailsService;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = OnlineBillpaymentSystemApplication.class)
public class OnlineBillpaymentSystemApplicationTests { 
	
	       
	       @Autowired
	       private AppUserDetailsService appuserdetailsservice;
	       @Autowired
	       private UserRepository UserRepository;
	       @Autowired
	       private VendorRepository VendorRepository;
	       @Autowired
	       private BillRepository BillRepository;
//	       @Before
//	       public void init() {
//	              MockitoAnnotations.initMocks(this);
//	       }


	       @Test
	       public void testUserID() throws UserAlreadyExistsException{
	            Users user= new Users();
	            user.setUserid("user");
	            user.setAadharnumber("68805864");
	            user.setContact("12344546354");
	            user.setFirstname("dnjkbnanlk");
	            user.setGender("male");
	            user.setLastname("hdhdhd");
	            user.setPannumber("52649865");
	            user.setPassword("pwd");
	            Users u=UserRepository.findByUserid("user");
	            assertEquals(u.getUserid(),user.getUserid());
	       }
	       
	       @Test
	       public void testVendorID() throws VendorAlreadyExistsException{
	            vendor dr= new vendor();
	             String str="2019-11-11";
	            Date d= Date.valueOf(str);
	            dr.setUsername("vendor");
	            dr.setAddress("asdsad");
	            dr.setCertificate_issue_date(d);
	            dr.setCert_validity_date(d);
	            dr.setContact_number(123);
	            dr.setCountry("india");
//	            dr.setUsername("vendor");
	       dr.setRegistration_no("asdasd");
	       dr.setPayment_gateway("Googlepay");
	       dr.setState("andhra");
	       dr.setVendor_email("sadasd");
	       dr.setVendor_type("DTH");
	       dr.setWebsite("asdd");
	       dr.setYear_establishment(2312);
	       dr.setPassword("pwd");

	            
	            vendor v1=VendorRepository.findByUsername("vendor");
	           // User u=urepository.findByUserid("user");
	            assertEquals(v1.getUsername(),dr.getUsername());
	       }

	       @Test
	       public void testBillID() {
	            Bill dr= new Bill();
	             String str="2019-11-11";
	            Date d= Date.valueOf(str);
	            dr.setAmount(123);
	            dr.setConsumer_id("1213");
	            dr.setBill_id(1);
	            Users u=UserRepository.findByUserid("user");
	            dr.setUser(u);

	          
	            vendor v1=VendorRepository.findByUsername("vendor");
	            dr.setVendor(v1);
	            
	            
	            Bill bill =BillRepository.findById(1);
	           // User u=urepository.findByUserid("user");
	            assertEquals(dr.getBill_id(),bill.getBill_id());
	       }




}
