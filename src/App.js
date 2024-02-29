import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import StudySpotCard from './StudySpotCard';
import Footer from './Footer';
import studySpacesData from './data/study-spaces-2024.json';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
  
    // Filter the study spots based on the search term
    const filteredStudySpots = studySpacesData.filter(spot =>
      spot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Handle search input change
    const handleSearchChange = (value) => {
      setSearchTerm(value);
    };
  
    return (
        <div className="App">
          <NavBar />
          <main>
            <SearchBar onSearchChange={handleSearchChange} />
            <div className="main-container">
              <div className="row">
                {filteredStudySpots.map((spot, index) => (
                  <StudySpotCard
                    key={index}
                    spot={spot}
                    name={spot.name}
                    description={spot.description}
                    wifiRating={spot.wifi_rating}
                    outletSpaces={spot.outlet_spaces}
                    noiseRating={spot.noise_rating}
                  />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
}

export default App;
