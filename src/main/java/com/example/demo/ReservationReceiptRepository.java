package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationReceiptRepository extends CrudRepository<ReservationReceipt, Long> {
    ReservationReceipt findByBillid(@Param("billid") String billid);
    ReservationReceipt findByName(@Param("name") String name);
    ReservationReceipt findByRoomnumber(@Param("roomnumber") String roomnumber);
    ReservationReceipt findByroomnumberAndName(
            @Param("name") String name,
            @Param("roomnumber") String roomnumber);
            
    ReservationReceipt findByBillidAndName(
            @Param("billid") String billid,
            @Param("name") String name);


}