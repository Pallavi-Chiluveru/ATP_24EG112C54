//create a simple express server and connect it to mongodb using mongoose
import exp from 'express'
import {connect} from 'mongoose'  
//import productAPP from productAPI.js
import {productApp} from './productAPI.js'

//create express application
const app=exp();
//add body serverver to handle json data in req body
app.use(exp.json());


//forward request to productAPI if path starts with /product-api
app.use("/product-api",productApp)


//start server
//connect to database
async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/mydb1");
        console.log("connected to DB successfully");
        app.listen(4000, () => console.log('Server started on port 4000'));  

    }
    catch(err){
    console.log("err in DB connection", err);
    }

}
connectDB();

//app.use handling middleware only when error occcurs
app.use((err, req, res, next) => {
  console.log(err.name)

  //validation error
  if(err.name=="ValidationError"){
     res.status(400).json({message:"error occured",error:err.message})
     return 
  }

  //caste error=>mongoose error when invalid id is passed in req
  if(err.name=="CastError"){
        res.status(400).json({message:"invalid id",error:err.message})
        return 
  }

       //send server side error
       res.status(500).json({message:"this is server side error", error:err.message})
})

