import { instance } from '../../api/index'

// actions

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_ERROR = 'LOGOUT_ERROR'

// action creators

export const authUser = credentials => dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    return instance.post('/authenticate', {credentials})
    .then(({ data }) => {
        console.log(data)
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    })
    .catch(error => {
        dispatch({ type: LOGIN_ERROR, error })
    })
}

export const logoutUser = id => dispatch => {
    dispatch({ type: LOGOUT_REQUEST })
    return instance.post(`/user/${id}`)
    .then(({ data }) => {
        console.log(data)
        dispatch({ type: LOGOUT_SUCCESS, payload: data })
    })
    .catch(error => {
        dispatch({ type: LOGOUT_ERROR, error })
    })
}

// reducer

const initialState = {
    isAuth: false,
    isError: false,
    errorMsg: null,
    authUserID: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                authUserID: action.payload.userID
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isError: true,
                errorMsg: action.error
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                authUserID: null
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                isError: true,
                errorMsg: action.error
            }
        default:
            return state
    }
}


// selectors

export const getAuthStatus = state => {
    return {
        isAuth: state.auth.isAuth,
        isError: state.auth.isError
    }
}

export const getAuthUserID = state => {
    return state.auth.authUserID
}

export default authReducer