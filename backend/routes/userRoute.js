const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
 const userModel=require('../model/userData')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/login',async(req,res)=>{
    try{
            const user=await userModel.findOne({email:req.body.email})
            if(!user){
                return res.status(404).send({message:"User not found"})
            }
            if(user.password===req.body.password){
                const payload={email:req.body.email,password:req.body.password}
                const token=jwt.sign(payload,"secret")
                res.status(200).send({message:"Login successful...",usertoken:token})
            }
            else{
                res.status(401).send({message:"Invalid credentials..."})
            }
        }
        catch(err){
            console.log(err)
            res.status(500).send("Server is error...")
        } 
})


module.exports=router;



