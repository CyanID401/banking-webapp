import React from 'react'
import FundsOperations from '../components/FundsOperations'

const FundsManager = () => {
    return (
        <div>
            <FundsOperations type="transfer" />
            <FundsOperations type="deposit" />
        </div>
    )
}

export default FundsManager
