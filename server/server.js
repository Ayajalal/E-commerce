const express = require('express');
const connectDb=require('./database/db')
const cors = require('cors');
const multer=require('multer')
const donenv=require('dotenv')
const path=require('path')
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

const mongoose = require('mongoose');
const app = express();
app.use("/uploads",express.static("uploads"))

const port = process.env.PORT || 5000 ;
connectDb()
//upload image

// CORS Middleware
const corsOptions = {
    origin: 'http://localhost:5174',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));



// Middleware to parse JSON
app.use(express.json());
// Products Routes
const productsPath = require("./routers/products");
const shoppingCartPath=require("./routers/shopingCart")

app.use("/products",productsPath);
app.use("/shoppingCart",shoppingCartPath)

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
