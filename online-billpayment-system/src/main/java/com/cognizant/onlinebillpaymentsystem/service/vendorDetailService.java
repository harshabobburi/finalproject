package com.cognizant.onlinebillpaymentsystem.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.onlinebillpaymentsystem.exception.VendorAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.model.Role;
import com.cognizant.onlinebillpaymentsystem.model.Users;
import com.cognizant.onlinebillpaymentsystem.model.appvendor;
import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.RoleRepository;
import com.cognizant.onlinebillpaymentsystem.repository.UserRepository;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;

@Service
public class vendorDetailService implements UserDetailsService{

private static final Logger LOGGER = LoggerFactory.getLogger(vendorDetailService.class);
	
	@Autowired
	private RoleRepository rolerepository;
	@Autowired
	private VendorRepository vendorrepository;
	@Autowired
	private UserRepository userrepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		vendor user = vendorrepository.findByUsername(username);
		if(user==null){
			throw new UsernameNotFoundException("vendor User not found!");
		}
		else
		{
			LOGGER.info("vendor user is:"+user);
			appvendor vendorUser = new appvendor(user);
			LOGGER.info("Vendor is: "+vendorUser);
			return vendorUser;
		}
		
	}
	public vendorDetailService(VendorRepository vendorrepository) {
		super();
		this.vendorrepository = vendorrepository;
	}
	public void vendorsignup(vendor newuser) throws VendorAlreadyExistsException{
        vendor u=vendorrepository.findByUsername(newuser.getUsername());
        Users user = userrepository.findByUserid(newuser.getUsername());
        if(u!= null || user!=null)
        {
        	throw new VendorAlreadyExistsException();
        }
        else
        {
            String password=newuser.getPassword();
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            String newpassword=encoder.encode(password);
            Role role= rolerepository.findById(3).get();
            List<Role> roleset= new ArrayList<Role>();
            roleset.add(role);
            newuser.setRoles(roleset);
            newuser.setPassword(newpassword);
            vendorrepository.save(newuser);
        }
        
   }
//	public vendor getVendordetails(String username)
//	{
//		Optional<vendor> result = vendorrepository.findByUsername(username);	
//		vendor vendor = result.get();
//			 return vendor;
//
//}
}
