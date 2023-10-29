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
  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all'); 

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const regionOptions = ["Filter by", "No Filter", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchInput.toLowerCase());
    const matchesRegion = selectedRegion === 'all'|| selectedRegion ==='No Filter'  || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  const handleSearch = (searchInput) => {
    if (searchInput.trim() === '') {
      const url = 'https://restcountries.com/v3.1/all';
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (Array.isArray(data)) {
            setCountries(data);
          } else {
            console.error('API response is not an array.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      const apiUrl = `https://restcountries.com/v3.1/name/${searchInput}`;
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
          if (Array.isArray(data)) {
            setCountries(data);
          } else {
            console.error('API response is not an array.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <header>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className={`container-fluid me-lg-5 pt-4 ${darkMode ? 'dark-mode' : ''}`}>
        <section className="ms-lg-5">
          <div className="d-flex justify-content-between filter-section">
            <SearchBar onSearch={handleSearch} />
            <div>
            <RegionSelector options={regionOptions} onRegionChange={handleRegionChange} />
          </div>        
            </div>
        </section>
        <section className="ms-lg-5 me-lg-5 d-flex mt-5 card-favorite-section">
          <Favrioute />
          {filteredCountries.length === 0 ? (
            <h1 className='no-result'>No results found</h1>
          ) : (
            <Countries countries={filteredCountries} />
          )}
        </section>
      </main>
    </DndProvider>
  );
}

export default App;
