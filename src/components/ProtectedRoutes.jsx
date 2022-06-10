import React from "react";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../redux/redusers/selectors";
import LoadingToRedirect from "./LoadingToRedirect";

const ProtectedRoures = ({children}) =>{

    const user  = useSelector(currentUserSelector);
    if(!user){
        return <LoadingToRedirect/>
    }
    return children;

    
}

export default ProtectedRoures;