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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Controller
public class MakePaymentController {

    @Autowired
    PaymentSlipRepository paymentSlipRepository;
    @Autowired
    ReservationReceiptRepository reservationReceiptRepository;




    @ResponseBody
    @RequestMapping(path = "/name/{name}/idBill/{idBill}/bank/{bank}/time/{time}/date/{date}", method = RequestMethod.GET)

    public String paymentSlip(@PathVariable String name, @PathVariable String idBill , @PathVariable String bank,@PathVariable String time,@PathVariable String date) {

     ReservationReceipt billid = this.reservationReceiptRepository.findByBillid(idBill);
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    Date d = new Date();
    try {
        d = formatter.parse(date);
    } catch (ParseException e) {
        e.printStackTrace();
    }
           PaymentSlip payment = new PaymentSlip(billid,name,bank,time,d);
           this.paymentSlipRepository.save(payment);

           return "{\"status\":\"save\"}";


    }
}
