const mongoose = require('mongoose');
const foodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        name:{
           type:String,
           required:true},
        time:{
           type:String,
           required:true
        }
    }
});

module.exports=mongoose.model('Food',foodSchema);