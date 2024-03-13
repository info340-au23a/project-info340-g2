import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Pawsibilities from './Pawsibilities';
import Rating from './Rating';
import Footer from './Footer';

import { app, database } from './index.js';
import { ref, onValue, push, runTransaction } from 'firebase/database';
import Review from './Review';

const db = database;
const reviewsRef = ref(db, 'reviews');

function App () {
    const [pawsibilities, setPawsibilities] = useState([]);
    const [studySpaces, setStudySpaces] = useState([]);

    const [reviews, setReviews] = useState({});
    const [reviewContent, setReviewContent] = useState('');
    const [reviewComment, setReviewComment] = useState('');
    const [spaceName, setSpaceName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await database.ref('studySpaces').once('value');
            const data = snapshot.val();
            if (data) {
                setStudySpaces(Object.values(data));
            }
        };

        fetchData();
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


    // firebase database code strongly referenced from day 19 of lecture
    reviewsRef.on('value', (snapshot) => {
        let reviews = snapshot.val();
        this.setState({reviews: reviews});
    });

    const pushReview = () => {
        const review = {
            timestamp: db.serverValue.TIMESTAMP,
            studySpace: spaceName, // name of study space
            content: reviewContent, // ratings for study space
            comment: reviewComment, // comment supplied by user
            likes: 0
        };

        push(reviewsRef, review)
            .then(() => setReviewContent(''))
            .catch((d) => console.log("error ", d));
    }

    const updateLikes = (reviewId) => {
        let likesRef = ref(db, `reviews/${reviewId}/likes`);
        console.log("the likes reference is:" + likesRef);
        
        runTransaction(likesRef, (currentLikes) => {
          // If there are no current likes, set it to 1; otherwise, increment by 1
          return (currentLikes + 1);
        }).catch((error) => {
          console.log('Error updating likes: ', error);
        });
    };



    const sortedKeys = Object.keys(reviews).sort((a, b) => {
        return reviews[b].timestamp - reviews[a].timestamp;
    });


    return (
            <div className="App">
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home studySpaces={studySpaces} addToPawsibilities={addToPawsibilities} showButton={true}/>}/>
                        <Route path="/pawsibilities" element={<Pawsibilities pawsibilities={pawsibilities} markAsVisited={markAsVisited} />} />
                        <Route path="/rating" element={<Rating/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
    );
};
    

export default App;