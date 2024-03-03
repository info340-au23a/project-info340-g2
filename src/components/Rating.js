import React, { useState } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [ynWifi, setYNWifi] = useState('');
  const [ynOutlet, setYNOutlet] = useState('');
  const [wifiRating, setWifiRating] = useState('');
  const [outletRating, setOutletRating] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true); // show confirmation message after form submission
  };

  const handleConfirmation = () => {
    // Reset the form after submission
    setName('');
    setYNWifi('');
    setYNOutlet('');
    setWifiRating('');
    setOutletRating('');
    
    setShowConfirmation(false); // hide confirmation message after confirmed
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name of Study Den:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <br />
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
        <br />
        <br />
        {ynWifi === 'yes' && (
          <label>
            Rating:
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
        <br />
        <br />
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
        <br />
        <br />
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
        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <div>
          <p>Study Space Name: {name}</p>
          <p>Wifi?: {ynWifi}</p>
          {ynWifi === 'yes' && <p>Rating: {wifiRating}</p>}
          <p>Outlets?: {ynOutlet}</p>
          {ynOutlet === 'yes' && <p>Rating: {outletRating}</p>}
          <p>Is this information correct?</p>
          <button onClick={handleConfirmation}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default Rating;