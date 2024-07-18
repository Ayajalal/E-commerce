const express = require('express');
const connectDb=require('./database/db')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000 ;
connectDb()

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
app.use("/products", productsPath);

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
