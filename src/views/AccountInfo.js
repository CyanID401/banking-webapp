import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Account from '../components/Account'
import { fetchUserData, 
    getUser, getUserDataStatus } from '../app/reducers/userReducer'

import * as acc from '../app/reducers/accountReducer'

const AccountInfo = ({ fetchUserData, currentUser, dataStatus,
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
                        accounts={currentUser.bankAccs}
                        currentAcc={currentAcc}
                        setCurrentAcc={setCurrentAcc}
                    />  
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: getUser(state),
        dataStatus: getUserDataStatus(state),
        currentAcc: acc.getCurrentAccount(state)
    }
}

const mapDispatchToProps = {
    fetchUserData,
    setCurrentAcc: acc.setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
