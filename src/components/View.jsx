import React, {useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import{ db as firebaseDB} from '../firebase'

import './View.css'


const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        firebaseDB.child(`contacts/${id}`)
        .get()
        .then(data =>{
            if(data.exists()){
                setUser({...data.val()})
            }else{
                setUser({})
            }
        })
    }, [id])
    
    return (
        <div className="view-margin">
            <div className="view-block">
                <div >
                    <p>User Contact Detail</p>
                </div> 
                <div>
                <strong>ID:</strong> 
                <span>{id}</span>
                <br />
                <strong>NAME:</strong> 
                <span>{user.name}</span>
                <br />
                <strong>EMAIL:</strong> 
                <span>{user.email}</span>
                <br />
                <strong>CONTACT:</strong> 
                <span>{user.contact}</span>
                <br />
                <strong>{ user.indexAdress? 'INDEX: ' : ''}</strong> 
                <span>{user.indexAdress}</span>
                <br />
                <strong>{user.adress ? 'ADRESS: ' : ''}</strong> 
                <span>{user.adress}</span>
                <br />
              
                    <Link className="link-position"  to={'/'}>
                        <button className="beck-link" >Go beck </button>
                    </Link>
                
                </div>
            </div>
        </div>
    )
}

export default View;