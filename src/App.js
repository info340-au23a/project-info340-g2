import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Pawsibilities from './Pawsibilities';
import Rating from './Rating';
import Footer from './Footer';

const App = () => {
    return (
            <div className="App">
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/pawsibilities" element={<Pawsibilities />} />
                        <Route path="/rating" element={<Rating/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
    );
};

export default App;