import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getAuthStatus } from '../app/reducers/authReducer'

function PrivateRoute({ authStatus, location, component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            authStatus.isAuth
              ? <Component {...rest} {...props} />
              : <Redirect to={"/login"} />
          )} />
    )
}

const mapStateToProps = (state) => {
    return {
        authStatus: getAuthStatus(state)
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)
