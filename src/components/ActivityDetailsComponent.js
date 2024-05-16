import React from 'react';
import {CardList} from './CardList.js';
import CREATED_ACTIVITIES from '../data/created_activities.json';
import { Link, useParams } from 'react-router-dom';

export function ActivityDetails(props) {
    const { name } = useParams();
    const activity = CREATED_ACTIVITIES.find(activity => {
        console.log(activity.activity, decodeURIComponent(name), activity.activity === decodeURIComponent(name))
        return activity.activity === decodeURIComponent(name);
    });

    if (!activity) {
        return <div>Activity not found</div>;
    }

    const { date, activity: activityName, description, detailInformation, img, alt } = activity;

    return (
        <div>
            <div className="container-fluid text-black bg-light">
                <h1 className="text-center">Activity Details</h1>
            </div>
            <main>
                <div className="container">
                    <div className="card">
                        <img src={img} alt={alt} className="pb-3 img-fluid img-thumbnail" />
                        <p className="card-subtitle">{date}</p>
                        <h2 className="card-title">{activityName}</h2>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{detailInformation}</p>
                        {/* when we press the sign up button, this takes it to the sign up form for that activity */}
                        <Link to={"/sign-up/" + activityName} className="btn btn-dark mb-4">Sign Up</Link>

                    </div>
                </div>
            </main>
            {/* <div className="row">
                <CardList activties={CREATED_ACTIVITIES}/>
            </div> */}

            
        </div>
    )
}