import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {db as firebaseDB} from '../firebase'

import './AddContactStyle.css'

const initialStete = {
    name: '',
    email: '',
    contact: '',
}


const AddContactPage = () =>{

    const [state, setState] = useState(initialStete);

    const {name, email, contact} = state;

    const navigete = useNavigate();
    const {id} = useParams();

    const handelSubmit = (e) => {
       e.preventDefault();
       if(!name || !email || !contact){
            toast.error('Please provide value into each input filed')
       }else{
        if(!id){
           firebaseDB.child('contacts').push(state, (err) => {
                if(err){
                    toast.error(err)
                }else{
                    toast.success('Contact added successfully')
                }
           }) 
        }else{
            firebaseDB.child(`contacts/${id}`).set(state, (err)=> {
                if(err){
                    toast.error(err);
                }else{
                    toast.success(`Contact update successfully`)
                }
            })
        }
       }
    }

    const handleInputChenge = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }

    return (
        <div>
            <form className="input-form" onSubmit={handelSubmit}>
                <div className="position">
                    <label className="lbl-input" htmlFor={'name'}>name</label>
                    <input className="input-add" id="name" placeholder="name" name={'name'} value={name || ''} type="text" onChange={handleInputChenge}/>
                </div>
                <div className="position">
                    <label className="lbl-input" htmlFor={'email'}>email</label>
                    <input className="input-add" id="email" placeholder="email" name={'email'} value={email || ''} type="email" onChange={handleInputChenge}/>
                </div>
                <div className="position">
                    <label className="lbl-input" placeholder="contact" htmlFor={'contact'}>contact</label>
                    <input className="input-add" placeholder="phone" id="contact" name={'contact'} value={contact || ''} type="tel" onChange={handleInputChenge}/> 
                </div>
                <div className="position">
                    <input className="btn-save" type="submit" value={id ? 'update' : 'save'} />
            
                </div>
            </form>    

        </div>
    )
}

export default AddContactPage;