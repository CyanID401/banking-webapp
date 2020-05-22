import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import Account from '../components/Account'
import { fetchUserData, 
    getUser, getIsUserLoaded } from '../app/reducers/userReducer'

import * as acc from '../app/reducers/accountReducer'

const AccountInfo = ({ fetchUserData, currentUser, isLoaded,
    currentAcc, setCurrentAcc }) => {
    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])
    return (
        <>
            { isLoaded ?
                <>
                    <Account 
                        accounts={currentUser.bankAccs}
                        currentAcc={currentAcc}
                        setCurrentAcc={setCurrentAcc}
                    />
                </> : 
            <Loading /> }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: getUser(state),
        currentAcc: acc.getCurrentAccount(state),
        isLoaded: getIsUserLoaded(state)
    }
}

const mapDispatchToProps = {
    fetchUserData,
    setCurrentAcc: acc.setCurrentAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
