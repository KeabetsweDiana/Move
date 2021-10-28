const {Vehicle} = require("../../models/models");

module.exports={
    Query:{
        async vehicles(parent,{}){
            try{
            const vehicles = await Vehicle.find()
            return vehicles
            }
            catch(err){
                throw new Error(err)
            }
        },

        async getVehicleById(parent,{_id}){
            try{
                const vehicle = await Vehicle.findById(_id)
                return vehicle
            }
            catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation:{
        async createVehicle(parent,{driverId, make, model, color,vehicleRegNo}){
            try{
                const vehicle = new Vehicle({driverId, make, model, color,vehicleRegNo})
                await vehicle.save()
                return vehicle
            }
            catch(err){
                throw new Error(err)
            }
        },

        async removeVehicleById(parent,{_id}){
            try{
                const vehicle = await Vehicle.findByIdAndRemove(_id)
                return vehicle
            }
            catch(err){
                throw new Error(err)
            }
        }

    }
}