const express=require('express')
const allProducts=require('../models/products.model')
const router=express.Router();
const shoppingCart=require('../models/shoppingCart.model')
router.post('/',async (req,res)=>{
    let itemIndex = cart.products.findIndex(p => p.productId == productId);

    try{
      const shoppingCartAdd=new shoppingCart({
          id:req.body.id,
          name:req.body.quantity
      })
      const result=await shoppingCartAdd.save()
      res.status(201).json(result)
  }
  catch (error){
      res.status(404).json({error:error})
  }

})
module.exports=router