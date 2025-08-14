import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Login = () => {
  const [form,setform]=useState({
  name:"",
  password:"",
  email:"",
  phone:""
  })
  const navigate=useNavigate()
  function capValue (e){
    e.preventDefault();
    axios.post()
    const navigate =useNavigate();
  function capValue(e){
    e.preventDefault();
  axios.post('http://localhost:5000/user/login',form)
  .then((res)=>{
    console.log('form submitted:',form);
    alert(res.data.message);

    if(res.data.message==='login successful'){
      navigate('/user');
    }
  })
  .catch((err)=>{
   console.error(err);
   alert("invalid credentials or server error");
   navigate('/')

  })
}
}
  return (
    <div style={{marginLeft:'40%'}}>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="username" variant="outlined" /><br></br>
       <TextField id="outlined-basic" label="password" variant="outlined" /><br></br>
        <TextField id="outlined-basic" label="email" variant="outlined" /><br></br>
         <TextField id="outlined-basic" label="phone" variant="outlined" /><br></br>
          <Button variant="contained">Login</Button>
      
    </Box>
    </div>
  )
}

export default Login