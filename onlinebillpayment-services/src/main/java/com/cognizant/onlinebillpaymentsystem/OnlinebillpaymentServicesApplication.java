package com.cognizant.onlinebillpaymentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableDiscoveryClient
public class OnlinebillpaymentServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinebillpaymentServicesApplication.class, args);
	}

}
