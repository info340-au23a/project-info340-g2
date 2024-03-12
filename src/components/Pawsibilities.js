import React from 'react';
import StudySpotCard from './StudySpotCard';
//import Popup from './Popup';

function Pawsibilities({pawsibilities, markAsVisited}) { 
  //const [showPopup, setShowPopup] = useState(false);

 //const handleMarkAsVisited = (index) => {
  //  markAsVisited(index);
    //setShowPopup(true);
 // };

  //const handleClosePopup = () => {
    //setShowPopup(false);
  //};
  return(
    <main>
      <table>
        <tbody>
          {pawsibilities.map((space, index) => (
            <tr key={index}>
              <td>
                <StudySpotCard
                  spot={space}
                  markAsVisited={() => markAsVisited(index)}
                  showButton={false}
                  />
                 <button className="button" style={{ color: '#51289e' }} onClick={() => markAsVisited(index)}>Mark as Visited &#10024;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Pawsibilities;