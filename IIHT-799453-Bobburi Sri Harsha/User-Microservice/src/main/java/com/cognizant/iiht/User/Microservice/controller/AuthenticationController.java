package com.cognizant.iiht.User.Microservice.controller;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.iiht.User.Microservice.UserMicroserviceApplication;
import com.cognizant.iiht.User.Microservice.repository.UserRepository;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserMicroserviceApplication.class);
	
	@Autowired
	UserRepository UserRepository;

	
	
	@GetMapping("/authentication")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
                    LOGGER.info("Start of auth function");
                    HashMap<String, String> map = new HashMap<String, String>();
                    map.put("token", "");
                    String JWT = generateJwt((getUser(authHeader)));
                    String role = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString();
                    System.out.println(role);
                    LOGGER.debug("JWT:{}",JWT);
                    map.put("token",JWT );
                    map.put("role", role);

                    System.out.println(map);
                    LOGGER.info("END OF AUTH FUNCTION");
                    return map;
    }

	private String getUser(String authHeader){
		String user=new String(Base64.getDecoder().decode(authHeader.substring(6)));
		user= user.substring(0, user.indexOf(":"));
		LOGGER.info(user);
		return user;
	}
	private String generateJwt(String user){
		JwtBuilder builder = Jwts.builder();
        builder.setSubject(user);

        // Set the token issue time as current time
        builder.setIssuedAt(new Date());

        // Set the token expiry as 20 minutes from now
        builder.setExpiration(new Date((new Date()).getTime() + 1200000));
        builder.signWith(SignatureAlgorithm.HS256, "secretkey");

        String token = builder.compact();
        LOGGER.info(token);
        return token;
	}
}
