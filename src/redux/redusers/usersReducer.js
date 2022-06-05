// import { errorUsersReducer, getUsersReducer, loadingUsersReducer } from "./actions";
import * as types from "./actionsTypes";


const initialStete = {
    currentUser: null,
    loading: false,
    arror: null
}

const usersReduser = (state = initialStete, action) => {
    switch (action.type){
        case types.REGISTER_START: 
        case types.LOGIN_START:
        case types.LOGOUT_START:    
            return{
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_START:    
            return {
                ...state,
                currentUser: action.payload,
                loading: false
            }
        case types.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                loading: false
            }    
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:    

            return{
                ...state,
                error: action.payload,
                loading:false
            }    

        default:
            return state
    }
}

// export const loadUser = () => {
//     return async dispatch => {
//         dispatch(loadingUsersReducer())
//         try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         dispatch(getUsersReducer(data))
//         }catch(answerError){
//             dispatch(errorUsersReducer(answerError))
//         }
//     }
// }

export default usersReduser;