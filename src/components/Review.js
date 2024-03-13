import React from 'react';

function Review(props) {

    let date = new Date(props.info.timestamp);
    let formattedDate = date.toLocaleTimeString();

    return (
        <div className="review">
            <div className="date">{formattedDate}</div>
            <div className="reviewSpace">{props.info.studySpace}</div>
            <div className="reviewContent">{props.info.content}</div>
            <div className="reviewComment">{props.info.comment}</div>
            <div className="likes" onClick={() => props.update(props.id)}>Likes: {props.info.likes}</div>
        </div>
    )
}

export default Review;