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

import com.cognizant.onlinebillpaymentsystem.exception.UserAlreadyExistsException;
import com.cognizant.onlinebillpaymentsystem.model.AppUser;
import com.cognizant.onlinebillpaymentsystem.model.Role;
import com.cognizant.onlinebillpaymentsystem.model.Users;
import com.cognizant.onlinebillpaymentsystem.model.vendor;
import com.cognizant.onlinebillpaymentsystem.repository.RoleRepository;
import com.cognizant.onlinebillpaymentsystem.repository.UserRepository;
import com.cognizant.onlinebillpaymentsystem.repository.VendorRepository;


@Service
public class AppUserDetailsService implements UserDetailsService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);
	
	
	@Autowired
	public UserRepository userRepository;
	@Autowired
	private RoleRepository rolerepository;
	@Autowired
	private VendorRepository vendorrepository;

	@Override
	public UserDetails loadUserByUsername(String userid) throws UsernameNotFoundException {
		Users user = userRepository.findByUserid(userid);
		if(user==null){
			throw new UsernameNotFoundException("User not found!");
		}
		else
		{
			LOGGER.info("user is:"+user);
			AppUser appUser = new AppUser(user);
			LOGGER.info("userDetails is: "+appUser);
			return appUser;
		}
		
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	public void signup(Users newuser) throws UserAlreadyExistsException{
        Users u=userRepository.findByUserid(newuser.getUserid());
        vendor vendor = vendorrepository.findByUsername(newuser.getUserid());
        if(u!=null || vendor!=null)
        {
        	throw new UserAlreadyExistsException();
        }
        else
        {
            String password=newuser.getPassword();
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            String newpassword=encoder.encode(password);
            Role role= rolerepository.findById(1).get();
            List<Role> roleset= new ArrayList<Role>();
            roleset.add(role);
            newuser.setRoles(roleset);
            newuser.setPassword(newpassword);
            userRepository.save(newuser);
        }
   }

	
	

}


