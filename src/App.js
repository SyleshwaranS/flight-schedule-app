import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import RetrieveFlights from './components/RetrieveFlights';
import AddFlight from './components/AddFlight';
import UpdateFlight from './components/UpdateFlight';
import DeleteFlight from './components/DeleteFlight';
import FlightFilters from './components/FlightFilters';
import './styles/App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/retrieve" element={<RetrieveFlights />} />
        <Route path="/add" element={<AddFlight />} />
        <Route path="/update" element={<UpdateFlight />} />
        <Route path="/delete" element={<DeleteFlight />} />
        <Route path="/filters" element={<FlightFilters />} />
      </Routes>
    </Router>
  );
}

export default App;
