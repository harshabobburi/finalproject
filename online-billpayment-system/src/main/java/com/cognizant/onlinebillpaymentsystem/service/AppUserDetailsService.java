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

import com.cognizant.onlinebillpaymentsystem.model.AppUser;
import com.cognizant.onlinebillpaymentsystem.model.Role;
import com.cognizant.onlinebillpaymentsystem.model.Users;
import com.cognizant.onlinebillpaymentsystem.repository.RoleRepository;
import com.cognizant.onlinebillpaymentsystem.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);
	
	
	@Autowired
	public UserRepository userRepository;
	@Autowired
	private RoleRepository rolerepository;

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
	public boolean signup(Users newuser){
        Users u=userRepository.findByUserid(newuser.getUserid());
        if(u==null)
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
            return true;
        }
        else
            return false;
   }

	
	

}


