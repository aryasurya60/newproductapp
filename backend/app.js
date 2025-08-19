const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const productData = require('./model/productData')
const userData=require('./model/userData')
const userRoute = require('./routes/userRoute');
const productRoute=require('./routes/productRoute')
const connectDB = require('./connection');


const port = process.env.port

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.get("/api", (req,res) => {
  res.json({message : "API is working"});
});
app.use('/route', productRoute);
app.use('/user', userRoute);

connectDB();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
