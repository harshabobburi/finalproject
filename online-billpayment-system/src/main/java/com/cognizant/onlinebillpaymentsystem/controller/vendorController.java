package com.cognizant.onlinebillpaymentsystem.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.onlinebillpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;
import com.cognizant.onlinebillpaymentsystem.service.vendorDetailService;
import com.cognizant.onlinebillpaymentsystem.service.vendorservice;

@RestController
@RequestMapping("/")
public class vendorController {
	
	@Autowired
	vendorDetailService vendordetailservice;
	
	@Autowired
	VendorRepository vendorrepository;
	@Autowired
	vendorservice vendorservice;
	
	@GetMapping("vendors")
	public List<vendor> getvendor() {

		return (vendorrepository.getVendor());

	}
	
	@PostMapping("vendors")
	public void vendorsignup(@RequestBody @Valid vendor user) throws VendorAlreadyExistsException
	{

			 vendordetailservice.vendorsignup(user);
		
	}
	@GetMapping("/vendors/{username}")
//    public ResponseEntity<vendor> getvendorByusername(@PathVariable String username)
//        throws ResourceNotFoundException {
//        vendor vendor = vendorrepository.findByUsername(username);
//        return ResponseEntity.ok().body(vendor);
	public vendor getvendor(@PathVariable String username)
	{
		return vendorservice.getvendor(username);
    }
    @PutMapping("vendors/")
    public void modifyvendor(@RequestBody vendor vendor)
    {
    	vendorservice.modifyvendor(vendor);
    }
//    @PutMapping("/vendors/{username}")
//    public ResponseEntity<vendor> updatevendor(@PathVariable String username,
//         @Valid @RequestBody vendor vendordetailservice) throws ResourceNotFoundException {
//        vendor vendor = vendorrepository.findByUsername(username);
//
//        vendor.setVendor_name(vendordetailservice.getVendor_name());
//        vendor.setRegistration_no(vendordetailservice.getRegistration_no());
//        vendor.setVendor_type(vendordetailservice.getVendor_type());
//        vendor.setAddress(vendordetailservice.getAddress());
//        vendor.setCountry(vendordetailservice.getCountry());
//        vendor.setState(vendordetailservice.getState());
//        vendor.setVendor_email(vendordetailservice.getVendor_email());
//        vendor.setContact_number(vendordetailservice.getContact_number());
//        vendor.setWebsite(vendordetailservice.getWebsite());
//        vendor.setCertificate_issue_date(vendordetailservice.getCertificate_issue_date());
//        vendor.setCert_validity_date(vendordetailservice.getCert_validity_date());
//        vendor.setYear_establishment(vendordetailservice.getYear_establishment());
//        vendor.setPayment_gateway(vendordetailservice.getPayment_gateway());
//        vendor.setPassword(vendordetailservice.getPassword());
//        final vendor updatedvendor = vendorrepository.save(vendor);
//        return ResponseEntity.ok(updatedvendor);
//    }
	

}
