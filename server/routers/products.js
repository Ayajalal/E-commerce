const express=require('express')
const router=express.Router();
const multer=require('multer')
const path=require('path')

const joi=require('joi')
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const products=require('../models/products.model')
const { v4: uuidv4 } = require('uuid');

var uniqueId = uuidv4()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, uniqueId  + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

/*
@desc create product
@route /products
@method post
@access public
 */
router.post('/', upload.array("images",10) ,async (req,res)=>{
    const {error} =validateCreateProduct(req)
    if(error){
        console.log(error)
        return res.status(400).json({message:error.details[0].message})
    }
    try{
        const product=new products({
            id:uuidv4(),
            images:req.file.filename,
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
//delete
router.delete("/:id",async (req,res)=>{
const product=await products.findById(req.params.id)
    if(product){
        await products.findByIdAndDelete(req.params.id)
        res.status(200).json("delete this product ")
    }
    else{
        res.status(404).json("this product not found ")
    }
})
//update product
router.put("/:id", upload.array('images', 3), async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Uploaded Files:', req.files);

    // Validate input
    const { error } = validateUpdateProduct(req) || { error: null };
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const productId = req.params.id;
    const newImages = req.files.map(file => file.filename);

    try {
        const updatedProduct = await products.findByIdAndUpdate(
            productId,
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    description: req.body.description,
                    rating: req.body.rating
                },
                $push: { images: { $each: newImages } } // Append new images
            },
            { new: true }
        );

        console.log('Updated Product:', updatedProduct);

        if (updatedProduct) {
            res.status(200).json({ message: "Product has been updated", updatedProduct });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating the product", error: error.message });
    }
});

const validateCreateProduct=((req)=>{
const schema=joi.object({
    images:joi.string().required().min(3),
    title:joi.string().required().min(3),
    price:joi.string().required().min(1),
    description:joi.string().required().min(3),
    category:joi.string().required().min(3),
    rating:joi.string().required().min(1),

})
    const{error}=schema.validate(req.body)
    return error;
})

const validateUpdateProduct=((req)=>{
    const schema=joi.object({
        images:joi.string().min(3),
        title:joi.string().min(3),
        price:joi.string().min(1),
        description:joi.string().min(3),
        category:joi.string().min(3),
        rating:joi.string().min(1),

    })
    const{error}=schema.validate(req.body)
    console.log(error,"test")
    return error;
})

module.exports = router;
