import React, { useState } from 'react';
import { SearchBar } from './SearchBar.js';
import { CardList } from './CardList.js';
import REGISTERED_ACTIVITIES from '../data/registered_activities.json';
import CREATED_ACTIVITIES from '../data/created_activities.json';

export function MyActivity(props) {
    const [filter, setFilter] = useState("All");

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const filterActivities = (activities) => {
        if (filter === "All") return activities;
        return activities.filter(activity => activity.type === filter);
    };

    return (
        <div>
            <div className="container-fluid text-black bg-light py-3">
                <h1 className="text-center">My Activity</h1>
                <SearchBar onFilterSelect={handleFilterSelect} />
            </div>
            <div className="container">
                <h2 className="text underlined">Activities I've Registered For</h2>
                <div className="row">
                    <CardList activities={filterActivities(REGISTERED_ACTIVITIES)}/>
                </div>
            </div>
            <div className="container">
                <h2 className="text underlined my-4">Activities I've Created</h2>
                <div className="row">
                    <CardList activities={filterActivities(CREATED_ACTIVITIES)}/>
                </div>
            </div>
        </div>
    )
}