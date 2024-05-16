import React, { useState } from 'react';
import SUGGESTED_DATA from '../data/suggest.json';
import YOUR_ACTIVITIES from '../data/your_activities.json';
import { SearchBar } from './SearchBar';
import { CardList } from './Card';

export function HomePage() {
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
            <SearchBar onFilterSelect={handleFilterSelect} />
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <div className="row">
                    <CardList activities={filterActivities(SUGGESTED_DATA)} />
                </div>
            </div>
            <div className="container">
                <h2 className="underlined">Your Activities</h2>
                <div className="row">
                    <CardList activities={filterActivities(YOUR_ACTIVITIES)} />
                </div>
            </div>
        </div>
    );
}
