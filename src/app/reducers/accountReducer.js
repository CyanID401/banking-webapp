import { instance } from '../../api/index'

// actions

const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST'
const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
const CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR'

const DELETE_ACCOUNT_REQUEST = 'DELETE_ACCOUNT_REQUEST'
const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS'
const DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR'

const SET_CURRENT_ACC = 'SET_CURRENT_ACC'

// action creators

export const createAccount = () => (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_REQUEST })
    return instance.post('/accounts')
        .then(({ data }) => {
            dispatch({ type: CREATE_ACCOUNT_SUCCESS, data })
            dispatch({ type: 'UPDATE_ACCOUNT_INFO', data })
        })
        .catch((error) => {
            dispatch({ type: CREATE_ACCOUNT_ERROR, error })
        })
}

export const deleteAccount = () => (dispatch) => {
    dispatch({ type: DELETE_ACCOUNT_REQUEST })
    return instance.post('/accounts')
        .then(({ data }) => {
            dispatch({ type: DELETE_ACCOUNT_SUCCESS, data })
            dispatch({ type: 'UPDATE_ACCOUNT_INFO', data })
        })
        .catch((error) => {
            dispatch({ type: DELETE_ACCOUNT_ERROR, error })
        })
}

export const setCurrentAccount = (data) => {
    return {
        type: SET_CURRENT_ACC, 
        payload: data
    }
}

// reducer

let initialState = {
    currencies: [
        {id: 0, type: 'BGN'},
        {id: 1, type: 'EUR'},
        {id: 2, type: 'USD'}
    ],
    currentAccount: 0,
    processingRequest: false,
    isError: false,
    errorMsg: null
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT_REQUEST:
        case DELETE_ACCOUNT_REQUEST:
            return {
                ...state,
                processingRequest: true
            }
        case CREATE_ACCOUNT_SUCCESS:
        case DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                processingRequest: false
            }
        case CREATE_ACCOUNT_ERROR:
        case DELETE_ACCOUNT_ERROR:
            return {
                ...state,
                processingRequest: false,
                isError: true
            }
        case SET_CURRENT_ACC:
            return {
                ...state,
                currentAccount: action.payload
            }
        default:
            return state
    }
}

// selectors

export const getCurrentAccount = (state) => {
    return state.account.currentAccount
}

export const getRequestStatus = (state) => {
    return state.account.processingRequest
}

export const getCurrencies = (state) => {
    return state.account.currencies
}

export default accountReducer

