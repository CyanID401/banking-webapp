import thunkMiddleware from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import fundsReducer from './reducers/fundsReducer'
import accountReducer from './reducers/accountReducer'
import userReducer from './reducers/userReducer'

export default configureStore({
  reducer: {
    funds: fundsReducer,
    account: accountReducer,
    user: userReducer
  },
  middleware: [thunkMiddleware]
});
