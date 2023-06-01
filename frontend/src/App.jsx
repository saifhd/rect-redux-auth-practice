import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AppLayout from './Layouts/AppLayout'


function App() {

  return (
    <div className="App">
      <Login /> 
      {/* <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
