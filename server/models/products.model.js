const mongoose=require('mongoose')

const products=new mongoose.Schema({

        images:{
            type:[String],
            required:true,
            trim:true,
        },
        title:{
            type:String,
            required:true,
            trim:true,
            minLength:3
        },
        price:{
            type:Number,
            required:true,
            trim:true,
            minLength:1
        },
        description:{   type:String,
            required:true,
            trim:true,
            minLength:3},
        rating:{   type:Number,
            required:true,
            trim:true,
            minLength:1},
        category:{
            type:String,
            required:true,
            trim:true,
            minLength:3
        }},
    {
        timestamp:true
    }
);
const AllProducts=mongoose.model("Products",products)
// eslint-disable-next-line no-undef
module.exports=AllProducts






