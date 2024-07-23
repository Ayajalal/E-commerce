const mongoose=require('mongoose')
const shoppingCartModal=new mongoose.Schema({
    products:[{
        productId:String,
        price:Number,
        quantity:Number,
        name:String
    }],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    },
    id: {type:String,
    required:true},
    quantity: {type:Number,
    required:true}
},
{timestamps:true})
const shoppingCart=mongoose.model("shoppingCart",shoppingCartModal)
module.exports=shoppingCart
