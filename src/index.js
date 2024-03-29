import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDxwMjhfnPZGcQYH7fr4JOY8xM-2jptu1w",
    authDomain: "project-info340-g2.firebaseapp.com",
    projectId: "project-info340-g2",
    storageBucket: "project-info340-g2.appspot.com",
    messagingSenderId: "1060692712600",
    appId: "1:1060692712600:web:d6ad0c9ea0d24a9f6644ed",
    measurementId: "G-5PELZWX7Y0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);

export { database , firebaseConfig};



