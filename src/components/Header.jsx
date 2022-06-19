import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div style={{width: '100%', height: 70, background: 'red', color: 'white'}} >
            <NavLink to={'/login'} ></NavLink>
        </div>
    )
}

export default Header;