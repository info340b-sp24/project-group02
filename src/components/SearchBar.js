import React, { useState } from 'react';
import SUGGESTED_DATA from '../data/suggest.json';


export function SearchBar(props) {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        const inputtedValue = event.target.value;
        setInput(inputtedValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("searching", input);
        setInput("");
    }

    return (
        <div className="container-fluid">
            <form className="d-flex" role="search" action="byName.html" method="GET" onSubmit={handleSubmit}>
                <button type="button" className="btn btn-outline-dark">Filter By</button>
                <input className="form-control m-2" type="search" placeholder="Search Activities" aria-label="Search" value={input} onChange={handleChange}/>
                <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
        </div>
    )
}

// if (/*search button is pressed*/) {
//     const currentSearch = 'whatever was entered into search bar';
//     const results = activity_data.filter(searchObj) => {
//         return (searchObj.name === currentSearch)
//     }
// }