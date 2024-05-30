import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


export function Header(props) {
    const currentUser = props.currentUser || {};

    const handleSignOut = (event) => {
        signOut(getAuth());
    }

    return (
        <header>
            <Navbar expand="lg" className="bottom-spacing">
                <Container fluid>
                    <Navbar.Brand className="fs-1 fw-bold">UW Ride With Friends</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav flex space-between">
                        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/my-activity">My Activity</NavLink>
                            <NavLink className="nav-link" to="/create-activity">Create An Activity</NavLink>
                        </Nav>
                        {currentUser.userId &&
                            <>
                                <div className="nav-item">
                                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                </div>
                                <div className="nav-item">
                                    <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                                </div>
                            </>
                        }
                        {!currentUser.userId &&
                            <div className="nav-item">
                                <NavLink className="nav-link" to="/signin">
                                    <img src="/img/blank.jpg" alt={currentUser.userName + " avatar"} />
                                </NavLink>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
