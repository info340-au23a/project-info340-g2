import React, { useState } from 'react';
import Popup from '../Popup';

function Rating() {
  const [name, setName] = useState('');
  const [ynWifi, setYNWifi] = useState('');
  const [ynOutlet, setYNOutlet] = useState('');
  const [wifiRating, setWifiRating] = useState('');
  const [outletRating, setOutletRating] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [picture, setPicture] = useState(null);

  const studyDenNames = [
    "Suzzalo Library",
    "Pop Health Building",
    "Cafe on the Ave",
    "Sip House",
    "Mary Gates Hall"
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true); // show confirmation message after form submission
  };

  const handleConfirmation = () => {
    setName('');
    setYNWifi('');
    setYNOutlet('');
    setWifiRating('');
    setOutletRating('');
    setPicture(null);
    
    setShowConfirmation(false); // hide confirmation message after confirmed
  }

  const handleCancel = () => {
    setShowConfirmation(false);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>
          Name of Study Den:
          <select
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          >
            <option value="">Select Study Den</option>
            {studyDenNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </label>
        <br /><br />

        <label>
          Does this study den have wifi?:
          <select
            value={ynWifi}
            onChange={(event) => setYNWifi(event.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
       
        {ynWifi === 'yes' && (
          <label>
            Please rank the reliability of the wifi on a scale from 1-5 paws:
            <input
              type="number"
              min="1"
              max="5"
              value={wifiRating}
              onChange={(event) => setWifiRating(event.target.value)}
              required
            />
          </label>
        )}
        <br /><br />

        <label>
          Does this study den have outlets?:
          <select
            value={ynOutlet}
            onChange={(event) => setYNOutlet(event.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {ynOutlet === 'yes' && (
          <label>
            Please rank the accessibility of the outlets on a scale from 1-5 paws:
            <input
              type="number"
              min="1"
              max="5"
              value={outletRating}
              onChange={(event) => setOutletRating(event.target.value)}
              required
            />
          </label>
        )}
        <br />
        <br />
        <label>
          Upload Picture (if you have):
          <input
            type="file"
            onChange={(event) => setPicture(event.target.files[0])}
            accept="image/*"
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <Popup
          formData={{
            name,
            ynWifi,
            ynOutlet,
            wifiRating,
            outletRating,
            picture
          }}
          onConfirm={handleConfirmation}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default Rating;