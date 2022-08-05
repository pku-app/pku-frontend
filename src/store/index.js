import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './modules/Login/reducer'

const reducer = {
  loginReducer: loginReducer,
}

const Store = configureStore({
  reducer,
  devTools: true,
});

export default Store