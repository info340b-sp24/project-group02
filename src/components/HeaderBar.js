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
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"</div>>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="activity.html">My Activity</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="rec-form.html">Create An Activity</a>
                    </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}