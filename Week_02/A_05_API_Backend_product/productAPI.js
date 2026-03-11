
// Create REST API for Product resources with below End points

//   Create New Product            
//   Read all Products             
//   Read a Product by brand         
//   Update a Product by ID        
//   Remove a Product by ID        


//load libraries from express
import exp from 'express'

import {ProductModel} from './productModel.js'

//create router for productAppand export it to other files to use it 
export const productApp = exp.Router()

//create new product
productApp.post("/products", async (req, res) => {
    const newProduct=req.body;
    const newProductDocument=new ProductModel(newProduct);      
    const result=await newProductDocument.save()
    console.log("new product created", result);
    res.status(201).json({message:"Product created"})
})

//read all products
productApp.get("/products",async(req,res)=>{
    let productList = await ProductModel.find()
    res.json({message:"products",payload:productList})
})

//read a product by brand
productApp.get("/products/brand/:brand", async (req, res) => {
    const brandName = req.params.brand;  
    const productObj = await ProductModel.find({ brand: brandName }) 
    res.status(200).json({ message: "product", payload: productObj }) 
})



//update a product by ID
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

//delete product by ID
productApp.delete("/products/:id",async(req,res)=>{
    const pid = req.params.id
    const deletedProduct = await ProductModel.findByIdAndDelete(pid)
    if(!deletedProduct){
        res.status(404).json({message:"product not found"})
        return 
    }
    res.status(200).json({message:"product deleted",payload:deletedProduct})
})