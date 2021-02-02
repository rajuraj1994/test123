const {check, validationResult} =require('express-validator');

exports.validateRequest=[
    check('firstName')
    .notEmpty()
    .withMessage('firstname is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastname is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be  at least six characters'),
    

];

exports.validateSigninRequest=[
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be  at least six characters'),
    

];

exports.isRequestValidated=(req,res,next)=>{
   const errors= validationResult(req);
   if(errors.array().length>0){
       return res.status(400).json({error:errors.array()[0].msg})
   }
   next();
}