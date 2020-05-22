import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import Account from './Account'
import AccOperations from './AccOperations'
import AccCreate from './AccCreate'
import AccDelete from './AccDelete'
import { fetchUserData, 
    getUser, getIsUserLoaded } from '../app/reducers/userReducer'

import * as acc from '../app/reducers/accountReducer'

const AccInfo = ({ fetchUserData, currentUser, isLoaded,
    currentAcc, setCurrentAcc, createAcc, deleteAcc }) => {
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
                    <AccOperations />
                    <AccCreate create={createAcc}/>
                    <AccDelete delete={deleteAcc}/>
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
    setCurrentAcc: acc.setCurrentAccount,
    createAcc: acc.createAccount,
    deleteAcc: acc.deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(AccInfo)
