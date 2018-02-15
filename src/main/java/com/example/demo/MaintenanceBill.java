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

@Data
@Entity
public class MaintenanceBill {
    private @Id @GeneratedValue  Long id;
    private String name;
    private String cal;
    private String roomnumber;
    private String listname;
    private String data;
    private Date date = new Date();





    private MaintenanceBill() {}

    public MaintenanceBill(String name,String cal,String roomnumber,String listname,String data,String date){
        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd");
        this.name = name;
        this.cal = cal;
        this.roomnumber = roomnumber;
        this.listname = listname;
        this.data = data;
        Date dates = new Date();
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
