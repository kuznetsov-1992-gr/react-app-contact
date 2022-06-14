import React from "react";
import { Link, useMatch } from "react-router-dom";




const CastomLink = ({to, children}) =>{
    const match = useMatch(to);

    return(
        <Link to={to} className={match ? 'active' : ''} >
            <p >
                {children}
            </p>
        </Link>
    )
};

export default CastomLink;