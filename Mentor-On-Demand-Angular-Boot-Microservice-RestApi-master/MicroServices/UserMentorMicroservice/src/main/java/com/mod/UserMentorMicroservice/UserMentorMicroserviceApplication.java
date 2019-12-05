package com.mod.UserMentorMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class UserMentorMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserMentorMicroserviceApplication.class, args);
	}

}
