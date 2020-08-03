import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Home from '../views/Home'
import Login from '../views/Login'
import AccountInfo from '../views/AccountInfo'
import AccountManager from '../views/AccountManager'
import FundsManager from '../views/FundsManager'
import NotFound from '../views/NotFound'
import Loading from './Loading'
import AlertMsg from './AlertMsg'
import { fetchUserData, 
    getUserDataStatus } from '../app/reducers/userReducer'
import { getAuthUserID, getAuthStatus } from '../app/reducers/authReducer'

function Routes({ authUserID, authStatus, fetchUserData, dataStatus }) {
    useEffect(() => {
        if (authStatus.isAuth) {
            fetchUserData(authUserID)
        }
    }, [authStatus.isAuth, authUserID])

    if (dataStatus.isLoading) {
        return <Loading />
    }
    else if (dataStatus.isError) {
        return <AlertMsg type={'error'} msg={'Error Loading Data'} />
    }
    else return (
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/Home" component={Home} />
            <PrivateRoute path="/account" component={AccountInfo} />
            <PrivateRoute path="/accounts" component={AccountManager} />
            <PrivateRoute path="/funds" component={FundsManager} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        dataStatus: getUserDataStatus(state),
        authUserID: getAuthUserID(state),
        authStatus: getAuthStatus(state)
    }
}

const mapDispatchToProps = {
    fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
