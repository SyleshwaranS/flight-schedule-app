import React, { useState } from 'react';

export default function FlightFilters() {
  const [flightNo, setFlightNo] = useState('');
  const [flightName, setFlightName] = useState('');
  const [runwayNo, setRunwayNo] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const searchByFlightNo = () => {
    fetch(`http://localhost:8080/api/airport/flight_no/${flightNo}`)
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(() => setMessage('Failed to fetch flights by Flight No'));
  };

  const searchByFlightName = () => {
    fetch(`http://localhost:8080/api/airport/flightname?flightName=${flightName}`)
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(() => setMessage('Failed to fetch flights by Flight Name'));
  };

  const searchByRunwayNo = () => {
    fetch(`http://localhost:8080/api/airport/runway?runwayNo=${runwayNo}`)
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(() => setMessage('Failed to fetch flights by Runway No'));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Flights</h2>

      <div>
        <input value={flightNo} onChange={e => setFlightNo(e.target.value)} placeholder="Flight No" type="number" />
        <button onClick={searchByFlightNo}>Search by Flight No</button>
      </div>

      <div>
        <input value={flightName} onChange={e => setFlightName(e.target.value)} placeholder="Flight Name" />
        <button onClick={searchByFlightName}>Search by Flight Name</button>
      </div>

      <div>
        <input value={runwayNo} onChange={e => setRunwayNo(e.target.value)} placeholder="Runway No" />
        <button onClick={searchByRunwayNo}>Search by Runway No</button>
      </div>

      <p>{message}</p>

      {results.length > 0 && (
        <table border="1" cellPadding="10" style={{ marginTop: 20, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Flight No</th>
              <th>Flight Name</th>
              <th>Arrive From</th>
              <th>Date Time</th>
              <th>Runway No</th>
            </tr>
          </thead>
          <tbody>
            {results.map(flight => (
              <tr key={flight.serialNo}>
                <td>{flight.serialNo}</td>
                <td>{flight.flightNo}</td>
                <td>{flight.flightName}</td>
                <td>{flight.arriveFrom}</td>
                <td>{flight.dateTime}</td>
                <td>{flight.runwayNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
