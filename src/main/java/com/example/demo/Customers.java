package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


import lombok.Data;

@Data
@Entity
public class Customers {

	private @Id @GeneratedValue Long id;

	private String name;
  	private String address;
	private String email;
	private String phone;

	private Customers() {}

	public Customers(String name,String address,String email,String phone) {
		
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
	}
}
