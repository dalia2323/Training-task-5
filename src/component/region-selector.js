import React, { useState } from 'react';

function RegionSelector(props) {
  const [selectedRegion, setSelectedRegion] = useState(''); // State for selected region

  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);
    props.onRegionChange(newRegion);
  };
  return (
    <select
      className="region-selector form-select shadow-sm border-0 category w-auto me-5 me-2"
      value={selectedRegion}
      onChange={handleRegionChange}
    >
      <option hidden>Filter by</option>
      <option value="favorites">Favorites</option>
      <option value="all">No Filter</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default RegionSelector;
