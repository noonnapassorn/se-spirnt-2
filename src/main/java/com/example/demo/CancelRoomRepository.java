package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface CancelRoomRepository extends CrudRepository<CancelRoom, Long> {
	CancelRoom findByCancelbill(
	    @Param("cancelbill") String cancelbill
    );
}