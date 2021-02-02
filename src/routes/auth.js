 const express=require('express');
 const { signup, signin} =require('../controller/auth')
 const router=express.Router();

const { validateRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
 

 router.post('/signup',validateRequest,isRequestValidated,signup);
 router.post('/signin',validateSigninRequest,isRequestValidated,signin);


//  router.post('/profile',requireSignin,(req,res)=>{
//      res.status(200).json({user:'profile'})
//  });

 


 module.exports=router;