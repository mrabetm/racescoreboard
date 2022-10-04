package com.example.backend.repository;


import com.example.backend.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer> {
    List<Car> findAll();

    Car findById(int id);

    Car save(Car athlete);

    Car deleteById(int id);
}
