import React from 'react'
import SelectList from './SelectList'

const Account = () => {
    return (
        <div>
            <h1>Current Bank Account</h1>
            <SelectList />
            <div>Account Name</div>
            <div>Balance:</div>
            <div>Currency:</div>
            <div>IBAN:</div>
            <a href="#">Details</a>
        </div>
    )
}

export default Account
