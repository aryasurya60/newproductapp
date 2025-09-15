import React from 'react'
import Login from './component/Login'
import Add from './component/Add'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'
const App = () => {
  return (
    <div>
      <Navbar/><br></br>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     {/* <Route element={PrivateRoute}> */}
     <Route path='/add' element={<Add/>}></Route>
       {/* 
       
       
       */}
       </Routes>
     
     
     
     
    </div>
  )
}

export default App
