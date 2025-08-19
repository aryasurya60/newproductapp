import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterception';


const Add = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    status: ''
  });


  let location=useLocation();
      useEffect(()=>{
        if (location.state!=null){
          setForm({...form,title:location.state.Blog.title,
            description:location.state.Blog.description,
            image:location.state.Blog.image,
            status:location.state.Blog.status})
        }
      },[])


  const navigate = useNavigate();

  function submitform(e){
    e.preventDefault();
    if (location.state!=null){
      axiosInstance.put('http://localhost:5000/route/update/'+location.state.Blog._id,form)
      .then((res)=>{
        alert('updated')
        navigate('/add')
      })
      .catch((error)=>{
        console.log(error)
      })
    }else{
    e.preventDefault();

    axiosInstance.post('http://localhost:5000/route/add', form)
      .then((res) => {
        console.log('Product added:', res.data);
        alert('Product added successfully!');
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to add product');
      });
  }
}
  // to track the current location,use uselocation
      
  return (
    <div style={{ marginLeft: "400px", marginTop: "80px" }}>
      <h2 style={{ marginLeft: "100px" }}>ADD PRODUCT</h2>
      <Box
        component="form"
        onSubmit={submitform}
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="title"
          variant="outlined"
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form,title: e.target.value })}
        /><br />

        <TextField
          label=" description"
          variant="outlined"
          type="text"
          value={form.description}
          onChange={(e) => setForm({ ...form,description: e.target.value })}
        /><br />

        <TextField
          label="Status"
          variant="outlined"
          type="text"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        /><br />

        <TextField
          label="Image"
          variant="outlined"
          type="text"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        /><br />

        <Button variant="contained" type="submit" style={{ backgroundColor: "green" }}>
          ADD PRODUCT
        </Button>
      </Box>
    </div>
  );
}

export default Add;



