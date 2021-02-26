const express = require('express');
const {ApolloServer} = require('apollo-server-express')
const app = express();
const mongoose = require('mongoose');


const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const mongoDataMethods = require('./data/db');



const connectDB = async () =>{
    try{
     await mongoose.connect(
        'mongodb+srv://phamduy:123@mydata.2fyvc.mongodb.net/MyData',
        {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
        }
    )
     console.log('Connect mongoDB success !');   
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}


connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({mongoDataMethods})
})

server.applyMiddleware({app})


app.listen(5000,()=>{
    console.log(`Connect server http://localhost:4000${server.graphqlPath}`);
})


