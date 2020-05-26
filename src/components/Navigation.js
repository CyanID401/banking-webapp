import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Banking App</Link>
                </li>
                <li>
                    <Link to="/account">Account Information</Link>
                </li>
                <li>
                    <Link to="/accounts">Manage Accounts</Link>
                </li>
                <li>
                    <Link to="/funds">Manage Funds</Link>
                </li>
                <li>
                    <UserInfo />
                </li>
            </ul>
      </nav>
    )
}

export default Navigation
