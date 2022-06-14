import React, {useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import{ db as firebaseDB} from '../firebase'


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
        <div>
            <div>
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
                <Link to={'/'}>
                    <button>Go beck</button>
                </Link>
               
            </div>
        </div>
    )
}

export default View;