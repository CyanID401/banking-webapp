import React from 'react'
import { connect } from 'react-redux'
import { getUserAccounts } from '../app/reducers/userReducer'
import { transferFunds, depositFunds,
     getTransactionStatus } from '../app/reducers/fundsReducer'
import FundsTransfer from '../components/FundsTransfer'
import FundsDeposit from '../components/FundsDeposit'

const FundsManager = ({ accounts, transferFunds, depositFunds, isProcessing  }) => {

    return (
        <>
            <FundsTransfer
                accounts={accounts}
                isLoading={isProcessing}
                transferFunds={transferFunds}
            />
            <FundsDeposit 
                accounts={accounts}
                isLoading={isProcessing}
                depositFunds={depositFunds}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        isProcessing: getTransactionStatus(state)
    }
}

const mapDispatchToProps = {
    transferFunds,
    depositFunds
}

export default connect(mapStateToProps, mapDispatchToProps)(FundsManager)