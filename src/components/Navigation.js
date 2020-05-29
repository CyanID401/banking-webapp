import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import UserInfo from './UserInfo'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Banking App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/account">Account Information</Nav.Link>
                        <Nav.Link as={Link} to="/accounts">Manage Accounts</Nav.Link>
                        <Nav.Link as={Link} to="/funds">Manage Funds</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><UserInfo></UserInfo></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
