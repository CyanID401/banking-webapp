import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Account from '../components/Account'
import { fetchUserData, 
    getUserAccounts, getUserDataStatus } from '../app/reducers/userReducer'

import * as acc from '../app/reducers/accountReducer'

const AccountInfo = ({ fetchUserData, dataStatus, accounts,
    currentAcc, setCurrentAcc }) => {
    useEffect(() => {
        fetchUserData()
    }, []) 
    return (
        <>
            { dataStatus.isLoading ?
                <Loading /> :
                dataStatus.isError ?
                    <div>Error Loading Data</div> :
                    <Account 
                        accounts={accounts}
                        currentAcc={currentAcc}
                        setCurrentAcc={setCurrentAcc}
                    />  
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        accounts: getUserAccounts(state),
        dataStatus: getUserDataStatus(state),
        currentAcc: acc.getCurrentAccount(state)
    }
}

const mapDispatchToProps = {
    fetchUserData,
    setCurrentAcc: acc.setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
