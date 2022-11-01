import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './modules/Login/reducer'
import { signUpReducer } from './modules/SignUp/reducer'
import { signUpFormReducer } from './modules/SignUp/Form/reducer'
import { productRegReducer } from './modules/ProductRegistration/reducer'

const reducer = {
  loginReducer: loginReducer,
  signUpReducer: signUpReducer,
  signUpFormReducer: signUpFormReducer,
  productRegReducer : productRegReducer,
}

const Store = configureStore({
  reducer,
  devTools: true,
});

export default Store