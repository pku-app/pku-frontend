import { LoginTypes } from './ActionsTypes'

export function signInRequest(Email, Senha) {
    return{
        type: LoginTypes.SIGN_IN_REQUEST,
        payload: {Email, Senha},
    }
}


export function signInSuccess(data){
    return{
        type: LoginTypes.SIGN_IN_SUCCESS,
        payload: {data},
    }
}

export function signInError(){
    return{
        type: LoginTypes.SIGN_IN_FAILURE,
    }
}

/*
export function signInFailure() {
    
}
*/