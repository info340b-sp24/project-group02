import React from 'react';
import { SearchBar } from './SearchBar.js';

export function MyActivity(props) {
    return (
        <div class="container-fluid text-black bg-light py-3">
            <h1 class="text-center">My Activity</h1>
            <SearchBar/>
        </div>
    )
}