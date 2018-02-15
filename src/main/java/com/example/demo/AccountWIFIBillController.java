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
public class AccountWIFIBillController {

    @Autowired
    AccountWIFIBillRepository accountWIFIBillRepository;

    @Autowired
    RoomnumberRepository roomnumberRepository;


    @ResponseBody
    @RequestMapping(path = "/user/{user}/pass/{pass}/roomnumber/{roomnumber}/date/{date}", method = RequestMethod.GET)
    public String accountWIFIBill(@PathVariable String user,
                                  @PathVariable String pass,
                                  @PathVariable String roomnumber,
                                  @PathVariable String date) {

        Roomnumber roomnum = this.roomnumberRepository.findByroomnumber(roomnumber);
        AccountWIFIBill accountWIFIBill = new AccountWIFIBill(user,pass,roomnum,date);
        this.accountWIFIBillRepository.save(accountWIFIBill);
        return "{\"status\":\"AccountWIFIBill\"}";
    }
}
