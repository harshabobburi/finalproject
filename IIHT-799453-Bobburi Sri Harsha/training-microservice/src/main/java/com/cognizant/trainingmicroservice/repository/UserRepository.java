package com.cognizant.trainingmicroservice.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.trainingmicroservice.model.Users;


public interface UserRepository extends CrudRepository<Users, Integer> {


    Users findByUserName(String userName);    
    @Query("From Users")
	List<Users> getUser();
//    User findByUserName(String userName);
                      
//    Optional<Users> findByUserName(String userName);

}
