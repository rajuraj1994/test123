const express=require('express');
const { validationResult } = require('express-validator');
const { signup, signin, signout} =require('../../controller/admin/auth');
const {requireSignin} =require('../../common-middleware');
const { validateRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');

const router=express.Router();

router.post('/admin/signup',validateRequest,isRequestValidated,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);
router.post('/admin/signout',requireSignin,signout);







module.exports=router;