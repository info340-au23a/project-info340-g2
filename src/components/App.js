import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Pawsibilities from './Pawsibilities';
import Rating from './Rating';
import Footer from './Footer';

const App = () => {
    const [pawsibilities, setPawsibilities] = useState([]);

    const addToPawsibilities = (space) => {
        setPawsibilities([...pawsibilities, space]);
    };
    //array with visited study spots
    const markAsVisited = (spaceIndex) => {
        const updatedPaws = pawsibilities.map((space, index) => 
            index == spaceIndex ? {...space, visited: true } : space
        );
        setPawsibilities(updatedPaws)
    }; 
    return (
            <div className="App">
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />}/>
                        <Route path="/pawsibilities" element={<Pawsibilities pawsibilities={pawsibilities} markAsVisited={markAsVisited} />} />
                        <Route path="/rating" element={<Rating/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
    );
};

export default App;