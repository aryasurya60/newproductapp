const express = require('express');
const Router = express.Router();
const productmodel = require('../model/productData');

Router.use(express.json())
Router.get('/', async(req,res)=>{
    const product=await productmodel.find()
    res.json(product)
})

Router.post('/add',async(req,res)=>{
    const newProduct=new productmodel(req.body)
    await newProduct.save()
    res.json(newProduct)
})

Router.put('/update/:id',async(req,res)=>{
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

Router.delete('/delete/:id',async(req,res)=>{
    await productmodel.findByIdAndDelete(req.params.id)
    res.send("product deleted successfully")
})

module.exports=Router;
