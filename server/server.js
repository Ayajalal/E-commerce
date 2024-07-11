// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef

const express=require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const cors = require('cors');
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const mongoose=require('mongoose')
// eslint-disable-next-line @typescript-eslint/no-var-requires

//init app
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const productsPath=require("./routers/products")
mongoose.connect("mongodb+srv://aya:aya123@projecttest.syjtmjx.mongodb.net/?retryWrites=true&w=majority&appName=projectTest").then(()=>{
    console.log("success connection")
}).catch((error)=>{console.log(error)})
app.use(cors())
//apply middleware
app.use(express.json())
//Routes
app.use("/products",productsPath)

app.listen(port,()=>{
    console.log("server is listining ")
})

module.exports=app
