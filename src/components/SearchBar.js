import React, {useState} from 'react';
import FilterDropdown from './FilterDropdown';

export function SearchBar({ onFilterSelect, handleChange, handleSubmit }) {

    return (
        <div className="container-fluid">
            <form className="d-flex" role="search">
                <FilterDropdown onSelect={onFilterSelect} />
                <input className="form-control mx-2" type="search" placeholder="Search Activities" aria-label="Search" onChange={handleChange}/>
                <button className="btn btn-outline-dark" type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    );
}
