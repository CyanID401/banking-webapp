import React from 'react'
import Account from './Account'
import AccTransactions from './AccTransactions'
import AccOperations from './AccOperations'

const AccInfo = () => {
    return (
        <div>
            <Account />
            <AccOperations />
            <AccTransactions />
        </div>
    )
}

export default AccInfo
