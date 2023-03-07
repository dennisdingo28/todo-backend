const express = require('express');
const todos = require('./routes/todos');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

app.use('/api/todos',todos);
const PORT=process.env.PORT || 5000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('connected to the db');
        app.listen(PORT,()=>{
            console.log(`server is listening to port ${PORT}...`);
        })
    }catch(err){
        console.log(err);
    }
}

start();