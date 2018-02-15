package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Room {

	private @Id @GeneratedValue Long id;
	private String nameroom;
	private Double price;

	private Room() {}
	public Room(String nameroom, Double price) {
		this.nameroom = nameroom;
		this.price = price;
	}
}