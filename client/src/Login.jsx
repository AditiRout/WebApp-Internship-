import React, { Component } from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
const Login =()=>{
  const [password, setPassword] = useState()
  const [email, setemail] = useState()  
  const [Loading ,setLoading]=useState()
  
 
  const navigate = useNavigate();

  const submitHandler=async()=>{
    setLoading(true);
    if ( !email || !password ) {
      alert('Fill all details')
      
      return;
    }
    
    console.log( email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://web-backendapp.herokuapp.com/api/user/login",
        {
         
          email,
          password,
        
        },
        config
      );
     
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      alert('Success')
      navigate("/admin")
    } catch (error) {
      alert('Invalid')
      
      setLoading(false);
    }

  }
  
    return (
      <div >
        <div id='circle1'></div>
        <div id='circle2'></div>
       

        <form className='form2'>
        <div className='container'>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email} 
            placeholder="Enter your email"
            onChange={(e)=> setemail(e.target.value)}
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
        
        <div className="d-grid">
          <button type="submit" className="btn1 "  disabled={Loading}
                    onClick={submitHandler}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Not an user <Link to={'/register'}>Register Now</Link>
        </p>

        </div>
        
      </form>

      </div>
      
    )
  }

export default Login