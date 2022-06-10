import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutInitate } from "../redux/redusers/actions";
import { currentUserSelector } from "../redux/redusers/selectors";


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
               <Link to={'/'}>Home</Link>
               <Link to={'/addContact'}>Add Contact</Link>
               <Link to={'/about'}>About</Link>
               {user ? (
                    <p style={{cursor: 'pointer'}} onClick={handleAuth}> Sign Out</p>
               ) : (
                   <Link to={'/login'}>Sign in</Link>
               )}
           </div>
       </div>
        
    )
}

export default Header;