const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./route/user.routes')
connectToDb();
app.use(cors());
app.use(express.json());
app.use('/users',userRoutes)
app.get('/',(req,res)=>{
    res.send('Hey Anshuman')
})

module.exports = app;