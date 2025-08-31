package com.example.airport.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.airport.modal.Airport;

public interface  AirportRepository extends JpaRepository<Airport, Integer> {
    List<Airport> findByFlightNo(int flightNo);
    List<Airport> findByFlightNameContaining(String flightName);
    List<Airport> findByRunwayNoContaining(String runwayNo);
    List<Airport> findAllByOrderByFlightNoAsc();
}
