import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Review(props) {
    return (
        <Card className="review">
            <CardBody>
                <CardTitle>
                    <strong>Review on {props.info.studySpace}</strong>
                </CardTitle>
                <CardText>
                    <p>Wifi Rating: {props.info.content.wifiRating}</p>
                    <p>Outlet Rating: {props.info.content.outletRating}</p>
                    <p>Comment: {props.info.comment}</p>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Review;