import React, { useState } from 'react';

function RegionSelector(props) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);
    props.onRegionChange(newRegion);
  };

  const options = props.options || []; 
  return (
    <select
      className="region-selector form-select shadow-sm border-0 category w-auto me-5 me-2"
      value={selectedRegion}
      onChange={handleRegionChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default RegionSelector;
