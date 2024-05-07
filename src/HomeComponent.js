import React from 'react';
import { SearchBar } from './SearchBar.js';
import { Suggested } from './Card.js';

const suggested = [
    {"date":"Sunday, April 21 at 11am", "activity":"Biking On The Burke Gilman", "description":"Take a scenic bike ride with new friends along the Burke Gilman!"},
    {"date":"Friday, April 19th at 9am", "activity":"Hiking Mt. Rainer", "description":"Join us for an unforgettable adventure as we hike Mt. Rainier this weekend—let's conquer the summit together!"}
]

export function HomePage(props) {
    return (
        <div>
            <SearchBar/>
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <div className="row">
                    <Suggested activities={suggested}/>
                </div>
            </div>
        </div>
    )
}