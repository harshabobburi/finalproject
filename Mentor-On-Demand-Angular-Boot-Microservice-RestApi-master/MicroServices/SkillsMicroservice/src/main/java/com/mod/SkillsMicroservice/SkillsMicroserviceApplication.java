package com.mod.SkillsMicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class SkillsMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillsMicroserviceApplication.class, args);
	}

}
