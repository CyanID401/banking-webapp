import { fetchUserData } from '../../API'

let initialState = fetchUserData(0)

const fundsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return 
        case 'LOGOUT':
            return
        default:
            return state
    }
}

export default fundsReducer

