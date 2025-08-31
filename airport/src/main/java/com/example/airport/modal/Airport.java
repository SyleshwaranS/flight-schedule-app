package com.example.airport.modal;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Flight")
public class Airport {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int serialNo;

    @Column(name="Flight_No")
    private int flightNo;

    @Column(name="Flight_Name")
    private String flightName;

    @Column (name="Arrive_From")
    private String arriveFrom;

    @Column (name="Date_Time")
    private LocalDateTime dateTime;

    @Column (name="Runway_No")
    private String runwayNo;

    public Airport(){

    }


    public Airport(int flightNo,String flightName,String arriveFrom,LocalDateTime dateTime,String runwayNo){
        this.flightNo=flightNo;
        this.flightName = flightName;
        this.arriveFrom = arriveFrom;
        this.dateTime = dateTime;
        this.runwayNo = runwayNo;
    }
    public int getSerialNo() {
        return serialNo;
    }

    public int getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(int flightNo) {
        this.flightNo = flightNo;
    }

    public String getFlightName() {
        return flightName;
    }

    public void setFlightName(String flightName) {
        this.flightName = flightName;
    }

    public String getArriveFrom() {
        return arriveFrom;
    }

    public void setArriveFrom(String arriveFrom) {
        this.arriveFrom = arriveFrom;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getRunwayNo() {
        return runwayNo;
    }

    public void setRunwayNo(String runwayNo) {
        this.runwayNo = runwayNo;
    }
}
