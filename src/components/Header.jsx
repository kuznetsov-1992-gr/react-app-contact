import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutInitate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";
import CastomLink from "./CastomLink";


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
       <div>
           <Link to={'/'}>
               <p>Contact App</p>
           </Link>
           <div>
               <CastomLink to={'/'}>Home</CastomLink>
               <CastomLink to={'/addContact'}>Add Contact</CastomLink>
               <Link to={'/about'}>About</Link>
               {user ? (
                    <p style={{cursor: 'pointer'}} onClick={handleAuth}> Sign Out</p>
               ) : (
                   <CastomLink to={'/login'}>Sign in</CastomLink>
               )}
           </div>
       </div>
        
    )
}

export default Header;