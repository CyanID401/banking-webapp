import React from 'react'
import { connect } from 'react-redux'
import AccCreate from '../components/AccCreate'
import AccDelete from '../components/AccDelete'
import { createAccount, deleteAccount,
        getCurrencies, getRequestStatus } from '../app/reducers/accountReducer'
import { getUserAccounts } from '../app/reducers/userReducer'

const AccountManager = ({ currencies, accounts, isProcessing, 
    createAccount, deleteAccount }) => {
    return (
        <div>
            <AccCreate 
                currencies={currencies}
                isLoading={isProcessing}
                createAccount={createAccount}
            />
            <AccDelete
                accounts={accounts}
                isLoading={isProcessing}
                deleteAccount={deleteAccount}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        currencies: getCurrencies(state),
        isProcessing: getRequestStatus(state)
    }
}

const mapDispatchToProps = {
    createAccount,
    deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountManager)
