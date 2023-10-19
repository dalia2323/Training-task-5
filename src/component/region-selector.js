import React from 'react';

function RegionSelector(props) {
  return (

    <select className="region-selector form-select shadow-sm border-0 category w-auto me-5 me-2" >
      <option hidden>Filter by Region</option>
      <option>Favorites</option>
      <option>no filter</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  );
}

export default RegionSelector;
