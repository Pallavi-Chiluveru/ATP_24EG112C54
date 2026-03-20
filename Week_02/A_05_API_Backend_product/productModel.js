 //Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)

import {Schema,model} from "mongoose";
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"Product is required"]
    },
    productName:{
        type:String,
        required:[true,"ProductName is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"price must be minimum 10000"],
        max:[50000,"price must be maximum 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
})
 

export const ProductModel = model("product",productSchema)