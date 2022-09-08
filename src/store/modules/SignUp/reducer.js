import { createReducer } from '@reduxjs/toolkit'
import { 
  signUpFaliure,
  signUpRequest,
  signUpSuccess
} from './actions'

const initialState = {
  token: null,
  loading: false,
  message: null,
}

export const signUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUpRequest, (state, action) => {
      state.loading = true
      state.message = null
    })
    .addCase(signUpSuccess, (state, action) => {
      state.loading = false
      state.message = null
      state.token = action.payload
    })
    .addCase(signUpFaliure, (state, action) => {
      state.loading = false
      state.message = action.payload
    })  
})
