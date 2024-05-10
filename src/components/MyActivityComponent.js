import React from 'react';
import { SearchBar } from './SearchBar.js';
import { CardList } from './Card.js';
import REGISTERED_ACTIVITIES from '../data/registered_activities.json';
import CREATED_ACTIVITIES from '../data/created_activities.json';

export function MyActivity(props) {
    return (
        <div>
            <div className="container-fluid text-black bg-light py-3">
                <h1 className="text-center">My Activity</h1>
                <SearchBar/>
            </div>
            <div className="container">
                <h2 className="text-center">Activities I've Registered For</h2>
                <div className="row">
                    <CardList activities={REGISTERED_ACTIVITIES}/>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center my-4">Activities I've Created</h2>
                <div className="row">
                    <CardList activities={CREATED_ACTIVITIES}/>
                </div>
            </div>
        </div>
    )
}