import React, { useState } from 'react';

export default function UpdateFlight() {
  const [serialNo, setSerialNo] = useState('');
  const [flightNo, setFlightNo] = useState('');
  const [flightName, setFlightName] = useState('');
  const [arriveFrom, setArriveFrom] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [runwayNo, setRunwayNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const flight = { flightNo: Number(flightNo), flightName, arriveFrom, dateTime, runwayNo };

    fetch(`http://localhost:8080/api/airport/${serialNo}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flight),
    })
      .then(res => {
        if (res.ok) setMessage("Flight updated successfully!");
        else if (res.status === 404) setMessage("Flight not found!");
        else setMessage("Failed to update flight.");
      })
      .catch(() => setMessage("Error updating flight."));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Flight</h2>
      <form onSubmit={handleSubmit}>
        <input value={serialNo} onChange={e => setSerialNo(e.target.value)} placeholder="Serial No" required type="number"/><br /><br />
        <input value={flightNo} onChange={e => setFlightNo(e.target.value)} placeholder="Flight No" type="number" /><br /><br />
        <input value={flightName} onChange={e => setFlightName(e.target.value)} placeholder="Flight Name" /><br /><br />
        <input value={arriveFrom} onChange={e => setArriveFrom(e.target.value)} placeholder="Arrive From" /><br /><br />
        <input value={dateTime} onChange={e => setDateTime(e.target.value)} placeholder="Date Time" /><br /><br />
        <input value={runwayNo} onChange={e => setRunwayNo(e.target.value)} placeholder="Runway No" /><br /><br />
        <button type="submit">Update Flight</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
