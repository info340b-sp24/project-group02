import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
// function Card({ activityDetails, signedUp }) {
    const { date, activity, description, img, alt } = props.activityDetails;
    let button;
    if (!props.signedUp) {
        button = <Link to={"/sign-up/" + activity} className="btn btn-dark mb-4">Sign Up</Link>;
    }

    return (
        <div className="col-md-6 col-lg-3 d-flex sizing">
            <div className="card mb-4">
                <img className="card-img" src={img} alt={alt} />
                <div className="card-body">
                    <p className="card-subtitle text-success">{date}</p>
                    <h2 className="card-title m-0">{activity}</h2>
                    <p className="card-text">{description}</p>
                    {button}
                </div>
            </div>
        </div>
    )
}

export function CardList({ activities, currentUser, signedUp }) {
    if (!activities || activities.length === 0) {
        return <div>No results</div>;
    }
    if (typeof activities === "object") {
        // Convert object to array
        activities = Object.values(activities);
    }

    activities = activities.filter((activity) => {
        if (!currentUser?.userId) return true;
        return activity.userId === currentUser.userId;
    });
    if (activities.length === 0) {
        return <div>No results</div>;
    }

    const cardList = activities.map((activity, index) => {
        const element = <Card key={index} activityDetails={activity} signedUp={signedUp} />
        return element;
    });

    return (
        <div className="row">
            {cardList}
        </div>
    )
}
