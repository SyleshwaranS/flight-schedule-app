import React, { useState } from 'react';

export default function DeleteFlight() {
  const [serialNo, setSerialNo] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/airport/${serialNo}`, { method: 'DELETE' })
      .then(res => {
        if (res.status === 204) setMessage('Flight deleted successfully.');
        else if (res.status === 404) setMessage('Flight not found.');
        else setMessage('Failed to delete flight.');
      })
      .catch(() => setMessage('Error deleting flight.'));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Delete Flight</h2>
      <form onSubmit={handleDelete}>
        <input value={serialNo} onChange={e => setSerialNo(e.target.value)} placeholder="Serial No" required type="number" /><br /><br />
        <button type="submit">Delete Flight</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
