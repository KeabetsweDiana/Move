const {Passenger} = require("../../models/models");

module.exports ={
        Query:{
            async passangers(parent,{}){
                try{

                    const passangers = await Passenger.find()
                    return passangers
                }
                catch(err){
                    throw new Error(err)
                }

            },

            async getPassangerById(parent,{_id}){
                try{
                    const passanger = await Passenger.findById(_id)
                    return passanger
                }

                catch(err){
                    throw new Error(err)
                }
            }
            
        },

        Mutation:{
            async registerPassanger(parent,{name, email,password,cellNumber}){
            try{
                const passanger = new Passenger({name ,email ,password ,cellNumber})
                await passanger.save()
                return passanger         
            }
            catch(err){
                throw new Error(err)
            }
        },

        async removePassangerById(parent,{_id}){
            try{
                const passanger = Passenger.findByIdAndRemove(_id)
                return passanger
            }
            catch(err){
                throw new Error(err)
            }
        }
    }

}