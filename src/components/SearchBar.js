import React from 'react';
import FilterDropdown from './FilterDropdown';

export function SearchBar({ onFilterSelect }) {
    return (
        <div className="container-fluid">
            <form className="d-flex" role="search">
                <FilterDropdown onSelect={onFilterSelect} />
                <input className="form-control mx-2" type="search" placeholder="Search Activities" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
        </div>
    );
}


// if (/*search button is pressed*/) {
//     const currentSearch = 'whatever was entered into search bar';
//     const results = activity_data.filter(searchObj) => {
//         return (searchObj.name === currentSearch)
//     }
// }
