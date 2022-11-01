import { createAction } from '@reduxjs/toolkit'
import api from '../../../services/api'

export function SignUp({
  email,
  password,
  name,
  type,
  health_info = {
    birthdate,
    height,
    weight,
  }
}){
  return dispatch =>{
    dispatch(signUpRequest())
    
    return api.post('auth/signnup',{
      "email": email,
      "password": password,
      "name": name,
      "type": type,
      "health_info": health_info
    })
    .then((response) => {
      dispatch(signUpSuccess(response.data.accessToken))
    }).catch((err) => {
      dispatch(signUpFaliure(err.message))
    })
  }
}

export const signUpRequest = createAction('signUp/request')
export const signUpSuccess = createAction('signUp/success')
export const signUpFaliure = createAction('signUp/failure')

