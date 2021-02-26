const Shoe = require('../models/Shoe');
const Brand = require('../models/Brand');

const mongoDataMethods = {
    getAllShoes : async (condition = null) => 
        condition === null ? await Shoe.find() : await Shoe.find(condition),
    getShoeById: async id => await Shoe.findById(id),
    createShoe: async args => {
        const newShoe = new Shoe(args)
        return await newShoe.save()
    },
    getAllBrands : async ()=> await Brand.find(),
    getBrandById: async id => await Brand.findById(id),
    createBrand: async args => {
        const newBrand = new Brand(args)
        return await newBrand.save()
    },
}





module.exports = mongoDataMethods





