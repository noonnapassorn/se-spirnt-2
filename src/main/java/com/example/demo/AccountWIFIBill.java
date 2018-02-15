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


@Data
@Entity
public class AccountWIFIBill {

    private @Id @GeneratedValue  Long id;

    @Pattern(regexp = "H\\d{5}")
    @Size(min = 1, max = 6)
    private String user;

    @NotNull
    private String pass;


    
    @ManyToOne
    private Roomnumber roomnumber;

    private Date date = new Date();

    private AccountWIFIBill() {}

    public AccountWIFIBill(String user,String pass,Roomnumber roomnumber,String date){
        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.user = user;
        this.pass = pass;
        this.roomnumber = roomnumber;
        Date dates = new Date();
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
