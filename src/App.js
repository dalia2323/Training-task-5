import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import CountryDetail from './pages/countryDetail/countryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countryDetail" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
