package com.cognizant.onlinebillpaymentsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.onlinebillpaymentsystem.model.Users;

public interface UserRepository extends CrudRepository<Users, Long> {

//	@Query("SELECT u FROM Users u where u.username=?1" )
    Users findByUserid(String userid);
    
    @Query("From Users")
	List<Users> getUser();
                                                        
//    @Query("SELECT u.menuItems from Users u WHERE u.username=?1")
//    List<MenuItem> getMenuItems(String username);
//
//    @Query(value = "select sum(me_price) from menu_item where me_id in(select ct_pr_id from cart where ct_us_id=(select us_id from user where us_username= :username))", nativeQuery = true)
//    public double getCartTotal(@Param(value = "username") String username);

}
