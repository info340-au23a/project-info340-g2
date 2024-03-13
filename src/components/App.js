import { database } from '../index.js';
import { ref, onValue } from 'firebase/database';

import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Pawsibilities from './Pawsibilities';
import Rating from './Rating';
import Footer from './Footer';


function App () {
    const [pawsibilities, setPawsibilities] = useState([]);
    const [studySpaces, setStudySpaces] = useState([]);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        const fetchData = () => {
            const studySpacesRef = ref(database, 'studySpaces');
            onValue(studySpacesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setStudySpaces(Object.values(data));
                }
            }, {
                onlyOnce: true // This ensures the callback is invoked only once
            });
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        const fetchSubmissions = () => {
          const submissionsRef = ref(database, 'comments');
          const unsubscribe = onValue(submissionsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              setReviews(data);
            }
          });
          return unsubscribe; // Return the unsubscribe function
        };
      
        fetchSubmissions();
      
    }, []);
      
      
    const markAsVisited = (spaceId) => {
        const updatedPaws = pawsibilities.map((space, index) => 
            index === spaceId ? { ...space, visited: true } : space
        );

        const filteredPawsibilities = updatedPaws.filter((space, index) => index !== spaceId);
        setPawsibilities(filteredPawsibilities);
    };

    const addToPawsibilities = (space)  => {
        //checks if place exists
        const existingPlace = pawsibilities.find((item) => item.name === space.name);
        if (!existingPlace) {
            setPawsibilities([...pawsibilities, space]);
        } else {
            
        }
    };


    return (
            <div className="App">
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home studySpaces={studySpaces} addToPawsibilities={addToPawsibilities} showButton={true} reviews={reviews} />} />
                        <Route path="/pawsibilities" element={<Pawsibilities pawsibilities={pawsibilities} markAsVisited={markAsVisited} />} />
                        <Route path="/rating" element={<Rating/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
    );
};
    

export default App;