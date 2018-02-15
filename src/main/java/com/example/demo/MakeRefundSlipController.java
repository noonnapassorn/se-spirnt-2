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
import java.text.ParseException;
import java.text.SimpleDateFormat;

@Controller
public class MakeRefundSlipController {

    @Autowired
    RefundSlipRepository refundSlipRepository;
    @Autowired
    CancelRoomRepository cancelRoomRepository;

    @ResponseBody
    @RequestMapping(path = "/n/{n}/cancelbill/{cancelbill}/bankaccountnum/{bankaccountnum}/bankcheck/{bankcheck}", method = RequestMethod.GET)
    public String refundSlip(@PathVariable String n,@PathVariable String cancelbill,@PathVariable String bankaccountnum,@PathVariable String bankcheck) {
      CancelRoom c1 = this.cancelRoomRepository.findByCancelbill(cancelbill);
        RefundSlip refundSlip = new RefundSlip(n,c1,bankaccountnum,bankcheck);
        this.refundSlipRepository.save(refundSlip);
        return "{\"status\":\"save\"}";
    }
}
