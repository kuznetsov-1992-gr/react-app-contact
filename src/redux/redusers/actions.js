import * as types from './actionsTypes';
import { auth } from '../../firebase';

export const  registerStart = () => ({
    type: types.REGISTER_START
    
});

export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});

export const  registerError = (answerError) => ({
    type: types.REGISTER_ERROR,
    payload: answerError.toString()
});


export const  loginStart = () => ({
    type: types.LOGIN_START
    
});

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

export const  loginError = (answerError) => ({
    type: types.LOGIN_ERROR,
    payload: answerError.toString()
});

export const logoutStart = () => ({
    type: types.LOGOUT_START
});

export const logoutSuccess = () => ({
    type: types.REGISTER_SUCCESS,
    
});

export const logoutError = (answerError) => ({
    type: types.LOGOUT_ERROR,
    payload: answerError
});

export const registerInitiate = (email, password, displayName) => {
    return dispatch => {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user))
        })
        .catch(answerError => dispatch(registerError(answerError.message)))
    }
}


export const loginInitiate = (email, password) => {
    return dispatch => {
        dispatch(loginStart)
        auth
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(loginSuccess(user))
        })
        .catch(answerError => dispatch(loginError(answerError)))
    }
}

export const logoutInitate = () => {
    return dispatch =>{
        dispatch(logoutStart())
        auth
        .signOut()
        .then(resp => dispatch(logoutSuccess()))
        .catch(answerError => dispatch(logoutError(answerError.message)))
    }
}
