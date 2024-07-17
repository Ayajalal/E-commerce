const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000 ;

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

// Database Connection
mongoose.connect("mongodb+srv://aya:aya123@projecttest.syjtmjx.mongodb.net/?retryWrites=true&w=majority&appName=projectTest")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Example Route
app.get('/test', (req, res) => {
    res.json({ message: 'This is a test response' });
});
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // No token, unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token, forbidden
        req.user = user;
        next();
    });
};
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
