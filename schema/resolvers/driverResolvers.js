const {Driver} =require("../../models/models")

module.exports = {

    Query: {
//Return a specific driver using their id
      async getDriverById(parent,{_id}){
          try{
              const driver = Driver.findById(_id);
              return driver
          }
          catch(err){
              throw new Error(err);
          }
      
      },
//Return all drivers (IN A REAL WORLD APPLICATION WE'D RETURN [DRIVERS] FROM A SPECIFIC LOCATION)
      async drivers(parent,{}){
          try{
              const drivers = await Driver.find()
              return drivers
          }
          catch(err){
              throw new Error(err);
          }
      }
    },

    Mutation:{
//Register a driver into the system
        async registerDriver(parent,{name, email, password,cellNumber,status}){
            try{
                const driver = await new Driver({name, email, password,cellNumber,status})
                await driver.save()
                return driver
            }
            catch(err){
                throw new Error(err);
            }
        },
//Remove a driver
        async removeDriverById(parent,{_id}){
            try{
                const driver = awaitDriver.findByIdAndDelete(_id)
                return driver
            }
            catch(err){
                throw new Error(err);
            }
        }
    }

}