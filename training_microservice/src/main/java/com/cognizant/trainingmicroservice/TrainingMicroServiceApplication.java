package com.cognizant.trainingmicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TrainingMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainingMicroServiceApplication.class, args);
	}

}
