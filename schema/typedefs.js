const {gql} = require('apollo-server-express')

//Define all the schema types for the graph database

module.exports = typeDefs = gql`
  
  scalar Date

  type Query {
    drivers: [Driver]
    getDriverById(_id:String):Driver

    passangers:[Passanger]
    getPassangerById(_id:String):Passanger

    vehicles:[Vehicle]
    getVehicleById(_id:String):Vehicle

    rides:[Ride]
    getRideById(_id:String):Ride
  }

  type Mutation{
    registerDriver(name:String!,email:String! ,password:String! ,cellNumber:String!, status:Boolean) :Driver
    removeDriverById(_id:String!):Driver

    registerPassanger(name:String!, email:String!, password:String!, cellNumber:String!): Passanger
    removePassangerById(_id:String!):Passanger

    createVehicle(driverId:ID!, make:String!, model:String!, color:String!, vehicleRegNo:String!):Vehicle
    removeVehicleById(_id:String):Vehicle

  }

  type Driver{
    name:String!
    email:String!
    password:String!
    cellNumber:String!
    status:Boolean
  }

  type Passanger{
    name:String!
    email:String!
    password:String!
    cellNumber:String!
  }
  
  type Vehicle{
    driverId:ID!
    make:String!
    model:String!
    color:String!
    vehicleRegNo:String!
  }

  type Ride{
    vehicleRegNum:String!
    passanger_Id:ID!
    driver_Id:ID!
    rideStart:Date
    rideEnd:Date
    pickup:String!
    destination:String!
  }
`;

 

 
