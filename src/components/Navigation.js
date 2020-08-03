import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import UserInfo from './UserInfo'
import { getAuthStatus, getAuthUserID, logoutUser } from '../app/reducers/authReducer'


const Navigation = ({ authStatus, authUserID, logoutUser }) => {

    const handleClick = () => {
        logoutUser(authUserID)
    }

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
                        {!authStatus.isAuth 
                            ? <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            : <>
                                <Nav.Link href="#"><UserInfo /></Nav.Link>
                                <Nav.Link href="" onClick={handleClick}>Logout</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {
        authStatus: getAuthStatus(state),
        authUserID: getAuthUserID(state)
    }
}

const mapDispatchToProps = {
    logoutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
