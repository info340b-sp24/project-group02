import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Header(props) {
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
