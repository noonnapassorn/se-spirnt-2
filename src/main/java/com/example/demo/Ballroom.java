package com.example.demo;
import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Ballroom {

	private @Id String ballroomID;
	private String roomName;
    private String support;


	private Ballroom() {}

	public Ballroom(String ballroomID,String roomName,String support) {
    this.ballroomID = ballroomID;
		this.roomName = roomName;
		this.support = support;

	}
}
