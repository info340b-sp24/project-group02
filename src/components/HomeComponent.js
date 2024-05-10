import React from 'react';
import SUGGESTED_DATA from '../data/suggest.json';
import YOUR_ACTIVITIES from '../data/your_activities.json';
import { SearchBar } from './SearchBar.js';
import { CardList } from './Card.js';

export function HomePage(props) {
    return (
        <div>
            <SearchBar/>
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <div className="row">
                    <CardList activities={SUGGESTED_DATA}/>
                    {/* <SeeAll/> */}
                </div>
            </div>
            <div className="container">
                <h2 className="underlined">Your Activities</h2>
                <div className="row">
                    <CardList activities={YOUR_ACTIVITIES}/>
                </div>
            </div>
        </div>
    )
}