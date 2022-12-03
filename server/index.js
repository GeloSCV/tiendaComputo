const express= require('express');
require('dotenv').config()
const morgan= require('morgan');
const marketRouter= require('./routes/market.route');
const cors=require('cors');

const app= express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
 app.use(morgan('dev'));
 app.use(express.json())
 app.use(marketRouter)

 app.listen(2424)
 console.log('server on port 2424')