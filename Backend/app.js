const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./route/user.routes')
const captainRoutes = require('./route/captain.routes')
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('Hey Anshuman')
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes);

module.exports = app;