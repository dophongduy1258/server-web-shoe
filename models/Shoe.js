const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
    name:String,
    price:String,
    size:Number,
    color:String,
    rate:Number,
    description:String,
    image:String,
    brandId:String    
})

module.exports = mongoose.model('shoes',ShoeSchema);

