import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

const Home = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/route/")
    .then((response)=>{
      setProducts(response.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  })

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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      ))}
    </div>
  )
}

export default Home