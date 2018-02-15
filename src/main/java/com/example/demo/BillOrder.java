package com.example.demo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.*;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import javax.persistence.OneToOne;
import javax.persistence.ManyToOne;
import javax.print.DocFlavor.STRING;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.*;
import javax.persistence.Id;

//import java.util.regex.Pattern;

@Data
@Entity
public class BillOrder {

    
    private  @Id @GeneratedValue Long id;

    @NotNull
    @Pattern(regexp = "OR\\d{2}[a-z]") 
    private String billId;

    //@OneToOne
    @NotNull
    @Size(min=1, max=50)
    private String name;
   

    @OneToOne
    
    //@Pattern(regexp = "[ASGP]\\d{2}")
    private Roomnumber roomnumber;

    @ManyToOne
    private Food food;

    @ManyToOne
    private Beverage beverage;

    private Date date = new Date();
    private Double price;

    private BillOrder() {}
    
    public BillOrder(String billId,String name,Roomnumber roomnumber,Food food,Beverage beverage,String date,Double price){
        SimpleDateFormat df = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        this.billId = billId;
        this.name = name;
        this.roomnumber = roomnumber;
        this.food = food;
        this.beverage = beverage;
        Date dates = new Date();
        this.price = price;
        String test = df.format(this.date);

        try {
            this.date = df.parse(test);
        } catch (ParseException e) {
            e.printStackTrace();
        }
 
    }
}
