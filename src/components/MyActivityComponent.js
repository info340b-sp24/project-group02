import React, { useState } from 'react';
import { SearchBar } from './SearchBar.js';
import { CardList } from './CardList.js';

export function MyActivity({ createdActivities, registeredActivities, currentUser }) {
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
        return activities.filter(activity => activity.type?.toLowerCase() === filter.toLowerCase());
    };

    const searchActivities = (activities) => {
        if (searchInput.length > 0) {
            return activities.filter(event => event.activity?.toLowerCase().includes(searchInput.toLowerCase()));
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
                <CardList activities={filteredAndSearchedRegisteredActivities} currentUser={currentUser} signedUp={true} />
            </div>
            <div className="container">
                <h2 className="text underlined my-4">Activities I've Created</h2>
                <CardList activities={filteredAndSearchedCreatedActivities} currentUser={currentUser} signedUp={true} />
            </div>
        </div>
    )
}