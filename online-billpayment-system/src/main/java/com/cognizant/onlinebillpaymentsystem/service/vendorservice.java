package com.cognizant.onlinebillpaymentsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.onlinebillpaymentsystem.model.Role;
import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.RoleRepository;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;

@Service
public class vendorservice {

	@Autowired
	public RoleRepository rolerepository;
	@Autowired
	public VendorRepository vendorrepository;
	
	public boolean modifyvendor(vendor vendor){
		vendor vendors = vendorrepository.findByUsername(vendor.getUsername());
		if(vendors!=null)
		{
			Role role= rolerepository.findById(3).get();
            List<Role> roleset= new ArrayList<Role>();
            roleset.add(role);
            vendor.setRoles(roleset);
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            String newpassword=encoder.encode(vendor.getPassword());
            vendor.setPassword(newpassword);
            vendorrepository.save(vendor);
            return true;
		}
		else
		return false;
	}
}
