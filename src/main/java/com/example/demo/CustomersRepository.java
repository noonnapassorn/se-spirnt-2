package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomersRepository extends CrudRepository<Customers, String> {
    Customers findByname(@Param("name") String name);

}


