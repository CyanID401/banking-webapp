import React from 'react'
import SelectList from './SelectList'

const Account = ({currentUser}) => {
    const handleOnChange = () => {

    }

    return (
        <div>
            <h1>Current Bank Account</h1>
            <SelectList elements onChange={() => handleOnChange()}/>
            <div>Account Name</div>
            <div>Balance:</div>
            <div>Currency:</div>
            <div>IBAN:</div>
            <a href="#">Details</a>
        </div>
    )
}

export default Account
