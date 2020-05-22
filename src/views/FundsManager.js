import React from 'react'
import FundsTransfer from '../components/FundsTransfer'
import FundsDeposit from '../components/FundsDeposit'

const FundsManager = () => {
    return (
        <div>
            <FundsTransfer />
            <FundsDeposit />
        </div>
    )
}

export default FundsManager
