import React, { useState } from 'react';

function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  return (
    <div className="search-container">
      <h2>Study Spot Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
