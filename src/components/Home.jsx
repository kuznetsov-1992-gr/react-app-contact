import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";

const Home = () => {
    const user = useSelector(currentUserSelector)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleAuth = () => {
        if(user){
            dispatch(logoutInitate())
        }
        setTimeout(()=> {
            navigate('/login')
        }, 3000)
   
    }

    return(
        <div>
            <h2>home</h2>
            <button onClick={handleAuth}> OUT LOGIN</button>
        </div>
    )
}

export default Home;