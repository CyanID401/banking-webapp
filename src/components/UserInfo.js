import React from 'react'
import { connect } from 'react-redux'
import { getUserFName, getUserLName } from '../app/reducers/userReducer'

const UserInfo = ({firstName, lastName}) => {
    return (
        <>
            {firstName &&
                <span>{`${lastName}, ${firstName}`}</span>}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        firstName: getUserFName(state),
        lastName: getUserLName(state)
    }
}
export default connect(mapStateToProps)(UserInfo)
