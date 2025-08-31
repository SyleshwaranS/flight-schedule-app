package com.example.airport.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.airport.modal.Airport;
import com.example.airport.repository.AirportRepository;

@RestController
@RequestMapping("/api")
public class AirportController {

    @Autowired
    AirportRepository airportRepository;

    @GetMapping("/airport")
    public ResponseEntity<List<Airport>> getAllFlight(){
        try {
            List<Airport> airports = new ArrayList<Airport>();

			airportRepository.findAll().forEach(airports::add);

            if(airports.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(airports,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/airport/{id}")
	public ResponseEntity<Airport> getStudentById(@PathVariable("id") int serialNo) {
		Optional<Airport> airportData = airportRepository.findById(serialNo);

		if (airportData.isPresent()) {
			return new ResponseEntity<>(airportData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

    @PostMapping("/airport")
	public ResponseEntity<Airport> createAirport(@RequestBody Airport airport) {
		try {
			Airport s1 = new Airport(airport.getFlightNo(), airport.getFlightName(), airport.getArriveFrom(), airport.getDateTime(), airport.getRunwayNo());
			
			Airport _airport = airportRepository.save(s1);

			return new ResponseEntity<>(_airport, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/airport/{id}")
	public ResponseEntity<Airport> updateAirport(@PathVariable("id") int serialNo, @RequestBody Airport airport) {
		Optional<Airport> airportData = airportRepository.findById(serialNo);

		if (airportData.isPresent()) {
			Airport _airport = airportData.get();
			_airport.setFlightNo(airport.getFlightNo());
			_airport.setFlightName(airport.getFlightName());
			_airport.setArriveFrom(airport.getArriveFrom());
			_airport.setDateTime(airport.getDateTime());
			_airport.setRunwayNo(airport.getRunwayNo());
			return new ResponseEntity<>(airportRepository.save(_airport), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
    
	@DeleteMapping("/airport")
	public ResponseEntity<HttpStatus> deleteAllFlights() {
		try {
			airportRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@DeleteMapping("/airport/{id}")
	public ResponseEntity<HttpStatus> deleteFlight(@PathVariable("id") int serialNo) {
		try {
			airportRepository.deleteById(serialNo);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airport/flight_no/{flightNo}")
	public ResponseEntity<List<Airport>> getAllFlightsByFlight_No(@PathVariable("flightNo") int flightNo) {
		try {
			List<Airport> airports = airportRepository.findByFlightNo(flightNo);

			if (airports.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(airports, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airport/flightname")
	public ResponseEntity<List<Airport>> getAllFlightsByFlight_Name(@RequestParam(required = true) String flightName) {
		try {
			List<Airport> airports = new ArrayList<Airport>();

			airportRepository.findByFlightNameContaining(flightName).forEach(airports::add);

			if (airports.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(airports, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airport/runway")
	public ResponseEntity<List<Airport>> getAllFlightsByRunwayNo(@RequestParam(required = true) String runwayNo) {
		try {
			List<Airport> airports = new ArrayList<Airport>();

			airportRepository.findByRunwayNoContaining(runwayNo).forEach(airports::add);

			if (airports.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(airports, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airport/order")
	public ResponseEntity<List<Airport>> getAllFlightByOrder(){
		try{
			List<Airport> airports = new ArrayList<Airport>();

			airportRepository.findAllByOrderByFlightNoAsc().forEach(airports::add);
			if(airports.isEmpty()){
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(airports,HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
