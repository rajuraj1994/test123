const express=require('express');
const mongoose=require("mongoose");


const app=express();

const url="mongodb://localhost:27017/mernEcommerce";


const connect=mongoose.connect(url,{
    useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true
});

connect.then(db=>{
    console.log("Connected to database");
},
err=>{
    console.log(err)
}) ;

