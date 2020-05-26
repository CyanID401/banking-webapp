import React from 'react'
import { connect } from 'react-redux'
import Account from '../components/Account'
import { getUserAccounts } from '../app/reducers/userReducer'
import * as acc from '../app/reducers/accountReducer'

const AccountInfo = ({ accounts, currentAcc, setCurrentAcc }) => {

    return (
        <>
            <Account 
                accounts={accounts}
                currentAcc={currentAcc}
                setCurrentAcc={setCurrentAcc}
            />  
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        currentAcc: acc.getCurrentAccount(state)
    }
}

const mapDispatchToProps = {
    setCurrentAcc: acc.setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
