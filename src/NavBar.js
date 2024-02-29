import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Husky Study Scout</h1>
      <p>Scouting study dens, for Huskies by Huskies &#128062;</p>
      <Link to="/pawsibilities">
        <p id="PawsText">Pawsibilities</p>
        <img className="paw" src="img/huskyPaw.png" width="60" height="60" alt="Paw Icon" />
      </Link>
      <Link to="/rating">
        <p id="RateText">Rate</p>
        <img className="rate" src="img/ratingIcon.png" width="60" height="60" alt="Rating Icon" />
      </Link>
    </nav>
  );
}

export default Navbar;