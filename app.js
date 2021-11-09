const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

//import routes
const foodRoute= require('./routes/foods');
app.use('/foods',foodRoute);

//listening
mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
    console.log("Database Connected");
});
app.listen(7000);