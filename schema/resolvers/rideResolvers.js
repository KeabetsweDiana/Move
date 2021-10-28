const {Ride} = require("../../models/models");

module.exports = {
    Query:{
        //👅
        async rides(parent,{}){
            try{
                const rides = await Ride.find()
                return rides
            }
            catch(err){
                throw new Error(err)
            }
        },

        //initiate 👅
        async getRideById(parent,{_id}){
            try{
                const ride = await Ride.findById(_id)
            }
            catch(err){
                throw new Error(err)
            }
        }

    }
}