import React, { useEffect, useState } from 'react';
import SearchBar from './search';
import RegionSelector from './select';
import Countries from './countries';
import Favrioute from './favrioute';
import debounce from 'lodash/debounce';
function CountriesContainer() {
    const [countries, setCountries] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('all');
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                    setCountries(data);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetchData(url);
    }, []);

    const regionOptions = ["Filter by", "No Filter", "Africa", "Americas", "Asia", "Europe", "Oceania"];

    const filteredCountries = countries.filter((country) => {
        const matchesRegion =
            selectedRegion === 'all' || selectedRegion === 'No Filter' || country.region === selectedRegion;

        return  matchesRegion;
    });
    const debouncedHandleSearch = debounce((searchInput) => {
        setSearchInput(searchInput);
        if (searchInput.trim() === '') {
            const url = 'https://restcountries.com/v3.1/all';
            fetchData(url);
        } else {
            const apiUrl = `https://restcountries.com/v3.1/name/${searchInput}`;
            fetchData(apiUrl);
        }
    }, 500); 
    const handleSearch = (searchInput) => {
        debouncedHandleSearch(searchInput);
    };
    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };
    return (
        <div>
            <section className="ms-lg-5">
                <div className="d-flex justify-content-between filter-section">
                    <SearchBar onSearch={handleSearch} />
                    <div>
                        <RegionSelector options={regionOptions} onRegionChange={handleRegionChange} selectedRegion={selectedRegion} />
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
        </div>
    );
}
export default CountriesContainer;
