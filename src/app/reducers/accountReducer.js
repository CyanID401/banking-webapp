import { CREATE_ACC, DELETE_ACC } from '../actions/actionTypes'

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

