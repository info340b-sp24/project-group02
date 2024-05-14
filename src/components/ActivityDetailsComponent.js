import React from 'react';
import {CardList} from './Card.js';
import CREATED_ACTIVITIES from '../data/created_activities.json';

export function ActivityDetails(props) {
    return (
        <div>
            <div className="container-fluid text-black bg-light">
                <h1 className="text-center">Activity Details</h1>
            </div>
            {/* <div className="row">
                <CardList activties={CREATED_ACTIVITIES}/>
            </div> */}
        </div>
    )
}