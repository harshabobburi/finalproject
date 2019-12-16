package com.cognizant.trainingmicroservice.service;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.trainingmicroservice.exception.UserAlreadyExistsException;
import com.cognizant.trainingmicroservice.model.AppUser;
import com.cognizant.trainingmicroservice.model.Users;
import com.cognizant.trainingmicroservice.repository.UserRepository;


@Service
public class AppUserDetailsService implements UserDetailsService{
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		AppUser appUser;
		Users user = userRepository.findByUserName(userId);
		if(user==null){
			throw new UsernameNotFoundException("User not found!");
		}
		else
		{
			LOGGER.info("user is:"+user);
			appUser = new AppUser(user);
			
		}
		return appUser;
		
	}
	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	public boolean signup(@Valid Users newuser) throws UserAlreadyExistsException{
        Users newUser=userRepository.findByUserName(newuser.getUserName());
        if(newUser!=null)
        {
        	throw new UserAlreadyExistsException("Username is already taken");
        }
        else
        {
            String password=newuser.getPassword();
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            String newpassword=encoder.encode(password);
            
            newuser.setPassword(newpassword);
            userRepository.save(newuser);
            return true;
        }
    
   }
	@Transactional
	public Users getUserByUserName(String userName) {
		return userRepository.findByUserName(userName);
	}
	

}


