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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.validation.constraints.*;
import javax.persistence.OneToOne;


@Data
@Entity
public class ChangeRoom {
private @Id @GeneratedValue  Long id;

    @NotNull
    @OneToOne
	private ReservationReceipt billid;

    private String oldNameroom;
    private Double oldPrice;
    private Double newPrice;
    private String oldRoomnumber;
    private Date date = new Date();
    private String name;
	private String newRoomName;
    private String newRoomNumber;

    @Pattern(regexp = "CH\\d{4}")
    private String changeid;


	private ChangeRoom() {}
	public ChangeRoom(String newRoomName,String newRoomNumber,ReservationReceipt billid,String name,String oldNameroom,String oldRoomnumber,String date,Double newPrice,String changeid,Double oldPrice) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd");
		this.newRoomName = newRoomName;
        this.newRoomNumber =newRoomNumber;
		this.billid = billid;
        this.name = name;
        this.oldNameroom = oldNameroom;
        this.oldRoomnumber = oldRoomnumber;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        Date dates = new Date();
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        this.changeid=changeid;
	}
}

