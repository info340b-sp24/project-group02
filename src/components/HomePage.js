import React, { useState } from 'react';
import SUGGESTED_DATA from '../data/suggest.json';
import YOUR_ACTIVITIES from '../data/your_activities.json';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';

export function HomePage() {
    const [filter, setFilter] = useState("All");

    const [searchInput, setSearchInput] = useState("");

    const [display, setDisplay] = useState(SUGGESTED_DATA);

    const [yours, setYours] = useState(YOUR_ACTIVITIES);

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleChange = (event) => {
        const inputtedValue = event.target.value;
        setSearchInput(inputtedValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(searchActivities(display));
        setYours(searchActivities(yours));
        setSearchInput("");
    };

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

    return (
        <div>
            <SearchBar onFilterSelect={handleFilterSelect} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <div className="row">
                    <CardList activities={display && filterActivities(display)}/>
                </div>
            </div>
            <div className="container">
                <h2 className="underlined">Your Activities</h2>
                <div className="row">
                    <CardList activities={yours && filterActivities(yours)} />
                </div>
            </div>
        </div>
    );
}
