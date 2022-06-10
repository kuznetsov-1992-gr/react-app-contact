import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/')
            console.log(user)
        }
        console.log(user)
    }, [user, navigate])

  

    const handlSubmit = (e) => {
        e.preventDefault();
        if(!password || !email){
            return
        }
        dispatch(loginInitiate(email, password))

    }

    



    return (
        <div>
            <h2>LOGIN</h2>
            
            <form onSubmit={handlSubmit}>
                <input placeholder="mail" type="text" value={email}  onChange={e => setEmail(e.target.value)}/>
                <input placeholder="password" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage;