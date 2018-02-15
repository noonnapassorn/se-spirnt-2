package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Food {

	private @Id String foodId;
    private String foodset;
    private Double price;
    private String details;
    
	private Food() {}
	public Food(String foodid,String foodset,Double price,String details) {
        this.foodId = foodid;
        this.foodset = foodset;
        this.price = price;
        this.details = details;
	}
}
