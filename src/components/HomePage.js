import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { SearchBar } from './SearchBar';
import { CardList } from './CardList';

export function HomePage({ currentUser }) {
    const [filter, setFilter] = useState("All");
    const [searchInput, setSearchInput] = useState("");
    const [suggestedActivities, setSuggestedActivities] = useState([]);
    const [createdActivities, setCreatedActivities] = useState([]);
    const [registeredActivities, setRegisteredActivities] = useState([]);

    useEffect(() => {
        const db = getDatabase();

        const suggestedRef = ref(db, 'suggested');
        const createdRef = ref(db, 'created');
        const registeredRef = ref(db, 'registered');

        onValue(suggestedRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSuggestedActivities(Object.values(data));
            } else {
                setSuggestedActivities([]);
            }
        });

        onValue(createdRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setCreatedActivities(Object.values(data));
            } else {
                setCreatedActivities([]);
            }
        });

        onValue(registeredRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setRegisteredActivities(Object.values(data));
            } else {
                setRegisteredActivities([]);
            }
        });
    }, []);

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleChange = (event) => {
        const inputtedValue = event.target.value;
        setSearchInput(inputtedValue);
    };

    const filterActivities = (activities) => {
        if (filter === "All") return activities;
        return activities.filter(activity => activity.type?.toLowerCase() === filter.toLowerCase());
    };

    const searchActivities = (activities) => {
        if (searchInput.length > 0) {
            return activities.filter(event => event.activity?.toLowerCase().includes(searchInput.toLowerCase()));
        } else {
            return activities;
        }
    };

    const filteredAndSearchedSuggestedActivities = searchActivities(filterActivities(suggestedActivities));
    const filteredAndSearchedCreatedActivities = searchActivities(filterActivities(createdActivities));
    const filteredAndSearchedRegisteredActivities = searchActivities(filterActivities(registeredActivities));

    return (
        <div>
            <SearchBar onFilterSelect={handleFilterSelect} handleChange={handleChange} value={searchInput} />
            <div className="container">
                <h2 className="underlined">Suggested</h2>
                <CardList activities={filteredAndSearchedSuggestedActivities} />
            </div>
            {currentUser?.userId && <>
                <div className="container">
                    <h2 className="underlined">Created Activities</h2>
                    <CardList activities={filteredAndSearchedCreatedActivities} currentUser={currentUser} signedUp={true} />
                </div>
                <div className="container">
                    <h2 className="underlined">Registered Activities</h2>
                    <CardList activities={filteredAndSearchedRegisteredActivities} currentUser={currentUser} signedUp={true} />
                </div>
            </>}
        </div>
    );
}