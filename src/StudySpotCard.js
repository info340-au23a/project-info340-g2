import React from 'react';

function StudySpotCard({ spot }) {
  return (
    <div className="card">
      {/* <div className="image">
        <img src={spot.image} alt={spot.name} />
      </div> */}
      <div className="description">
        <h2>{spot.name}</h2>
        <p>{spot.description}</p>
        <h3>Wifi Rating</h3>
        <p>{spot.wifi_rating}</p>
        <h3>Outlet Spaces</h3>
        <p>{spot.outlet_spaces}</p>
        <h3>Noise Rating</h3>
        <p>{spot.noise_rating}</p>
      </div>
    </div>
  );
}

export default StudySpotCard;
