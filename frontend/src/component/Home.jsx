import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterception';

const Home = () => {
  const [products,setProducts]=useState([])
  
  const token=localStorage.getItem('token');
  useEffect(()=>{
    axios.get("http://localhost:5000/route/")
    .then((response)=>{
      setProducts(response.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  let deleteproduct=(product_id)=>{
    axiosInstance.delete('http://localhost:5000/route/delete/'+product_id)
    .then((res)=>{
      window.location.reload();
    })
    .catch((error)=>{
      console.log(error)
    })

    
  }
  let navigate=useNavigate();
  let updateproduct=(Blog)=>{
    navigate('/add',{state:{Blog}})
    }
    
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'50px',margin:20}}>
      {products.map((product)=>(

      
     <Card sx={{ maxWidth:345  }}>
      <CardMedia
      component="img"
        sx={{ height:300,objectFit:"contain"}}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography>
        <Typography>{product.status}</Typography>
      </CardContent>
      <CardActions>
        {token &&(
          <>
        <Button size="small" onClick={()=>updateproduct(product)}>Update</Button>
        <Button size="small" onClick={()=>deleteproduct(product._id)}>Delete</Button>
         </>
        )}
        <Button size="small">Learn More</Button>
       
      </CardActions>
    </Card>
      ))}
    </div>
  )
}

export default Home