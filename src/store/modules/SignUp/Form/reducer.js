import { createReducer, createAction } from '@reduxjs/toolkit'

export const pageSignInfo = createAction('signUpForm/pageSignInfo')
export const pageHealthInfo = createAction('signUpForm/pageHealthInfo')

const initialState = {
  formPage: 0
}

export const signUpFormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pageSignInfo, (state) => {
      state.formPage = 0
    })
    .addCase(pageHealthInfo, (state) => {
      state.formPage = 1
    })  
})
