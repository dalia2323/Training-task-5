import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NavBar from './component/navbar';
import './App.css';
import Countries from './component/countries';
import Favrioute from './component/favrioute';
import SearchBar from './component/search';
import RegionSelector from './component/region-selector'; 
import useDarkMode from './useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleSearch = (searchInput) => {
    const newFilteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCountries(newFilteredCountries);
  };

  // Create a function to handle region filtering
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    if (region === 'favorites') {
      // Filter by favorites
      const favorites = filteredCountries.filter(/* Add your favorite filtering logic */);
      setFilteredCountries(favorites);
    } else if (region === 'all') {
      // Show all countries
      setFilteredCountries(countries);
    } else {
      // Filter by the selected region
      const regionCountries = countries.filter((country) => country.region === region);
      setFilteredCountries(regionCountries);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className={`container-fluid me-lg-5 pt-4 ${darkMode ? 'dark-mode' : ''}`}>
        <section className="ms-lg-5">
          <div className="d-flex justify-content-between filter-section">
            <SearchBar onSearch={handleSearch} />
            <RegionSelector onRegionChange={handleRegionChange} />
          </div>
        </section>
        <section className="ms-lg-5 me-lg-5 d-flex justify-content-between mt-5 card-favorite-section">
          <Favrioute />
          <Countries countries={filteredCountries} />
        </section>
      </main>
    </DndProvider>
  );
}

export default App;
