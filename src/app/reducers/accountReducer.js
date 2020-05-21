// actions

const CREATE_ACC = 'CREATE_ACC'
const DELETE_ACC = 'DELETE_ACC'
const SET_CURRENT_ACC = 'SET_CURRENT_ACC'

// action creators

export const createAccount = (data) => {
    return {
        type: CREATE_ACC, 
        payload: data
    }
}

export const deleteAccount = (data) => {
    return {
        type: DELETE_ACC, 
        payload: data
    }
}

export const setCurrentAccount = (data) => {
    return {
        type: SET_CURRENT_ACC, 
        payload: data
    }
}

// reducer

let initialState = {
    currentAccount: 0
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACC:
            return //todo
        case DELETE_ACC:
            return //todo
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

export default accountReducer

