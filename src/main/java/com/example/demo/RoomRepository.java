package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RoomRepository extends CrudRepository<Room, String> {
    Room findByNameroom(@Param("nameroom") String nameroom);

}