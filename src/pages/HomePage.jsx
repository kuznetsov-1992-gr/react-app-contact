import React, { useEffect, useState } from "react";


import {db as firebaseDB} from '../firebase'
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";

import './HomePage.css'

const HomePage = () => {

    const [data, setData] = useState({});

    useEffect(data =>{
        firebaseDB.child(`contacts`).on(`value`, snapshot => {
            if(snapshot.val() !== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        });

        return () => {
            setData({});
        }
    },[])

    const onDelite = (id) => {
        if(
            window.confirm('Are you sure?')
        ){
            firebaseDB.child(`contacts/${id}`).remove(err => {
                if(err){
                    toast.error(err);
                }else{
                    toast.success(`Contact deleted successfully`)
                }
            })
        }
    }

    return(
        <div className="home-position">
           <table>
                <thead>
                    <tr>
                       <th>No.</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Contact</th>
                       <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index)=>{
                        return(
                           <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button className="btn-edit" >
                                            Edit
                                        </button>
                                        <button className="btn-delite" onClick={()=>onDelite(id)}>
                                            delite
                                        </button>
                                        <Link to={`/view/${id}`}>
                                            <button className="btn-view">
                                                View
                                            </button>
                                        </Link>
                                    </Link>
                                </td>

                           </tr> 
                        )
                    })}
                </tbody>
           </table>
        </div>
    )
}

export default HomePage;