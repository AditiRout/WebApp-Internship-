import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import Particle from './components/Particle';

const Dynamic = () => {
    const [formFields, setFormFields] = useState([
        { name: '', age: '' },
      ])

    const navigate=useNavigate()
      const logoutHandler = () => {
        localStorage.removeItem("userInfo");
       
       navigate('/')
      };
    
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = (e) => {
        e.preventDefault();
        formFields.forEach((form)=>{
          alert(form.name)
        })
      }
    
      const addFields = () => {
        let object = {
          name: '',
          age: ''
        }
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    
  return (
    <div><div className='container1' >
    <Particle/>
   
    <div className="App ">
    <form onSubmit={submit} className="form-wrap">
      {formFields.map((form, index) => {
        return (
          <div key={index} className="form-wrapper12">
            <input
              name='name'
              placeholder='Name'
              onChange={event => handleFormChange(event, index)}
              value={form.name}
              class="input-form" 
            />
            <input
              name='age'
              placeholder='Age'
              onChange={event => handleFormChange(event, index)}
              value={form.age}
              class="input-form" 
            />
            <button  class="btn-submit" onClick={() => removeFields(index)}>Remove</button>
          </div>
        )
      })}
    </form>
    <button class="btn-submit ab" onClick={addFields}>Add More..</button>
    <br />
    <button class="btn-submit ab " onClick={submit}>Submit</button>
    <br/>
    <button class="btn-submit ab" onClick={logoutHandler}>Logout</button>
  </div>
  </div></div>
  )
}

export default Dynamic