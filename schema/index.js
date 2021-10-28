const datescalar = require("./resolvers/datescalar");
const driverResolvers = require("./resolvers/driverResolvers");
const passangerResolvers = require("./resolvers/passangerResolvers")
const rideResolvers = require("./resolvers/rideResolvers")

module.exports = {
    Query:{
        ...driverResolvers.Query,
        ...passangerResolvers.Query,
        ...rideResolvers.Query,
        //...datescalar
    },

    Mutation:{
        
        ...driverResolvers.Mutation,
        ...passangerResolvers.Mutation
    }
    
}