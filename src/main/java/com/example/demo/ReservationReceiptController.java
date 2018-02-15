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

@Controller
public class ReservationReceiptController {

    @Autowired
    ReservationReceiptRepository reservationReceiptRepository;

     @Autowired
     RoomRepository roomRepository;
     
    @Autowired
    RoomnumberRepository roomnumberRepository;


    @ResponseBody
    @RequestMapping(path = "/billid/{billid}/name/{name}/nameroom/{nameroom}/roomnumber/{roomnumber}/date/{date}/price/{price}", method = RequestMethod.POST)
    public String ReservationReceipt(@PathVariable String billid,@PathVariable String name,@PathVariable String nameroom,@PathVariable String roomnumber,@PathVariable String date,@PathVariable Double price) {
        Room namerooms = this.roomRepository.findByNameroom(nameroom);
       // Roomnumber roomnumbers = this.roomnumberRepository.findByroomnumber(roomnumber);
        ReservationReceipt reservationReceipt = new ReservationReceipt(billid,name,namerooms,roomnumber,date,price,"reser");
        this.reservationReceiptRepository.save(reservationReceipt);
        return "{\"status\":\"ReservationReceipt\"}";
    }
    
}