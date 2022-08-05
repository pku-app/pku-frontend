import { createReducer } from '@reduxjs/toolkit'
import { 
  signInRequest, 
  signInSuccess, 
  signInFaliure, 
  signOut 
} from './actions'

const initialState = {
  token: null,
  loading: false,
  message: null,
}

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInRequest, (state, action) => {
      state.loading = true
    })
    .addCase(signInSuccess, (state, action) => {
      state.loading = false
      state.token = action.payload
    })
    .addCase(signInFaliure, (state, action) => {
      state.loading = false
      state.message = action.payload
    })
    .addCase(signOut, (state, action) => {
      state.loading = false
      state.token = null
    })
    
})
