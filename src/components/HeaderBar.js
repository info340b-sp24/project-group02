import React from 'react';
import { Link } from 'react-router-dom';

export function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bottom-spacing">
            <div className="container-fluid">
                <h1 className="navbar-brand fs-1 fw-bold">UW Ride With Friends</h1>
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-activity">My Activity</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create-activity">Create An Activity</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}