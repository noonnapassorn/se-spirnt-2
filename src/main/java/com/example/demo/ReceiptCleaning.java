package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;
import java.util.Date;

@Data
@Entity
public class ReceiptCleaning {

	private @Id @GeneratedValue Long id;
	@OneToOne
	private Roomnumber roomnumber;
	private String fname;
	private String lname;
	private String location;
	private String telnum;
	private String note;
	private Date date;

	private ReceiptCleaning() {}

	public ReceiptCleaning(Roomnumber roomnumber,String fname,String lname,String telnum,String location, String note,Date date) {
		this.roomnumber = roomnumber;
		this.fname = fname;
		this.lname = lname;
		this.location = location;
		this.telnum = telnum;
		this.note = note;
		this.date = date;


	}
}