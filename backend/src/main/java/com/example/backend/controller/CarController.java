package com.example.backend.controller;


import com.example.backend.models.Car;
import com.example.backend.repository.CarRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/car")
public class CarController {

    private final CarRepository carRepository;

    @Autowired
    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping
    public @ResponseBody Iterable<Car> getAll(){
        return carRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Car getCar(@PathVariable int id){
        return carRepository.findById(id);
    }
    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        Car toBeInsertedCar = carRepository.save(car);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(toBeInsertedCar.getId()).toUri();

        return ResponseEntity.created(location).build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Car> deleteCar(@PathVariable int id){
        Car toBeDeletedCar = carRepository.deleteById(id);

        return ResponseEntity.ok(toBeDeletedCar);
    }
}
