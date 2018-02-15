package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.Calendar;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.text.SimpleDateFormat;
import java.text.ParseException;

@Controller
public class MakeBallRoom {

    @Autowired
    CustomersRepository customersRepository;
    @Autowired
    BallroombillRepository ballroombillRepository;
    @Autowired
    BallroomRepository ballroomRepository;




    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}/address/{ad}/email/{em}/phone/{phone}/job/{job}/amount/{amount}/startdate/{sDate}/enddate/{eDate}/billid/{billid}/typeRoom/{type}", method = RequestMethod.GET)
    public String customers(@PathVariable String firstname,
                            @PathVariable String ad,
                            @PathVariable String em,
                            @PathVariable String phone,
                            @PathVariable String job,
                            @PathVariable Long amount,
                            @PathVariable String sDate,
                            @PathVariable String eDate,
                            @PathVariable String billid,
                            @PathVariable String type
                            ) {

        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        Date enddate = new Date();
        try {
            date = formatter.parse(sDate);
            enddate = formatter.parse(eDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Ballroom ballroom = this.ballroomRepository.findOne(type);
        Customers customer = new Customers(firstname,ad,em,phone);
        this.customersRepository.save(customer);
        Customers name = this.customersRepository.findByname(firstname);
        Ballroombill ballroombill = new Ballroombill(billid,date,enddate,job,amount,ballroom,name);
        this.ballroombillRepository.save(ballroombill);

        return sDate;
    }


}
