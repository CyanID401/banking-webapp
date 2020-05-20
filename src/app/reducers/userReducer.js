import { instance } from '../../API'

// actions

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const INITIALIZE_STATE = 'INITIALIZE_STATE'

// action creators

export const fetchUserData = (id = 0) => dispatch => { 
    instance.get(`/users/${id}`)
    .then((res) => {
        let data = { ...res.data }
        dispatch({ type: INITIALIZE_STATE, data, isDataInitialized: true });
    })
    .catch((error) => {
        console.log(error);
    })
}

// reducer

let initialState = {
    data: {}, 
    isDataLoaded: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state
        case LOGOUT:
            return state
        case INITIALIZE_STATE:
            console.log('Initializating state from mock API...')
            return {
                ...state,
                data: action.data,
                isDataLoaded: true
            }
        default:
            return state
    }
}

// selectors

export const getUser = (state) => {
    return state.user.data
}

export const getUserFName = (state) => {
    return state.user.data.firstName
}

export const getUserLName = (state) => {
    return state.user.data.lastName
}

export default userReducer

