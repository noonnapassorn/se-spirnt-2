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
public class OrderController {

    
    @Autowired
    BillOderRepository billOderRepository;
    @Autowired
    ReservationReceiptRepository reservationReceiptRepository;
    @Autowired
    RoomnumberRepository roomnumberRepository;
    @Autowired
    CustomersRepository customersRepository;
    @Autowired
    FoodRepository foodRepository;
    @Autowired
    BeverageRepository beverageRepository;

    @ResponseBody
    @RequestMapping(path = "/name/{n}/roomnumber/{rn}",method = RequestMethod.GET)
    public String billOrder(@PathVariable String n,
                            @PathVariable String rn

                             ){

         ReservationReceipt roomnum = this.reservationReceiptRepository.findByroomnumberAndName(rn,n);
         
        if(roomnum!=null){ 
            return "{\"status\":\"found\"}";
        }else{         
             return "{\"status\":\"not found\"}";
        }
    }


     @ResponseBody
     @RequestMapping(path = "/roomnumber/{rn}", method = RequestMethod.GET)
     public ReservationReceipt BillOrder(@PathVariable String rn ) {
            ReservationReceipt Roomnum = this.reservationReceiptRepository.findByRoomnumber(rn);
            return Roomnum;
     }

  
    @ResponseBody
    @RequestMapping(path = "/billid/{bid}/name/{n}/roomnumber/{rn}/food/{foodId}/drink/{b}/date/{date}/price/{tol}",method = RequestMethod.GET)
    public String billOrder(@PathVariable String bid,
                            @PathVariable String n,
                            @PathVariable String rn,
                            @PathVariable String foodId,
                            @PathVariable String b,
                            @PathVariable String date,
                            @PathVariable Double tol
             
                            ){
             Roomnumber numroom = this.roomnumberRepository.findByroomnumber(rn);
             Food foodid = this.foodRepository.findByFoodId(foodId);
             Beverage beverage = this.beverageRepository.findByBeverageId(b);
             BillOrder order = new BillOrder(bid,n,numroom,foodid,beverage,date,tol);
             this.billOderRepository.save(order);
             return "{\"status\":\"save\"}";  
    }
  
}

