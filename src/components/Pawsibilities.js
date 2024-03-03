import React from 'react';
//import Popup from './Popup';

function Pawsibilities({pawsibilities, markAsVisited}) { 
  //const [showPopup, setShowPopup] = useState(false);

  const handleMarkAsVisited = (index) => {
    markAsVisited(index);
    //setShowPopup(true);
  };

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
                <img src={space.image} alt={space.name} />
                <div className="button-container">
                  <button className="button" onClick={() => handleMarkAsVisited(index)}>Mark as Visited &#10024;</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Pawsibilities;
