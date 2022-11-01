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
      state.message = null
    })
    .addCase(signInSuccess, (state, action) => {
      state.loading = false
      state.message = null
      state.token = action.payload
    })
    .addCase(signInFaliure, (state, action) => {
      state.loading = false
      state.message = action.payload
    })
    .addCase(signOut, (state, action) => {
      state.loading = false
      state.token = null
      state.message = null
    })
    
})
