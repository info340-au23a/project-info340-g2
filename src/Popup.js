import React from "react";
import { useHistory } from "react-router-dom";
import './popup.css'

const Popup = ({ formData, onConfirm, onCancel }) => {
    const {
        name,
        ynWifi,
        ynOutlet,
        wifiRating,
        outletRating,
        picture
    } = formData;
    
    return (
        <div className="popup">
            <div className="popup-content">
                <p>Study Space Name: {name}</p>

                <p>Wifi?: {ynWifi}</p>
                {ynWifi === 'yes' && <p>Rating: {wifiRating}/5</p>}
                
                <p>Outlets?: {ynOutlet}</p>
                {ynOutlet === 'yes' && <p>Rating: {outletRating}/5</p>}

                <p>Picture:</p>
                {picture && (
                    <div>
                        <img src={URL.createObjectURL(picture)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    </div>
                )}
                <p>{picture ? picture.name : 'No picture uploaded'}</p>

                <p>Are you ready to submit? Is this information correct?</p>
                {/* <span className="close" onClick={onClose}>&times;</span> */}
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
};
export default Popup;