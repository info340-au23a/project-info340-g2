import React from 'react';

function Review(props) {
    return (

        <Card className="review">
            <CardBody>
                <CardTitle>
                    <strong>Review on {props.info.studySpaces}</strong>
                </CardTitle>
            </CardBody>
        </Card>
        // <div className="review">
        //     <div className="reviewSpace">{props.info.studySpace}</div>
        //     <div className="reviewContent">{props.info.content}</div>
        //     <div className="reviewComment">{props.info.comment}</div>
        //     <div className="likes" onClick={() => props.update(props.id)}>Likes: {props.info.likes}</div>
        // </div>
    )
}

export default Review;