package com.example.demo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Pattern;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.ManyToOne;

import javax.persistence.OneToOne;

import lombok.Data;
import java.util.Date;

@Data
@Entity
public class LaundryReceipt {

	private @Id @GeneratedValue Long id;
	@OneToOne
	private Roomnumber roomnumber;

	
	@Size(min = 1, max = 50)
	private String name;

	@Pattern(regexp = "0\\d{8,9}")
	private String telnum;

	@NotNull
	private String service;
	private Date date;

	private LaundryReceipt() {}

	public LaundryReceipt(Roomnumber roomnumber,String name,String telnum,String service,Date date) {
		this.roomnumber = roomnumber;
		this.name = name;
		this.telnum = telnum;
		this.service = service;
		this.date = date;


	}
}