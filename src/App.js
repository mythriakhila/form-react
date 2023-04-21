import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';
import Submit from './components/Submit';

function App() {
  return (
    <div>
     
      <Routes>
       <Route  path="/" element={<Login/>} /> 
      <Route  path="/Register" element={<Register/>} />
      <Route  path="/Submit" element={<Submit/>} />

      </Routes>
    </div>
  )
}

export default App
