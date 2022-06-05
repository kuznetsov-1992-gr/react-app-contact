import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


import usersReduser from "./redusers/usersReducer";



export const store = createStore(combineReducers({
    users: usersReduser,
}), applyMiddleware(thunk))