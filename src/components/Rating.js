import React, { useState } from 'react';
import Popup from './Popup.js';
import { database } from '../index.js';
import { get, ref, onValue, push as firebasePush, runTransaction } from 'firebase/database';

function Rating() {
  const [studySpaces, setStudySpaces] = useState('');
  const [ynWifi, setYNWifi] = useState('');
  const [ynOutlet, setYNOutlet] = useState('');
  const [wifiRating, setWifiRating] = useState('');
  const [outletRating, setOutletRating] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [comment, setComment] = useState('');

  const reviewsRef = ref(database, 'reviews');

  const studyDenNames = [
    "Suzzallo Library",
    "Pop Health Building",
    "Cafe on the Ave",
    "Sip House",
    "Mary Gates Hall"
  ];

  const pushReview = () => {
    const review = {
        studySpace: studySpaces, // name of study space
        content: { wifiRating, outletRating }, // ratings for study space
        comment: comment, // comment supplied by user
        likes: 0
    };

    firebasePush(reviewsRef, review)
        .then(() => {
          setStudySpaces('');
          setYNWifi('');
          setYNOutlet('');
          setWifiRating('');
          setOutletRating('');
          setComment('');          
        })
        .catch((d) => console.log("error ", d));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowConfirmation(true); // show confirmation message after form submission
  };

  const handleConfirmation = () => {
    // pushReview();
    // setStudySpaces('');
    // setYNWifi('');
    // setYNOutlet('');
    // setWifiRating('');
    // setOutletRating('');
    // setComment('');
    pushReview();
    setShowConfirmation(false); // hide confirmation message after confirmed
  }

  const handleCancel = () => {
    setShowConfirmation(false);
  }

  return (
    <div className="card">
      <form className="rate-form" onSubmit={handleSubmit}>
        <label>
          Name of Study Den:
          <select
            value={studySpaces}
            onChange={(event) => setStudySpaces(event.target.value)}
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
        <br /><br />

        <label>Comment:</label>
        <br />
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows="4"
          cols="50"
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {showConfirmation && (
        <Popup
          formData={{
            studySpaces,
            ynWifi,
            ynOutlet,
            wifiRating,
            outletRating,
            comment
          }}
          onConfirm={handleConfirmation}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default Rating;