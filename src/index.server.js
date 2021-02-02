const express=require('express');
const env=require('dotenv');
const bodyParser = require('body-parser');

const mongoose=require('../db/mongoose.js');
const path= require('path');
const cors= require('cors');


//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes =require('./routes/cart');


const app=express();


//environment variable or just a constant
env.config();

app.use(cors());
app.use(express.json());
 //to send a request
 app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public',express.static(path.join(__dirname,'uploads')));



app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);


app.post('/data',(req,res,next)=>{
    res.status(200).json({
message:req.body
    });
});

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})