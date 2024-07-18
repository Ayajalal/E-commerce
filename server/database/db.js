const mongoose= require('mongoose')
const dbUrl="mongodb+srv://aya:aya123@projecttest.syjtmjx.mongodb.net/?retryWrites=true&w=majority&appName=projectTest"
const connectDb=async ()=>{
    try{
await mongoose.connect(dbUrl)
        console.log('Database is connected');

    }
    catch(err){
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
}
module.exports=connectDb;
