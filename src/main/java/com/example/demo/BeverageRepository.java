package com.example.demo;
import org.springframework.data.repository.query.Param;

import org.springframework.data.repository.CrudRepository;

public interface BeverageRepository extends CrudRepository<Beverage, String> {
    Beverage findByBeverageId(@Param("beverageId") String beverageId);
  
}
