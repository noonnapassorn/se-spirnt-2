package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class ChangeRoomController {

     @Autowired
     ChangeRoomRepository changeRoomRepository;

     @Autowired
     ReservationReceiptRepository  reservationReceiptRepository;
     
     @Autowired
     RoomRepository roomRepository;

     @ResponseBody
     @RequestMapping(path = "/changeroomid/{changeroomid}/name/{name}", method = RequestMethod.GET)
     public String IsBillId(@PathVariable String changeroomid ,@PathVariable String name ){
            // System.out.println("Helloo");
            ReservationReceipt Changeroomid = this.reservationReceiptRepository.findByBillidAndName(changeroomid,name);
            if(Changeroomid==null)
                return "{\"status\":\"not found\"}"; 
            else{
                if(Changeroomid.getStatus()=="cancel")
                  return  "{\"status\":\"not found\"}";
                else 
                   return  "{\"status\":\"found\"}";
            }
    }


     @ResponseBody
     @RequestMapping(path = "/changeid/{changeid}", method = RequestMethod.GET)
     public ReservationReceipt getChangeData(@PathVariable String changeid ) {
            ReservationReceipt Changeids = this.reservationReceiptRepository.findByBillid(changeid);
            return Changeids;
     }
    @ResponseBody
     @RequestMapping(path = "/nameroom/{nameroom}", method = RequestMethod.GET)
     public Room getNameroom(@PathVariable String nameroom ) {
            Room PriceRoom = this.roomRepository.findByNameroom(nameroom);
            return PriceRoom;
     }
     @ResponseBody
     @RequestMapping(path = "/roomnuber/{roomnumber}", method = RequestMethod.GET)
     public String getRoomnuber(@PathVariable String roomnumber ) {
            ReservationReceipt RoomNum = this.reservationReceiptRepository.findByRoomnumber(roomnumber);
            if(RoomNum==null)
                 return "{\"status\":\"insert\"}"; 
            else return "{\"status\":\"room catch\"}";
               
     }
//                                                    oldroomname/${this.state.nameroom}/oldroomnumber/${this.state.roomnumber}

    //  /name/${this.state.name}/billid/${this.props.state.idBill}/roomname/${this.props.room}/roomnumber/${this.props.roomnumber2}/price/${price2}/changid/${this.getChangRooom()}/date/${today.toString()} oldprice/${this.state.price}
     @ResponseBody
     @RequestMapping(path = "/name/{name}/billid/{billid}/roomname/{roomname}/roomnumber/{roomnumber}/price/{price}/changid/{changid}/date/{date}/oldroomname/{oldroomname}/oldroomnumber/{oldroomnumber}/oldprice/{oldprice}", method = RequestMethod.GET)
     public String ChangeRoom1(             @PathVariable String changid,
                                            @PathVariable String billid,
                                            @PathVariable String oldroomname,
                                            @PathVariable String oldroomnumber,
                                            @PathVariable String name,
                                            @PathVariable String roomname, 
                                            @PathVariable String roomnumber,
                                            @PathVariable String date ,
                                            @PathVariable Double price,
                                            @PathVariable Double oldprice) {
                    //    String billid,String name,String nameroom,String roomnumber,String date,Double price
                    // String changeRoom,String billid,String name,String nameroom,String roomnumber,String date,Double price,String changeid
                         ReservationReceipt billids = this.reservationReceiptRepository.findByBillidAndName(billid,name);
                         Room roomnames = this.roomRepository.findByNameroom(roomname);
                         if(billids==null)
                             return "{\"status\":\"not found\"}";
                         else {
                            //  billids.updateData(changid,name,roomnames,roomnumber,date,price);
                            billids.setStatus("update");
                             ChangeRoom  changeRoom = new ChangeRoom(roomname,roomnumber,billids,name,oldroomname,oldroomnumber,date,price,changid,oldprice);
                             this.changeRoomRepository.save(changeRoom);
                             return "{\"status\":\"updated\"}";
                         } 
                            // String newRoomName,String newRoomNumber,String billid,String name,String oldNameroom,String oldRoomnumber,String date,Double price,String changeid

                                               
     }
}
     
 