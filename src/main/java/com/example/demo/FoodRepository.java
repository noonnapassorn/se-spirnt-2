package com.example.demo;
import org.springframework.data.repository.query.Param;

import org.springframework.data.repository.CrudRepository;

public interface FoodRepository extends CrudRepository<Food, String> {
    Food findByFoodId(@Param("foodId") String foodId);
  
}
