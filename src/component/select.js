import React from 'react';
function RegionSelector({ options, onRegionChange, selectedRegion }) {
  return (
    <select
      className="region-selector form-select shadow-sm border-0 category w-auto me-5 me-2"
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
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