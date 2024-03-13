import React, {useState} from 'react';
import StudySpotCard from './StudySpotCard';
import { Link } from 'react-router-dom';
import '../popup.css';

function Pawsibilities({pawsibilities, markAsVisited}) { 
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSpotIndex, setSelectedSpotIndex] = useState(null);

 const handleMarkAsVisited = (index) => {
    markAsVisited(index);
    setSelectedSpotIndex(index);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRatePopup = () => {
    setShowPopup(false);
  };

  return(
    <main>
      <table>
        <tbody>
          {pawsibilities.map((space, index) => (
            <tr key={index}>
              <td>
                <StudySpotCard
                  spot={space}
                  markAsVisited={() => handleMarkAsVisited(index)}
                  showButton={false}
                  />
                 <button className="button" style={{ color: '#51289e' }} onClick={() => handleMarkAsVisited(index)}>Mark as Visited &#10024;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Do you want to rate this location?</h2>
            <Link to="/rating" className='rate-link'>Rate</Link>
            <button className="close-button" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Pawsibilities;