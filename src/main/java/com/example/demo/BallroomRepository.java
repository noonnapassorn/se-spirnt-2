package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface BallroomRepository extends CrudRepository<Ballroom, String> {
  Ballroom findByBallroomID(
          @Param("ballroomID") String ballroomID
  );

}
