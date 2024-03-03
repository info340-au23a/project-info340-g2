import React from "react";
import { useHistory } from "react-router-dom";
import './popup.css'

const Popup = ({ onClose }) => {
    const history = useHistory();

    const handleRate = () => {
        history.push("/Rating.js")
    };
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>Do you want to rate this location?</p>
                <button onClick={handleRate}></button>

            </div>
        </div>
    );
};
export default Popup;