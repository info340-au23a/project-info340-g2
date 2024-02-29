import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <div>
        <h1>Husky Study Scout</h1>
        <p className="subtitle">Scouting study dens, for Huskies by Huskies &#128062;</p>
      </div>
      <div className='navIcons'>
        <Link to="/pawsibilities">
            <div className='pawButton'>
            <FontAwesomeIcon icon={faPaw} className="paw" size="3x" />
            <p id="PawsText">Pawsibilities</p>
          </div>
        </Link>
        <Link to="/rating">
            <div className='rateButton'>
            <FontAwesomeIcon icon={faStar} className="star" size="3x"/>
            <p id="RateText">Rate</p>
            </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
