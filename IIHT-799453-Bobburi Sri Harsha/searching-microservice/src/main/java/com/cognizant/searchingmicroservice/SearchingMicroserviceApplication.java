package com.cognizant.searchingmicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class SearchingMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SearchingMicroserviceApplication.class, args);
	}

}
