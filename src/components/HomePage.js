import React, { useState } from 'react';
import SUGGESTED_DATA from '../data/suggest.json';
import YOUR_ACTIVITIES from '../data/your_activities.json';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';

export function HomePage({db}) {
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

    const filteredAndSearchedSuggestedActivities = searchActivities(filterActivities(SUGGESTED_DATA));
    const filteredAndSearchedYourActivities = searchActivities(filterActivities(YOUR_ACTIVITIES));

    return (
        <div>
            <SearchBar onFilterSelect={handleFilterSelect} handleChange={handleChange} value={searchInput} />
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <CardList activities={filteredAndSearchedSuggestedActivities} />
            </div>
            <div className="container">
                <h2 className="underlined">Your Activities</h2>
                <CardList activities={filteredAndSearchedYourActivities} signedUp={true} />
            </div>
        </div>
    );
}
