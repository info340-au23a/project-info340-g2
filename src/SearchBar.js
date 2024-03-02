import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  return (
    <div className="search-container">
      <h2>Study Spot Search</h2>
      <div className ="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} size="2x"/>
      </button>
      </div>
    </div>
  );
}

export default SearchBar;
