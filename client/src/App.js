import { useState } from 'react';
import './App.css'
import Particle from './components/Particle';
import LoginForm from './Login';
import Login from './Login';
import { Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Dynamic from './Dynamic';

function App() {
 
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Login/> }/>
      <Route exact path='/register' element={<Signup/>} />
      <Route exact path='/dashboard' element={<Dynamic/>}  />
      

    
    </Routes>
    </div>
    
    
  );
}

export default App;