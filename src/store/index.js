import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './modules/Login/reducer'
import { signUpReducer } from './modules/SignUp/reducer'
import { signUpFormReducer } from './modules/SignUp/Form/reducer'

const reducer = {
  loginReducer: loginReducer,
  signUpReducer: signUpReducer,
  signUpFormReducer: signUpFormReducer,
}

const Store = configureStore({
  reducer,
  devTools: true,
});

export default Store