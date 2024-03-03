import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearchChange, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    wifi: false,
    outlets: false,
    noise: false,
  });

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
    onFilterChange(filter);
  };

  return (
    <div className="search-container">
      <h2>Study Spot Search</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </button>
      </div>
      <div className="filter-container">
        <h3>Filter:</h3>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={filters.wifi}
              onChange={() => handleFilterChange('wifi')}
            />
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.outlets}
              onChange={() => handleFilterChange('outlets')}
            />
            Outlets
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.noise}
              onChange={() => handleFilterChange('noise')}
            />
            Noise
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
