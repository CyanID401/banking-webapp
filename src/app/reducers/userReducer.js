import * as actions from '../actions/actionTypes'

let initialState = {
    data: {}, 
    isDataLoaded: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return state
        case actions.LOGOUT:
            return state
        case actions.INITIALIZE_STATE:
            console.log('Initializating state from mock API')
            console.log(action.data)
            return {
                ...state,
                data: action.data,
                isDataLoaded: true
            }
        default:
            return state
    }
}

export const getUserFName = (state) => {
    return state.user.data.firstName
}

export const getUserLName = (state) => {
    return state.user.data.lastName
}

export default userReducer

