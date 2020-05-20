// actions

export const CREATE_ACC = 'CREATE_ACC'
export const DELETE_ACC = 'DELETE_ACC'

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

// reducer

const accountReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ACC:
            return //todo
        case DELETE_ACC:
            return //todo
        default:
            return state
    }
}

export default accountReducer

