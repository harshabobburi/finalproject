//package com.cognizant.iiht.User.Microservice;
//
//import static org.junit.Assert.*;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import com.cognizant.iiht.User.Microservice.exception.UserAlreadyExistsException;
//import com.cognizant.iiht.User.Microservice.model.Users;
//import com.cognizant.iiht.User.Microservice.service.AppUserDetailsService;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = UserMicroserviceApplication.class)
//
//public class UserMicroserviceApplicationTests {
//
//    @Autowired
//    AppUserDetailsService userservice;
//                    
//    @Test
//    public void testUserSignup() throws UserAlreadyExistsException {
//                    
//    
//                    Users user =new Users();
//                    
//                    user.setUserName("harshabobburi");
//                    user.setPassword("88159088");
//                   
//                    user.setFirstName("harsha");
//                    user.setLastName("bobburi");
//                    user.setRole("User");
//                    user.setContactNumber(9567546353l);
//        assertEquals(userservice.signup(user),true);
//                    
//    }
//
//}
