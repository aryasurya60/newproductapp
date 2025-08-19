import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const capValue = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/user/login', form)
      .then((res) => {
        // console.log('form submitted:', res.data);
        // alert('Login successful');
        alert(res.data.message)
        if(res.data.usertoken){
          localStorage.setItem('token',res.data.usertoken);
          navigate('/login');
        }
        
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid credentials or server error");
        navigate('/');
      });

  }

  return (
    <div style={{ marginLeft: '40%' }}>
      <Box
        component="form"
        onSubmit={capValue}
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        /><br />

        <Button variant="contained" type="submit">Login</Button>
      </Box>
    </div>
  )
}

export default Login;
