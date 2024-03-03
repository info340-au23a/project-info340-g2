import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Pawsibilities from './Pawsibilities';
import Rating from './Rating';
import Home from './Home';

function Navbar() {
  return (
    <nav>
      <div>
        <h1>Husky Study Scout</h1>
        <p className="subtitle">Scouting study dens, for Huskies by Huskies &#128062;</p>
      </div>
      <div className='navIcons'>
        <Link to="/home" element={<Home />}>
            <div className='homeButton'>
              <FontAwesomeIcon icon={faHome} className="home" size="3x" title="Home"/>
              <p id="HomeText">Home</p>
            </div>
        </Link>
        <Link to="/pawsibilities" element={<Pawsibilities />}>
            <div className='pawButton'>
              <FontAwesomeIcon icon={faPaw} className="paw" size="3x" title="Pawsibilities"/>
              <p id="PawsText">Pawsibilities</p>
            </div>
        </Link>
        <Link to="/rating" element={<Rating />}>
            <div className='rateButton'>
              <FontAwesomeIcon icon={faStar} className="star" size="3x" title="Rate"/>
              <p id="RateText">Rate</p>
            </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
