import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const PrivateRoute = () => {

    const token=localStorage.getItem('token');
    let verifyUser=false
    if (token)
    {
        verifyUser=true
    }
    return(
        verifyUser?<Outlet/>:<Navigate to ={'/v'}/>
    )
}


export default PrivateRoute