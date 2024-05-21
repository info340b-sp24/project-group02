import React, { useState } from 'react';
import { SearchBar } from './SearchBar.js';
import { CardList } from './CardList.js';
import REGISTERED_ACTIVITIES from '../data/registered_activities.json';
import CREATED_ACTIVITIES from '../data/created_activities.json';

// export function MyActivity(props) {
export function MyActivity({ registeredActivities }) {
    const [filter, setFilter] = useState("All");

    const [searchInput, setSearchInput] = useState("");

    // const [signedUp, setSignedUp] = useState(false); 


    // const [registered, setRegistered] = useState(REGISTERED_ACTIVITIES);

    // const [created, setCreated] = useState(CREATED_ACTIVITIES);

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleChange = (event) => {
        const inputtedValue = event.target.value;
        setSearchInput(inputtedValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setRegistered(searchActivities(registered));
        // setCreated(searchActivities(created));
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

    const filteredAndSearchedRegisteredActivities = searchActivities(filterActivities(registeredActivities));
    const filteredAndSearchedCreatedActivities = searchActivities(filterActivities(CREATED_ACTIVITIES));


    return (
        <div>
            <div className="container-fluid text-black bg-light py-3">
                <h1 className="text-center">My Activity</h1>
                <SearchBar onFilterSelect={handleFilterSelect} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="container">
                <h2 className="text underlined">Activities I've Registered For</h2>
                <div className="row">
                    {/* <CardList activities={registered && filterActivities(registered)}/> */}
                    <CardList activities={filteredAndSearchedRegisteredActivities} signedUp={true} />

                </div>
            </div>
            <div className="container">
                <h2 className="text underlined my-4">Activities I've Created</h2>
                <div className="row">
                    {/* <CardList activities={created && filterActivities(created)}/> */}
                    <CardList activities={filteredAndSearchedCreatedActivities} signedUp={true}/>
                </div>
            </div>
        </div>
    )
}

