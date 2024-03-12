import React from "react";
// import { useHistory } from "react-router-dom";
import './popup.css'

const Popup = ({ formData, onConfirm, onCancel }) => {
    const {
        studySpaces,
        ynWifi,
        ynOutlet,
        wifiRating,
        outletRating,
        comment
    } = formData;
    
    return (
        <div className="popup">
            <div className="popup-content">
                <p>Study Space Name: {studySpaces}</p>

                <p>Wifi?: {ynWifi}</p>
                {ynWifi === 'yes' && <p>Rating: {wifiRating}/5</p>}
                
                <p>Outlets?: {ynOutlet}</p>
                {ynOutlet === 'yes' && <p>Rating: {outletRating}/5</p>}

                {comment && <p>Comment: {comment}</p>}

                <p>Are you ready to submit? Is this information correct?</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
};
export default Popup;