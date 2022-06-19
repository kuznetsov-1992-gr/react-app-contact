import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutInitate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";
import CastomLink from "./CastomLink";

import './Header.css'




const Header = () => {
    const user = useSelector(currentUserSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitate())
        }
        setTimeout(()=> {
             navigate('/login')
        }, 3000)
    }


    return(
       <div className="header">
           <Link className="logo" to={'/'}>
               <p>Contact App</p>
           </Link>
           <nav className="nav-link">
               
               <CastomLink  to={'/addContact'}>Add Contact</CastomLink>
               <CastomLink  to={'/about'}>About</CastomLink>
               {user ? (
                    <p className="out-link"  onClick={handleAuth}> Sign Out</p>
               ) : (
                   <CastomLink  to={'/login'}>Sign in</CastomLink>
               )}
           </nav>
       </div>
        
    )
}

export default Header;