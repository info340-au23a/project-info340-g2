// this code heavily references Jacob's demo from day 19 

import React from 'react';
import '../index.css';

function Review(props) {
    return (
        <div className="review">
            <div className="card-body">
                <div className="card-title">
                    <strong>Review on {props.info.studySpace}</strong>
                </div>
                <div className="card-text">
                    <p><div className="category">Wifi?</div> {props.info.content.ynWifi}</p>
                    {props.info.content.ynWifi === 'yes' && <p><div className="category">Wifi Rating:</div> {props.info.content.wifiRating}/5 Paws</p>}

                    <p><div className="category">Outlets?</div> {props.info.content.ynOutlet}</p>
                    {props.info.content.ynOutlet === 'yes' && <p><div className="category">Outlet Rating:</div> {props.info.content.outletRating}/5 Paws</p>}

                    {props.info.comment && <p><div className="category">Comment:</div> <p/>{props.info.comment}</p>}
                </div>
            </div>
        </div>
    )
}

export default Review;