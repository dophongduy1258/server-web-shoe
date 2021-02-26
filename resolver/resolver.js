
const Shoe = require('../models/Shoe');
const Brand = require('../models/Brand');
const mongoDataMethods = require('../data/db');


const resolvers ={
    Query:{
        shoes: async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAllShoes()
        },
        shoe: async (parent,{id},{mongoDataMethods}) => 
            await mongoDataMethods.getShoeById(id)
        ,
        brands: async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.getAllBrands()
        },
        brandId: async (parent,{id},{mongoDataMethods})=> 
        await mongoDataMethods.getBrandById(id)
    },
    Shoe:{
        brandId : async ({brandId},args,{mongoDataMethods})=>
            // console.log(parent) {id:1,name:'adidas',price:230000,brandId:2}
            await mongoDataMethods.getBrandById(brandId)
    },
    Brand:{
        shoes : async ({id},args,{mongoDataMethods})=>
            await mongoDataMethods.getAllShoes({brandId:id})
    },


    Mutation:{
        createShoe : async (parent,args,{mongoDataMethods})=>{
            return await mongoDataMethods.createShoe(args)
        },
        createBrand : async (parent,args,{mongoDataMethods})=> {
             await mongoDataMethods.createBrand(args)
        }
    }



}



module.exports = resolvers;