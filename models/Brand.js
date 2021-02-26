const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name:String,
    image:String    
})

module.exports = mongoose.model('brands',BrandSchema);

