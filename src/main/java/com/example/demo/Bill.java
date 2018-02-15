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

import javax.annotation.Generated;
import javax.persistence.*;
import javax.persistence.Id;

@Data
@Entity
public class Bill {
    private @Id @GeneratedValue Long id;

    @Pattern(regexp = "RC\\d{2}[a-z]") 
    @Size(min=1, max=5) 
    private String billid;

    @OneToOne
    private ReservationReceipt billorder;

    @NotNull
    @Size(min=1, max=50) 
    private String name;

    
    private Date DateIn;
    private Date DateOut;


    private Bill() {}
    public Bill(String billid,ReservationReceipt billorder,String name,Date DateIn,Date DateOut){
        this.billid = billid;
        this.billorder = billorder;
        this.name = name;
        this.DateIn = DateIn;
        this.DateOut = DateOut;
    }
}
