import React, { useState } from 'react';
import { SearchBar } from './SearchBar.js';
import { CardList } from './CardList.js';
import CREATED_ACTIVITIES from '../data/created_activities.json';

export function MyActivity({createdActivities, registeredActivities}) {
    const [filter, setFilter] = useState("All");

    const [searchInput, setSearchInput] = useState("");

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleChange = (event) => {
        const inputtedValue = event.target.value;
        setSearchInput(inputtedValue);
    }

    const filterActivities = (activities) => {
        if (filter === "All") return activities;
        return activities.filter(activity => activity.type === filter);
    };

    const searchActivities = (activities) => {
        if (searchInput.length > 0) {
            return activities.filter(event => event.activity.toLowerCase().includes(searchInput.toLowerCase()));
        } else {
            return activities;
        };
    }

    const filteredAndSearchedRegisteredActivities = searchActivities(filterActivities(registeredActivities));
    const filteredAndSearchedCreatedActivities = searchActivities(filterActivities(createdActivities));

    return (
        <div>
            <div className="container-fluid text-black bg-light py-3">
                <h1 className="text-center">My Activity</h1>
                <SearchBar onFilterSelect={handleFilterSelect} handleChange={handleChange} value={searchInput} />
            </div>
            <div className="container">
                <h2 className="text underlined">Activities I've Registered For</h2>
                <CardList activities={filteredAndSearchedRegisteredActivities} signedUp={true} />
            </div>
            <div className="container">
                <h2 className="text underlined my-4">Activities I've Created</h2>
                <CardList activities={filteredAndSearchedCreatedActivities} signedUp={true} />
            </div>
        </div>
    )
}

