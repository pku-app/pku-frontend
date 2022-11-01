import { createAction } from '@reduxjs/toolkit'
import api from '../../../services/api'

export function registerProduct(name, brand, fenilalanina){
    return dispatch =>{
        dispatch(registerProductRequest())
        
        return api.post('products/register',{
            "idKey": (name+brand),
            "name": name,
            "brand": brand,
            "fenilalanina": fenilalanina
        })
        .then((response) => {
            dispatch(registerProductSuccess(null))
        }).catch((err) => {
            dispatch(registerProductFailure(err.message))
        })
    }
}
  
export const registerProductRequest = createAction('registerProduct/request')
export const registerProductSuccess = createAction('registerProduct/success')
export const registerProductFailure = createAction('registerProduct/failure')