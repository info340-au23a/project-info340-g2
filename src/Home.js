import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import StudySpotCard from './StudySpotCard';
import Footer from './Footer';
import studySpacesData from './data/study-spaces-2024.json';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredStudySpots = studySpacesData.filter(spot =>
      spot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleSearchChange = (value) => {
      setSearchTerm(value);
    };
  
    return (
            <div className="App">
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
            </div>
    );
}

export default Home;
