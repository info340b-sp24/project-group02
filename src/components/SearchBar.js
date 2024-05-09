import React from 'react';

export function SearchBar(props) {
    return (
        <div className="container-fluid">
            <form className="d-flex" role="search" action="byName.html" method="GET">
                <button type="button" className="btn btn-outline-dark">Filter By</button>
                <input className="form-control m-2" type="search" placeholder="Search Activities" aria-label="Search"/>
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