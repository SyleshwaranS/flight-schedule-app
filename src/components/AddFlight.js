import React, { useState } from 'react';

export default function AddFlight() {
  const [flightNo, setFlightNo] = useState('');
  const [flightName, setFlightName] = useState('');
  const [arriveFrom, setArriveFrom] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [runwayNo, setRunwayNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const flight = { flightNo: Number(flightNo), flightName, arriveFrom, dateTime, runwayNo };

    fetch('http://localhost:8080/api/airport', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flight),
    })
      .then(res => res.ok ? setMessage('Flight added successfully!') : setMessage('Failed to add flight.'))
      .catch(() => setMessage('Error adding flight.'));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Flight</h2>
      <form onSubmit={handleSubmit}>
        <input value={flightNo} onChange={e => setFlightNo(e.target.value)} placeholder="Flight No" required type="number" /><br /><br />
        <input value={flightName} onChange={e => setFlightName(e.target.value)} placeholder="Flight Name" required /><br /><br />
        <input value={arriveFrom} onChange={e => setArriveFrom(e.target.value)} placeholder="Arrive From" required /><br /><br />
        <input value={dateTime} onChange={e => setDateTime(e.target.value)} placeholder="Date Time (yyyy-mm-ddThh:mm:ss)" required /><br /><br />
        <input value={runwayNo} onChange={e => setRunwayNo(e.target.value)} placeholder="Runway No" required /><br /><br />
        <button type="submit">Add Flight</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
