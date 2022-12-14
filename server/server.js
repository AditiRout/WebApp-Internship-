const express=require('express')

const mongoose=require('mongoose')
const dotenv = require("dotenv");
const { notFound, errorHandler }=require("./middlewares/errormiddlewares")
const { resolve, join } =require( "path");
const bodyParser = require("body-parser")
const cors=require('cors')

const userRoutes=require('./routes/userroutes')

dotenv.config()
const moment=require('moment')

let d1=moment()
console.log(typeof(d1));




const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); // to accept json data
app.use(cors({
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
 
  
 }))


const url=process.env.DB_URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
 }, () => {
   console.log('Database connected');
 })

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

//login and dashboard for students
app.use("/api/user", userRoutes);//login and dashboard for admins
app.use(bodyParser.urlencoded({ extended: true }));

app.use(notFound);
app.use(errorHandler);