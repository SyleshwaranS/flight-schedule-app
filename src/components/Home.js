import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <center><h1>Airport Flight Management</h1></center>
      <button onClick={() => navigate('/retrieve')} style={{ margin: 10 }}>
        Retrieve Flights
      </button>
      <button onClick={() => navigate('/add')} style={{ margin: 10 }}>
        Add Flight
      </button>
      <button onClick={() => navigate('/update')} style={{ margin: 10 }}>
        Update Flight
      </button>
      <button onClick={() => navigate('/delete')} style={{ margin: 10 }}>
        Delete Flight
      </button>
      <button onClick={() => navigate('/filters')} style={{ margin: 10 }}>
        Flight Filters
      </button>
    </div>
  );
}
