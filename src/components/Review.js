// this code heavily references Jacob's demo from day 19 

import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Review(props) {
    return (
        <Card className="review">
            <CardBody>
                <CardTitle>
                    <strong className="reviewText">Review on {props.info.studySpace}</strong>
                </CardTitle>
                <CardText>
                    <p>Wifi?: {props.info.content.ynWifi}</p>
                    {props.info.content.ynWifi === 'yes' && <p>Wifi Rating: {props.info.content.wifiRating}/5 Paws</p>}

                    <p>Outlets?: {props.info.content.ynOutlet}</p>
                    {props.info.content.ynOutlet === 'yes' && <p>Outlet Rating: {props.info.content.outletRating}/5 Paws</p>}

                    {props.info.comment && <p>Comment: {props.info.comment}</p>}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Review;