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
public class ReceiptCleaningController {

    @Autowired
    ReceiptCleaningRepository receiptCleaningRepository;
    @Autowired
    RoomnumberRepository roomnumberRepository;

    @ResponseBody
    @RequestMapping(path = "/roomnumber/{roomnumber}/fname/{fname}/lname/{lname}/telnum/{telnum}/location/{location}/note/{note}/date/{date}", method = RequestMethod.GET)
    public String receiptCleanings(@PathVariable String roomnumber,@PathVariable String fname,@PathVariable String lname,@PathVariable String telnum,@PathVariable String location,@PathVariable String note,@PathVariable String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d = new Date();
        try {
            d = formatter.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Roomnumber numroom = this.roomnumberRepository.findByroomnumber(roomnumber);
        ReceiptCleaning receiptCleaning = new ReceiptCleaning(numroom,fname,lname,telnum,location,note,d);
        this.receiptCleaningRepository.save(receiptCleaning);
        return "{\"status\":\"save\"}";
        
    }

}