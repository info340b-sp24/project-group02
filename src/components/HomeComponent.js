import React from 'react';
import { SearchBar } from './SearchBar.js';
import { Suggested } from './Card.js';

const suggested = [
    {"date":"Sunday, April 21 at 11am", "activity":"Biking On The Burke Gilman", "description":"Take a scenic bike ride with new friends along the Burke Gilman!"},
    {"date":"Friday, April 19th at 9am", "activity":"Hiking Mt. Rainer", "description":"Join us for an unforgettable adventure as we hike Mt. Rainier this weekend—let's conquer the summit together!"},
    {"date":"Tuesday, April 23rd at 2pm", "activity":"Costco Run", "description":"Get a ride to Costco with new friends to pick up some groceries!"}
]

const yourActivities = [
    {"date":"Thursday, April 25th at 6pm", "activity":"Bouldering", "description":"Join us at the Seattle Bouldering Project in Fremont!"},
    {"date":"Sunday, April 28th at 10am", "activity":"Walk Around Seattle", "description":"Explore Seattle and meet new friends!"}
]


export function HomePage(props) {
    return (
        <div>
            <SearchBar/>
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <div className="row">
                    <Suggested activities={suggested}/>
                    {/* <SeeAll/> */}
                </div>
            </div>
            <div className="container">
                <h2 className="underlined mt-4">Your Activities</h2>
                <div className="row">
                    <Suggested activities={yourActivities}/>
                </div>
            </div>
        </div>
    )
}