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
public class BillController {

    @Autowired
    BillRepository billRepository;

    @Autowired
    ReservationReceiptRepository  reservationReceiptRepository;

    @ResponseBody
    @RequestMapping(path = "/billid/{billid}/a/{a}/b/{b}/datein/{datein}/dateout/{dateout}", method = RequestMethod.GET)
    public String bill(@PathVariable String billid,
                                     @PathVariable String a,
                                     @PathVariable String b,
                                     @PathVariable String datein,
                                     @PathVariable String dateout){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        Date enddate = new Date();
        try {
            date = formatter.parse(datein);
            enddate = formatter.parse(dateout);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ReservationReceipt reservationReceipt = this.reservationReceiptRepository.findByBillid(a);
        Bill bills = new Bill(billid,reservationReceipt,b,date,enddate);
        this.billRepository.save(bills);
        return "{\"status\":\"bill\"}";
    }
}