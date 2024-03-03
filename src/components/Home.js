import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StudySpotCard from './StudySpotCard';
import studySpacesData from '../data/study-spaces-2024.json';

function Home({ studySpaces, addToPawsibilities}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        wifi: false,
        outlets: false,
        noise: false,
    });

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const handleFilterChange = (filter) => {
        setFilters({ ...filters, [filter]: !filters[filter] });
    };

    const filterStudySpots = (studySpots) => {
        return studySpots.filter((spot) => {
            const matchesSearchTerm = spot.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesSearchTerm;
        }).sort((a, b) => {
            if (filters.wifi) {
                const wifiRatingA = parseInt(a.wifi_rating.match(/\d+/)[0]);
                const wifiRatingB = parseInt(b.wifi_rating.match(/\d+/)[0]);
                if (wifiRatingA !== wifiRatingB) {
                    return wifiRatingB - wifiRatingA;
                }
            }

            if (filters.outlets) {
                const outletRatingA = parseInt(a.outlet_spaces.match(/\d+/)[0]);
                const outletRatingB = parseInt(b.outlet_spaces.match(/\d+/)[0]);
                if (outletRatingA !== outletRatingB) {
                    return outletRatingB - outletRatingA;
                }
            }

            if (filters.noise) {
                const noiseRatingA = parseInt(a.noise_rating.match(/\d+/)[0]);
                const noiseRatingB = parseInt(b.noise_rating.match(/\d+/)[0]);
                return noiseRatingB - noiseRatingA;
            }

            return 0; // No sorting required
        });
    };

    const filteredStudySpots = filterStudySpots(studySpacesData);


    return (
        <div className="App">
            <main>
                <SearchBar onSearchChange={handleSearchChange} onFilterChange={handleFilterChange} />
                <div className="main-container">
                    <div className="row">
                        {filteredStudySpots.map((spot, index) => (
                            <StudySpotCard
                                key={index}
                                spot={spot}
                                image={spot.image}
                                name={spot.name}
                                description={spot.description}
                                wifiRating={spot.wifi_rating}
                                outletSpaces={spot.outlet_spaces}
                                noiseRating={spot.noise_rating}
                                addToPawsibilities={addToPawsibilities}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
