import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";
import Header from './Header'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(()=>{

        if(user){
            navigate('/')
        }

    },[user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }


    return(
        <div>
            <Header  />
            <NavLink style={{fontSize: 30, textDecoration: 'none', color: 'white'}} to={'/login'} />
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder={'name'}/>
                <input type="text" value={email}  onChange={e => setEmail(e.target.value)} placeholder={'email'}/>
                <input type="text" value={password}  onChange={e => setPassword(e.target.value)} placeholder={'password'}/>
                <input type="text" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder={'password confirm'} />
                <button type="submit"> SIGN UP</button>
            </form>
            
        </div>
    )
}

export default Register;