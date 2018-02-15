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
import javax.validation.constraints.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.OneToOne;

@Data
@Entity
public class CancelRoom {
private @Id @GeneratedValue  Long id;

    @OneToOne
	private ReservationReceipt billid;
    private String nameroom;
    private Double price;
    private String roomnumber;
    private String date;
    private String name;
	private String cancelbill;

	private CancelRoom() {}
	public CancelRoom(String cancelbill,ReservationReceipt billid,String name,String nameroom,String roomnumber,String date,Double price) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd");
		this.cancelbill = cancelbill;
		this.billid = billid;
        this.name = name;
        this.nameroom = nameroom;
        this.roomnumber = roomnumber;
        this.price = price;
        this.date=date;
	}
}
