const {gql} = require('apollo-server-express')


const typeDefs = gql`
    type Shoe{
        id: ID
        name: String
        price: Int
        size:Int
        color:String
        rate:Int
        description:String 
        image: String
        brandId:Brand

    }

    type Brand{
        id:ID!
        name:String
        shoes:[Shoe]
    }


    #ROOT TYPE
    type Query{
        shoes : [Shoe]
        shoe (id:ID!) : Shoe
        brands : [Brand]
        brandId (id:ID!) : Brand
    }

    type Mutation{
        createShoe(name:String,price:Int,size:Int,color:String,rate:Int,description:String,image:String,brandId:ID!):Shoe
        createBrand(name:String,image:String):Brand
    }

`

module.exports = typeDefs;

