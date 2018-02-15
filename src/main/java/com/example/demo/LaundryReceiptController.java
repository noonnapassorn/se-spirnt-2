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

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Controller
public class LaundryReceiptController {

    @Autowired
    LaundryReceiptRepository laundryReceiptRepository;
     @Autowired
    RoomnumberRepository roomnumberRepository;


    @ResponseBody
    @RequestMapping(path = "/roomnumber/{roomnumber}/name/{name}/telnum/{telnum}/service/{service}/date/{date}", method = RequestMethod.GET)
    public String laundryReceipt(@PathVariable String roomnumber,@PathVariable String name,@PathVariable String telnum,@PathVariable String service,@PathVariable String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d = new Date();
        try {
            d = formatter.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Roomnumber numroom = this.roomnumberRepository.findByroomnumber(roomnumber);
        LaundryReceipt laundryReceipt = new LaundryReceipt(numroom,name,telnum,service,d);
        this.laundryReceiptRepository.save(laundryReceipt);
        return "{\"status\":\"save\"}";
        
    }

}