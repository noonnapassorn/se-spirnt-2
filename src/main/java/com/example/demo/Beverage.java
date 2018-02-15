package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Beverage {

	private @Id String beverageId;
    private String name;
    private Double price;
    
	


	private Beverage() {}
	public Beverage(String beverageId,String name,Double price) {
        this.beverageId = beverageId;
        this.name = name;
        this.price = price;
	}
}