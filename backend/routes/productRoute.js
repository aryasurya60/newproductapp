const express = require('express');
const Router = express.Router();
const jwt=require('jsonwebtoken');
const productmodel = require('../model/productData');


//adding middleware  

function verifyToken(req,res,next){
    let token=req.headers.token;

    try{
        if(!token)throw 'unauthorised access'
        let payload=jwt.verify(token,"secret")
          if(!payload) throw 'unauthorised access'
          next()
    }

    catch(error){
        res.json({message:error})
    }
}
Router.use(express.json())

Router.get('/', async(req,res)=>{
    const product=await productmodel.find()
    res.json(product)
})

Router.post('/add', verifyToken,async(req,res)=>{
    const newProduct=new productmodel(req.body)
    await newProduct.save()
    res.json(newProduct)
})

Router.put('/update/:id',verifyToken,async(req,res)=>{
    try{
        
    const updateProduct=await productmodel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
res.json(updateProduct)
}
catch(err){
    console.log(err)
    res.status(401).send('cant be updated')
}
    
})

Router.delete('/delete/:id',verifyToken,async(req,res)=>{
    await productmodel.findByIdAndDelete(req.params.id)
    res.send("product deleted successfully")
})

module.exports=Router;
