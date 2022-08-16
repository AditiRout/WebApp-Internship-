
import React, { Component } from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {BsArrowLeftCircle} from 'react-icons/bs'

const Signup = () => {
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [password, setPassword] = useState()
    const [Loading, setLoading] = useState();

   
    const [email, setemail] = useState()
    const navigate=useNavigate();
    const submithandle=async()=>{
   
        setLoading(true)
        if (!firstname || !lastname || !email || !password ) {
         
          setTimeout(setLoading(false),4000) //set loading to false after 4 seconds
          return;
        }
       
        try {
          setLoading(true)
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post("https://web-backendapp.herokuapp.com/api/user",
            {
              firstname,
              lastname,
              email,
              password,
              
            },
            config
          );
          console.log(data);
         
          setLoading(false)
          
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate('/dashboard')
        } catch (error) {
            alert('Error')
          
         
        }
      
      }
  return (
    <div>
    <div id='circle1'></div>
    <div id='circle2'></div>
    <div id='tri'></div>
    <button className='tutu'> <Link to={'/'} className='tutla'>GO TO SIGNUP</Link></button>
    <form className='sideone form2'>
    <div className='container'>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>First Name</label>
      <input
        type="name"
        className="form-control"
        value={firstname} 
        placeholder="Enter your First name"
        onChange={(e)=> setfirstname(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Last Name</label>
      <input
        type="name"
        className="form-control"
        value={lastname} 
        placeholder="Enter your Last name"
        onChange={(e)=> setlastname(e.target.value)}
      />
    </div>
   
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />
    </div>
    
    <div className="d-grid">
      <button type="submit" className="btn1 "  disabled={Loading}
                onClick={submithandle}>
        Submit
      </button>
    </div>
   

    </div>
    
  </form>

  </div>
  
)
  
}

export default Signup