package com.cognizant.iiht.User.Microservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.iiht.User.Microservice.model.Users;


public interface UserRepository extends CrudRepository<Users, Integer> {


    Users findByUserName(String userName);    
    @Query("From Users")
	List<Users> getUser();
//    User findByUserName(String userName);
                                                       

}
