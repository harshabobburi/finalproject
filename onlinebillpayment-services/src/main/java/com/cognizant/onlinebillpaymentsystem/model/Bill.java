package com.cognizant.onlinebillpaymentsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
	@Table(name = "billdetails")
	public class Bill {


		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "billpayment_id")
		private int bill_id;
		
		@NotNull
		@Column(name = "consumer_id")
		private String consumer_id;
		
		@NotNull
		@Column(name = "amount")
		private int amount;
		
		
		@ManyToOne
	    @JoinColumn
	    private Users user;
		

		@ManyToOne
	    @JoinColumn
	    private vendor vendor;


		public int getBill_id() {
			return bill_id;
		}


		public void setBill_id(int bill_id) {
			this.bill_id = bill_id;
		}


		public String getConsumer_id() {
			return consumer_id;
		}


		public void setConsumer_id(String consumer_id) {
			this.consumer_id = consumer_id;
		}


		public int getAmount() {
			return amount;
		}


		public void setAmount(int amount) {
			this.amount = amount;
		}


		public Users getUser() {
			return user;
		}


		public void setUser(Users user) {
			this.user = user;
		}


		public vendor getVendor() {
			return vendor;
		}


		public void setVendor(vendor vendor) {
			this.vendor = vendor;
		}


		@Override
		public String toString() {
			return "Bill [bill_id=" + bill_id + ", consumer_id=" + consumer_id + ", amount=" + amount + ", user=" + user
					+ ", vendor=" + vendor + "]";
		}
		
		
	}