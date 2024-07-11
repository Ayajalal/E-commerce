const express=require('express')
const router=express.Router();
const joi=require('joi')
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const products=require('../models/products.model')

/*
@desc create product
@route /products
@method post
@access public
 */
router.post('/',async (req,res)=>{
    const {error} =validateCreateProduct(req)
    if(error){
        return res.status(400).json({message:error.details[0].message})
    }
    try{
        const product=new products({
            image:req.body.image,
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            rating:req.body.rating,
            category:req.body.category,

        })

        const result= await product.save()
        console.log(result,"test")
        res.status(201).json(result)//created Successfuly

    }
    catch (err){
console.log(err)
        res.status(500).json(err)
    }
})
router.get('/',async (req,res)=>{
    const allProducts=await products.find()
    res.status(200).json(allProducts)
})

const validateCreateProduct=((req)=>{
const schema=joi.object({
    image:joi.string().required().min(3),
    title:joi.string().required().min(3),
    price:joi.string().required().min(1),
    description:joi.string().required().min(3),
    category:joi.string().required().min(3),
    rating:joi.string().required().min(1),

})
    const{error}=schema.validate(req.body)
    return error;
})


module.exports = router;
