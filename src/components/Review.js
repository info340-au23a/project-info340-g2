// this code heavily references Jacob's demo from day 19 

import React from 'react';
import '../Review.css';

function Review(props) {
    return (
        <div className="review">
            <div className="card-body">
                <div className="card-title">
                    <strong>Review on {props.info.studySpace}</strong>
                </div>
                <div className="card-text">
                    <p><a className="category">Wifi?:</a> {props.info.content.ynWifi}</p>
                    {props.info.content.ynWifi === 'yes' && <p><a className="category">Wifi Rating:</a> {props.info.content.wifiRating}/5 Paws</p>}

                    <p><a className="category">Outlets?:</a> {props.info.content.ynOutlet}</p>
                    {props.info.content.ynOutlet === 'yes' && <p><a className="category">Outlet Rating:</a> {props.info.content.outletRating}/5 Paws</p>}

                    {props.info.comment && <p><a className="category">Comment:</a> <p/>{props.info.comment}</p>}
                </div>
            </div>
        </div>
    )
}

export default Review;