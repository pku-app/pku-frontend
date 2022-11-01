import { createAction } from '@reduxjs/toolkit'
import api from '../../../services/api'

export function signIn(email, password){
  return dispatch =>{
    dispatch(signInRequest())
    
    return api.post('auth/signin',{
      "email": email,
      "password": password
    })
    .then((response) => {
      dispatch(signInSuccess(response.data.accessToken))
    }).catch((err) => {
      dispatch(signInFaliure(err.message))
    })
  }
}

export const signInRequest = createAction('signIn/request')
export const signInSuccess = createAction('signIn/success')
export const signInFaliure = createAction('signIn/faliure')

// It will be refactored when the API feature is finished
export const signOut = createAction('signOut/request')

