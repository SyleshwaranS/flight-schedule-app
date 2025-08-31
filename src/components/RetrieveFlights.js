import React, { useEffect, useState } from 'react';

export default function RetrieveFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/airport')
      .then(res => res.json())
      .then(data => {
        setFlights(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading flights...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Flights List</h2>
      {flights.length === 0 ? (
        <p>No flights found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
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
            {flights.map(flight => (
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
