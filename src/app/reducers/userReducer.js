import { instance } from '../../api/index'

// actions

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GET_USER_REQUEST = 'GET_USER_REQUEST'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_ERROR = 'GET_USER_ERROR'

// action creators

export const fetchUserData = (id = 0) => (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    return instance.get(`/user/${id}`)
    .then(({ data }) => {
        dispatch({ type: GET_USER_SUCCESS, data, isLoading: false })
    })
    .catch((error) => {
        dispatch({ type: GET_USER_ERROR, error, isLoading: false, isError: true })
    })
}

// reducer

let initialState = {
    data: {}, 
    isLoading: true,
    isError: false,
    errorMsg: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return state
        case LOGOUT:
            return state
        case GET_USER_SUCCESS:
            console.log('Initializating state from mock API...')
            return {
                ...state,
                data: action.data,
                isLoading: action.isLoading
            }
        case GET_USER_ERROR:
            return {
                ...state,
                isLoading: action.isLoading,
                isError: action.isError,
                errorMsg: action.error
            }
        default:
            return state
    }
}

// selectors

export const getUserDataStatus = (state) => {
    return {
        isLoading: state.user.isLoading,
        isError: state.user.isError
    }
}

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

