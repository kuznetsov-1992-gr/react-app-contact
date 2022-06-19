import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";
import './AddContactStyle.css'

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
            
            <form style={{display: 'block', justifyContent: 'space-around'}} onSubmit={handlSubmit}>
                <input className="input-add" placeholder="mail" type="text" value={email}  onChange={e => setEmail(e.target.value)}/>
                <input className="input-add" placeholder="password" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                <input className="btn-save" type="submit" />
            </form>
        </div>
    )
}

export default LoginPage;