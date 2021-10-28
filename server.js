const env = require('dotenv').config();
const dburi = process.env.MONGOURI;
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const mongoose  = require('mongoose');
const typeDefs = require("./schema/typedefs")
const resolvers = require("./schema/index")




async function main(){

//Connect to the database cluster..
  await mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
  console.log('Connected to atlas')

//Initialize the express app instance and apollo server..
  const app = express();
  const server = new ApolloServer({typeDefs,resolvers});
  
//Apply the express app middleware to apollo-gql-server..
  server.applyMiddleware({ app });

  
  app.listen({ port: 4000 })
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  return { server, app };
}

//Run the async function
main()

  