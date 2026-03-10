
// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId


//Make the following routes protected
//      -read users and products
//      -read user and product by id
//      -update user and product 
//     -delete user and product 

import exp from 'express'
import {ProductModel} from './productModel.js'
 


export const productApp = exp.Router()

productApp.post("/products", async (req, res) => {
    const newProduct=req.body;
    const newProductDocument=new ProductModel(newProduct);      
    const result=await newProductDocument.save()
    console.log("new product created", result);
    res.status(201).json({message:"Product created"})
})

productApp.get("/products",async(req,res)=>{
    let productList = await ProductModel.find()
    res.json({message:"products",playload:productList})
})

productApp.get("/products/:id",async(req,res)=>{
    const pid = req.params.id
    const productObj = await ProductModel.findById(pid)
    res.status(200).json({message:"product",payload:productObj})
})

productApp.put("/products/:id",async(req,res)=>{
    const modifiedProduct = req.body;
    const pid=req.params.id
    const updatedProduct = await ProductModel.findByIdAndUpdate(pid,{$set:{...modifiedProduct}},{new:true})
    if(!updatedProduct){
        res.status(404).json({message:"product not found"})
        return
    }
    res.status(200).json({message:"product updated",payload:updatedProduct})
})

productApp.delete("/products/:id",async(req,res)=>{
    const pid = req.params.id
    const deletedProduct = await ProductModel.findByIdAndDelete(pid)
    if(!deletedProduct){
        res.status(404).json({message:"product not found"})
        return 
    }
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})