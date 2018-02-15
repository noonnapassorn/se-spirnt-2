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
public class MaintenanceBillController {

    @Autowired
    MaintenanceBillRepository maintenanceBillRepository;

    @ResponseBody
    @RequestMapping(path = "/name/{name}/cal/{cal}/roomnumber/{roomnumber}/listname/{listname}/data/{data}/date/{date}", method = RequestMethod.GET)
    public String MaintenanceBill(@PathVariable String name,@PathVariable String cal,@PathVariable String roomnumber,@PathVariable String listname,@PathVariable String data,@PathVariable String date) {
        MaintenanceBill maintenanceBill = new MaintenanceBill(name,cal,roomnumber,listname,data,date);
        this.maintenanceBillRepository.save(maintenanceBill);
        return "{\"status\":\"MaintenanceBill\"}";
    }

}
