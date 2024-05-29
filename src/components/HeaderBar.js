import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { getAuth, signOut } from 'firebase/auth';


export function Header(props) {
    const currentUser = props.currentUser || {} ;

    const handleSignOut = (event) => {
        signOut(getAuth());
    }

    return (
        <header>
            <Navbar expand="lg" className="bottom-spacing">
                <Container fluid>
                    <Navbar.Brand className="fs-1 fw-bold">UW Ride With Friends</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/my-activity">
                                <Nav.Link>My Activity</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/create-activity">
                                <Nav.Link>Create An Activity</Nav.Link>
                            </LinkContainer>
                            {currentUser.userId &&
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                                    </li>
                                </>
                            }
                            {!currentUser.userId &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signin">
                                        <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
                                    </NavLink>
                                </li>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
