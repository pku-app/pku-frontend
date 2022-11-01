import { createReducer } from '@reduxjs/toolkit'
import { 
    registerProductRequest, 
    registerProductSuccess, 
    registerProductFailure
} from './actions'

const initialState = {
    message: null
}

export const productRegReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerProductRequest, (state, action) => {
            state.message = null
        })
        .addCase(registerProductSuccess, (state, action) => {
            state.message = action.payload
        })
        .addCase(registerProductFailure, (state, action) => {
            state.message = action.payload
        })
})
