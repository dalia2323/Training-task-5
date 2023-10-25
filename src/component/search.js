import React, { useState } from 'react';

function SearchBar(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    props.onSearch(newValue);
  };
  return (
    <div>
      <div className="input-group shadow-sm w-30">
        <span className="input-group-text border-0 search-icon">
          <i className="fa-solid fa-magnifying-glass ps-2" style={{ color: '#858585' }}></i>
        </span>
        <input
          value={value}
          onChange={handleChange}
          className="form-control rounded search border-0 rounded-1 fs"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
